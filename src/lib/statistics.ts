import { supabase } from "./supabaseClient";
import { argumentsList } from "../data/arguments";

export type RatingAverage = {
  argument_id: number;
  argument: string;
  category: string;

  verbreitung: number;
  komplexitaet: number;
  emotionalitaet: number;
  delulu: number;
  ragebait: number;
  ablenkung: number;

  n: number;
};

type RawRating = {
  argument_id: number;

  verbreitung: number;
  komplexitaet: number;
  emotionalitaet: number;
  delulu: number;
  ragebait: number;
  ablenkung: number;
};

function average(values: number[]) {
  if (values.length === 0) {
    return 0;
  }

  return (
    values.reduce((sum, value) => sum + value, 0) /
    values.length
  );
}

function round(value: number) {
  return Math.round(value * 10) / 10;
}

export async function getRatingAverages(): Promise<RatingAverage[]> {
  const { data, error } = await supabase
    .from("ratings")
    .select(
      `
      argument_id,
      verbreitung,
      komplexitaet,
      emotionalitaet,
      delulu,
      ragebait,
      ablenkung
      `
    );

  if (error) {
    throw error;
  }

  const ratings = (data ?? []) as RawRating[];

  return argumentsList.map((argument) => {
    const rows = ratings.filter(
      (rating) => rating.argument_id === argument.id
    );

    return {
      argument_id: argument.id,
      argument: argument.argument,
      category: argument.category,

      verbreitung: round(
        average(rows.map((row) => row.verbreitung))
      ),
      komplexitaet: round(
        average(rows.map((row) => row.komplexitaet))
      ),
      emotionalitaet: round(
        average(rows.map((row) => row.emotionalitaet))
      ),
      delulu: round(
        average(rows.map((row) => row.delulu))
      ),
      ragebait: round(
        average(rows.map((row) => row.ragebait))
      ),
      ablenkung: round(
        average(rows.map((row) => row.ablenkung))
      ),

      n: rows.length,
    };
  });
}

export async function getAdminStats() {
  const { count: sessionsCount, error: sessionsError } =
    await supabase
      .from("rating_sessions")
      .select("*", {
        count: "exact",
        head: true,
      });

  if (sessionsError) {
    throw sessionsError;
  }

  const { count: ratingsCount, error: ratingsError } =
    await supabase
      .from("ratings")
      .select("*", {
        count: "exact",
        head: true,
      });

  if (ratingsError) {
    throw ratingsError;
  }

  const completedFullSessions =
    Math.floor((ratingsCount ?? 0) / 54);

  return {
    sessionsCount: sessionsCount ?? 0,
    ratingsCount: ratingsCount ?? 0,
    completedFullSessions,
  };
}