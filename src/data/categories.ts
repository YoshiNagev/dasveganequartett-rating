export const categories = [
  "Verbreitung",
  "Komplexität",
  "Emotionalität",
  "Delulu-Faktor",
  "Ragebait-Faktor",
  "Ablenkungsfaktor",
] as const;

export type Category = typeof categories[number];