import type { RatingAverage } from "../../lib/statistics";
import { averagesToCsv, downloadCsv } from "../../lib/csvExport";

type Props = {
  rows: RatingAverage[];
};

export default function ExportButton({ rows }: Props) {
  function handleExport() {
    const csv = averagesToCsv(rows);
    downloadCsv("das-vegane-quartett-ratings.csv", csv);
  }

  return (
    <button
      type="button"
      className="button"
      onClick={handleExport}
    >
      CSV herunterladen
    </button>
  );
}