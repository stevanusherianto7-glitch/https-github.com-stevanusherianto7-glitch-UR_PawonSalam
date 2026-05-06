import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ywqatzkkvbzkjnoexvux.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_OHx-2IiaXr6PcOYNX5TaWA_PPM143m6';

export const supabase = createClient(supabaseUrl, supabaseKey);
