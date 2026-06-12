import type { RatingAverage } from "./statistics";

export function averagesToCsv(rows: RatingAverage[]) {
  const header = [
    "argument_id",
    "category",
    "argument",
    "verbreitung",
    "komplexitaet",
    "emotionalitaet",
    "delulu",
    "ragebait",
    "ablenkung",
    "n",
  ];

  const escapeCsv = (value: unknown) => {
    const stringValue = String(value ?? "");

    return `"${stringValue.replaceAll('"', '""')}"`;
  };

  const lines = rows.map((row) =>
    [
      row.argument_id,
      row.category,
      row.argument,
      row.verbreitung,
      row.komplexitaet,
      row.emotionalitaet,
      row.delulu,
      row.ragebait,
      row.ablenkung,
      row.n,
    ]
      .map(escapeCsv)
      .join(",")
  );

  return [header.join(","), ...lines].join("\n");
}

export function downloadCsv(
  filename: string,
  csv: string
) {
  const blob = new Blob([csv], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();

  URL.revokeObjectURL(url);
}