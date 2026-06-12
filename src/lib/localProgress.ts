const STORAGE_KEY = "dvq-rating-progress";

export function saveProgress(
  currentArgument: number,
  ratings: Record<number, any>
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      currentArgument,
      ratings,
    })
  );
}

export function loadProgress() {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return null;
  }

  return JSON.parse(raw);
}

export function clearProgress() {
  localStorage.removeItem(STORAGE_KEY);
}