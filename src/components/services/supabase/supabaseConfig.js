import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qofauayeoeojrzdxkzdg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvZmF1YXllb2VvanJ6ZHhremRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5OTM1ODgsImV4cCI6MjAyMDU2OTU4OH0.k71oq5F2MSyBNPOkrMmPRZGvtcimbG6bxmyuMEt9GyY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})