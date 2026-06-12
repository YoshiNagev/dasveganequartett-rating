import type { Rating } from "../types/Rating";

export type RatingKey = keyof Omit<Rating, "argumentId">;

export const ratingCategories: {
  key: RatingKey;
  label: string;
}[] = [
  {
    key: "verbreitung",
    label: "Verbreitung",
  },
  {
    key: "komplexitaet",
    label: "Komplexität",
  },
  {
    key: "emotionalitaet",
    label: "Emotionalität",
  },
  {
    key: "delulu",
    label: "Delulu-Faktor",
  },
  {
    key: "ragebait",
    label: "Ragebait-Faktor",
  },
  {
    key: "ablenkung",
    label: "Ablenkungsfaktor",
  },
];