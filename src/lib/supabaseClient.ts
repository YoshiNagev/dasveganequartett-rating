import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error("PUBLIC_SUPABASE_URL fehlt in .env");
}

if (!supabaseAnonKey) {
  throw new Error("PUBLIC_SUPABASE_ANON_KEY fehlt in .env");
}

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);