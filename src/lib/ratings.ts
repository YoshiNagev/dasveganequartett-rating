import { supabase } from "./supabaseClient";
import type { Rating } from "../types/Rating";

export async function submitRatings(ratings: Rating[]) {
  const sessionId = crypto.randomUUID();

  const { error: sessionError } = await supabase
    .from("rating_sessions")
    .insert({
      id: sessionId,
      completed_at: new Date().toISOString(),
    });

  if (sessionError) {
    throw sessionError;
  }

  const rows = ratings.map((rating) => ({
    session_id: sessionId,
    argument_id: rating.argumentId,

    verbreitung: rating.verbreitung,
    komplexitaet: rating.komplexitaet,
    emotionalitaet: rating.emotionalitaet,

    delulu: rating.delulu,
    ragebait: rating.ragebait,
    ablenkung: rating.ablenkung,
  }));

  const { error: ratingsError } = await supabase
    .from("ratings")
    .insert(rows);

  if (ratingsError) {
    throw ratingsError;
  }

  return sessionId;
}

export async function getRawRatings() {
  const { data, error } = await supabase
    .from("ratings")
    .select("*")
    .order("argument_id", { ascending: true });

  if (error) {
    throw error;
  }

  return data;
}

export async function getSessions() {
  const { data, error } = await supabase
    .from("rating_sessions")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data;
}