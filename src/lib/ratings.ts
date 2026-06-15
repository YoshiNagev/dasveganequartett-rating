import { supabase } from "./supabaseClient";
import type { Rating } from "../types/Rating";

export async function createRatingSession() {
  const sessionId = crypto.randomUUID();

  const { error } = await supabase
    .from("rating_sessions")
    .insert({
      id: sessionId,
      started_at: new Date().toISOString(),
    });

  if (error) {
    throw error;
  }

  return sessionId;
}

export async function saveSingleRating(
  sessionId: string,
  rating: Rating
) {
  const { error } = await supabase
    .from("ratings")
    .upsert(
      {
        session_id: sessionId,
        argument_id: rating.argumentId,

        verbreitung: rating.verbreitung,
        komplexitaet: rating.komplexitaet,
        emotionalitaet: rating.emotionalitaet,

        delulu: rating.delulu,
        ragebait: rating.ragebait,
        ablenkung: rating.ablenkung,
      },
      {
        onConflict: "session_id,argument_id",
      }
    );

  if (error) {
    throw error;
  }
}

export async function completeRatingSession(sessionId: string) {
  const { error } = await supabase
    .from("rating_sessions")
    .update({
      completed_at: new Date().toISOString(),
    })
    .eq("id", sessionId);

  if (error) {
    throw error;
  }
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
    .order("started_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data;
}