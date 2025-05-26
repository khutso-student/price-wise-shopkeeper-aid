
// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// ✅ Use import.meta.env with Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Temporarily disable the error to allow development with mock data
// if (!supabaseUrl || !supabaseAnonKey) {
//   throw new Error('Missing Supabase environment variables!');
// }

// Create a placeholder client for now
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
