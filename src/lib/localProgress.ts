import type { Rating } from "../types/Rating";

const STORAGE_KEY = "dvq-rating-progress";

export type LocalProgress = {
  sessionId: string;
  currentIndex: number;
  order: number[];
  ratings: Record<number, Rating>;
};

export function saveProgress(progress: LocalProgress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function loadProgress(): LocalProgress | null {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return null;
  }

  return JSON.parse(raw);
}

export function clearProgress() {
  localStorage.removeItem(STORAGE_KEY);
}