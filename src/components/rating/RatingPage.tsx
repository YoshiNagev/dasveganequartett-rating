import { useEffect, useMemo, useState } from "react";
import { argumentsList } from "../../data/arguments";
import type { Rating } from "../../types/Rating";
import {
  saveProgress,
  loadProgress,
  clearProgress,
} from "../../lib/localProgress";
import {
  createRatingSession,
  saveSingleRating,
  completeRatingSession,
} from "../../lib/ratings";
import RatingCard from "./RatingCard";
import CompletionScreen from "./CompletionScreen";

const TOTAL_ARGUMENTS = argumentsList.length;

function createEmptyRating(argumentId: number): Rating {
  return {
    argumentId,
    verbreitung: 50,
    komplexitaet: 50,
    emotionalitaet: 50,
    delulu: 50,
    ragebait: 50,
    ablenkung: 50,
  };
}

async function createBalancedOrder() {
  const { supabase } = await import("../../lib/supabaseClient");

  const { data, error } = await supabase
    .from("ratings")
    .select("argument_id");

  if (error) {
    throw error;
  }

  const counts = new Map<number, number>();

  for (const argument of argumentsList) {
    counts.set(argument.id, 0);
  }

  for (const row of data ?? []) {
    counts.set(
      row.argument_id,
      (counts.get(row.argument_id) ?? 0) + 1
    );
  }

  const startArgument = argumentsList.reduce((lowest, current) => {
    const lowestCount = counts.get(lowest.id) ?? 0;
    const currentCount = counts.get(current.id) ?? 0;

    if (currentCount < lowestCount) {
      return current;
    }

    return lowest;
  });

  const ids = argumentsList.map((argument) => argument.id);
  const startIndex = ids.indexOf(startArgument.id);

  return [
    ...ids.slice(startIndex),
    ...ids.slice(0, startIndex),
  ];
}

function findFirstUnratedIndex(
  order: number[],
  ratings: Record<number, Rating>
) {
  const index = order.findIndex((argumentId) => !ratings[argumentId]);

  if (index === -1) {
    return TOTAL_ARGUMENTS;
  }

  return index;
}

export default function RatingPage() {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [order, setOrder] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ratings, setRatings] = useState<Record<number, Rating>>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const currentArgumentId = order[currentIndex];

  const currentArgument = useMemo(() => {
    return argumentsList.find(
      (argument) => argument.id === currentArgumentId
    );
  }, [currentArgumentId]);

  const currentRating = useMemo(() => {
    if (!currentArgument) {
      return null;
    }

    return (
      ratings[currentArgument.id] ??
      createEmptyRating(currentArgument.id)
    );
  }, [currentArgument, ratings]);

  const isComplete = currentIndex >= TOTAL_ARGUMENTS;

  useEffect(() => {
    async function init() {
      try {
        const saved = loadProgress();

        if (saved) {
          const nextIndex = findFirstUnratedIndex(
            saved.order,
            saved.ratings
          );

          setSessionId(saved.sessionId);
          setOrder(saved.order);
          setRatings(saved.ratings);
          setCurrentIndex(nextIndex);
          setIsLoaded(true);
          return;
        }

        const newSessionId = await createRatingSession();
        const newOrder = await createBalancedOrder();

        setSessionId(newSessionId);
        setOrder(newOrder);
        setRatings({});
        setCurrentIndex(0);

        saveProgress({
          sessionId: newSessionId,
          currentIndex: 0,
          order: newOrder,
          ratings: {},
        });

        setIsLoaded(true);
      } catch (err) {
        console.error(err);
        setError("Die Bewertung konnte nicht gestartet werden.");
        setIsLoaded(true);
      }
    }

    init();
  }, []);

  useEffect(() => {
    if (!isLoaded || !sessionId || order.length === 0) {
      return;
    }

    saveProgress({
      sessionId,
      currentIndex,
      order,
      ratings,
    });
  }, [isLoaded, sessionId, currentIndex, order, ratings]);

  function updateRating(
    key: keyof Omit<Rating, "argumentId">,
    value: number
  ) {
    if (!currentArgument) {
      return;
    }

    setRatings((previous) => {
      const existing =
        previous[currentArgument.id] ??
        createEmptyRating(currentArgument.id);

      return {
        ...previous,
        [currentArgument.id]: {
          ...existing,
          [key]: value,
        },
      };
    });
  }

  async function goNext() {
    if (!sessionId || !currentArgument || !currentRating) {
      return;
    }

    setIsSaving(true);
    setError(null);

    try {
      await saveSingleRating(sessionId, currentRating);

      const newRatings = {
        ...ratings,
        [currentArgument.id]: currentRating,
      };

      setRatings(newRatings);

      const nextIndex = Math.min(
        currentIndex + 1,
        TOTAL_ARGUMENTS
      );

      setCurrentIndex(nextIndex);

      saveProgress({
        sessionId,
        currentIndex: nextIndex,
        order,
        ratings: newRatings,
      });

      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error(err);
      setError(
        "Diese Bewertung konnte nicht gespeichert werden. Bitte versuche es noch einmal."
      );
    } finally {
      setIsSaving(false);
    }
  }

  function goBack() {
    setCurrentIndex((previous) =>
      Math.max(previous - 1, 0)
    );

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit() {
    if (!sessionId) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await completeRatingSession(sessionId);

      clearProgress();
      window.location.href = "/danke";
    } catch (err) {
      console.error(err);

      setError(
        "Die Teilnahme konnte nicht abgeschlossen werden. Deine bisherigen Bewertungen wurden aber bereits gespeichert."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!isLoaded) {
    return (
      <div className="rating-shell">
        <p>Lade Bewertung...</p>
      </div>
    );
  }

  if (error && !currentArgument) {
    return (
      <div className="rating-shell">
        <p className="error">{error}</p>
      </div>
    );
  }

  return (
    <div className="rating-shell">
      <div className="progress-label">
        <span>
          {isComplete
            ? "Fertig"
            : `Argument ${currentIndex + 1} von ${TOTAL_ARGUMENTS}`}
        </span>

        <span>
          {Math.round((currentIndex / TOTAL_ARGUMENTS) * 100)}%
        </span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{
            width: `${(currentIndex / TOTAL_ARGUMENTS) * 100}%`,
          }}
        />
      </div>

      {isComplete ? (
        <CompletionScreen
          isSubmitting={isSubmitting}
          error={error}
          onSubmit={handleSubmit}
          onBack={goBack}
        />
      ) : (
        <>
          {currentArgument && currentRating && (
            <RatingCard
              argument={currentArgument}
              rating={currentRating}
              onChange={updateRating}
            />
          )}

          <div className="rating-actions">
            <button
              className="button secondary"
              type="button"
              onClick={goBack}
              disabled={currentIndex === 0 || isSaving}
            >
              Zurück
            </button>

            <button
              className="button"
              type="button"
              onClick={goNext}
              disabled={isSaving}
            >
              {isSaving ? "Speichert..." : "Weiter"}
            </button>
          </div>

          {error && (
            <p className="error">
              {error}
            </p>
          )}
        </>
      )}
    </div>
  );
}