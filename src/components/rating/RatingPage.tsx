import { useEffect, useMemo, useState } from "react";
import { argumentsList } from "../../data/arguments";
import type { Rating } from "../../types/Rating";
import { saveProgress, loadProgress, clearProgress } from "../../lib/localProgress";
import { submitRatings } from "../../lib/ratings";
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

export default function RatingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ratings, setRatings] = useState<Record<number, Rating>>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const currentArgument = argumentsList[currentIndex];

  const currentRating = useMemo(() => {
    if (!currentArgument) {
      return null;
    }

    return ratings[currentArgument.id] ?? createEmptyRating(currentArgument.id);
  }, [currentArgument, ratings]);

  const isComplete = currentIndex >= TOTAL_ARGUMENTS;

  useEffect(() => {
    const saved = loadProgress();

    if (saved) {
      setCurrentIndex(saved.currentIndex ?? 0);
      setRatings(saved.ratings ?? {});
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    saveProgress(currentIndex, ratings);
  }, [currentIndex, ratings, isLoaded]);

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

  function goNext() {
    if (!currentArgument || !currentRating) {
      return;
    }

    setRatings((previous) => ({
      ...previous,
      [currentArgument.id]: currentRating,
    }));

    setCurrentIndex((previous) =>
      Math.min(previous + 1, TOTAL_ARGUMENTS)
    );

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goBack() {
    setCurrentIndex((previous) =>
      Math.max(previous - 1, 0)
    );

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit() {
    setIsSubmitting(true);
    setError(null);

    try {
      const allRatings = argumentsList.map((argument) => {
        return ratings[argument.id] ?? createEmptyRating(argument.id);
      });

      await submitRatings(allRatings);

      clearProgress();
      window.location.href = "/danke";
    } catch (err) {
      console.error(err);

      setError(
        "Die Bewertungen konnten nicht gespeichert werden. Bitte versuche es gleich noch einmal."
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
              disabled={currentIndex === 0}
            >
              Zurück
            </button>

            <button
              className="button"
              type="button"
              onClick={goNext}
            >
              Weiter
            </button>
          </div>
        </>
      )}
    </div>
  );
}