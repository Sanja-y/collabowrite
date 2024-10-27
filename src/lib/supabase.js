
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tgruzbiwlwrhylzimohs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRncnV6Yml3bHdyaHlsemltb2hzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwMTQ4ODQsImV4cCI6MjA0NTU5MDg4NH0.bVTYCgj3m_y9intdC-6RmnR1gb6WX2w3Q-jR43DQ23w'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;