import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase = null;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are missing - running without backend');
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
    },
  });
}

export { supabase };

// Test connection function
export const testConnection = async () => {
  try {
    const { error } = await supabase.from('projetos').select('count').limit(1);
    if (error) {
      console.error('Supabase connection error:', error);
      return false;
    }
    console.log('✅ Supabase connected successfully');
    return true;
  } catch (err) {
    console.error('Connection test failed:', err);
    return false;
  }
};