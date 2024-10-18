import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://zjdofpdfldxvvfgrxnvc.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqZG9mcGRmbGR4dnZmZ3J4bnZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwNDk2MTEsImV4cCI6MjA0MzYyNTYxMX0.CiHjCR8KQFAY1APQCox1ZhDTddqOAcd-6iKu51hCEmA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
