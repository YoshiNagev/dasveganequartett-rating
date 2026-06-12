type Props = {
  isSubmitting: boolean;
  error: string | null;
  onSubmit: () => void;
  onBack: () => void;
};

export default function CompletionScreen({
  isSubmitting,
  error,
  onSubmit,
  onBack,
}: Props) {
  return (
    <section className="rating-card">
      <h1 className="argument-text">
        Alle Argumente bewertet!
      </h1>

      <p className="objection-text">
        Du hast alle 54 Argumente bewertet.
        Jetzt kannst du deine Bewertungen abschicken.
      </p>

      <div className="rating-actions">
        <button
          className="button secondary"
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
        >
          Zurück
        </button>

        <button
          className="button"
          type="button"
          onClick={onSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Wird gespeichert..." : "Bewertungen abschicken"}
        </button>
      </div>

      {error && (
        <p className="error">
          {error}
        </p>
      )}
    </section>
  );
}