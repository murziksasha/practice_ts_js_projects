

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uoissjjemywyradsunoc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvaXNzamplbXl3eXJhZHN1bm9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYxMjc3OTAsImV4cCI6MjAyMTcwMzc5MH0.OrStZJp4Frmh11kQ4cQBMxIlRuwpAqVKUr8bTqyitIo';
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;