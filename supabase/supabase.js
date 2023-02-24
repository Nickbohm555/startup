
import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://umfmcmfxgpjabpofuvmq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtZm1jbWZ4Z3BqYWJwb2Z1dm1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY4MjUzNTYsImV4cCI6MTk5MjQwMTM1Nn0.0ntTegonsaWB8Pct2ODsJ3sQOpczdBP8BFlS4j_Zi3Q'
export const supabase = createClient(supabaseUrl, supabaseKey)
