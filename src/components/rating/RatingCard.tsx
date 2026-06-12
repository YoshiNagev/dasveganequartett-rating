import type { Rating } from "../../types/Rating";
import { ratingCategories } from "../../lib/ratingCategories";

type Props = {
  argument: {
    id: number;
    category: string;
    argument: string;
    objection: string;
  };
  rating: Rating;
  onChange: (
    key: keyof Omit<Rating, "argumentId">,
    value: number
  ) => void;
};

export default function RatingCard({
  argument,
  rating,
  onChange,
}: Props) {
  return (
    <article className="rating-card">
      <div className="rating-meta">
        Karte {argument.id} · {argument.category}
      </div>

      <h1 className="argument-text">
        {argument.argument}
      </h1>

      <details className="rating-help" open>
        <summary>
          Bewertungshilfe
        </summary>

        <div className="rating-help-content">

          <p>
            <strong>Verbreitung:</strong><br />
            Wie häufig hört man dieses Argument in Diskussionen über Veganismus?
            <br />
            <em>Viele Punkte = sehr häufig.</em>
          </p>

          <p>
            <strong>Komplexität:</strong><br />
            Wie ausgiebig muss man sich mit dem Argument beschäftigen,
            um es widerlegen zu können?
            <br />
            <em>Viele Punkte = komplexe Widerlegung.</em>
          </p>

          <p>
            <strong>Emotionalität:</strong><br />
            Wie emotional sind die Nichtveganer, die so argumentieren?
            Beziehungsweise wie viel hängt ihnen an diesem Argument?
            <br />
            <em>Viele Punkte = starke emotionale Bindung.</em>
          </p>

          <p>
            <strong>Delulu-Faktor:</strong><br />
            Wie realitätsfern muss man sein, um so zu argumentieren?
            <br />
            <em>Viele Punkte = besonders realitätsfern.</em>
          </p>

          <p>
            <strong>Ragebait-Faktor:</strong><br />
            Wie gerne würden Veganer auf dieses Argument emotional reagieren?
            <br />
            <em>Viele Punkte = besonders frustrierend oder provozierend.</em>
          </p>

          <p>
            <strong>Ablenkungsfaktor:</strong><br />
            Wie viel versucht dieses Argument eigentlich nur,
            von den Opfern abzulenken?
            <br />
            <em>Viele Punkte = starker Whataboutism oder Themenwechsel.</em>
          </p>

        </div>
      </details>

      {ratingCategories.map((category) => (
        <div
          className="scale"
          key={category.key}
        >
          <div className="scale-header">
            <span>{category.label}</span>

            <span className="scale-value">
              {rating[category.key]}
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={rating[category.key]}
            onChange={(event) =>
              onChange(
                category.key,
                Number(event.target.value)
              )
            }
          />
        </div>
      ))}
    </article>
  );
}