import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface User {
  id: number
  username: string
  password: string
  admin_approval: boolean
  subscription: string | null
  hwid: string[] | null
  expiredate: string | null
  key: string | null
  hwid_reset_count: number
  mobile_number: string | null
  banned: boolean
  save_hwid: boolean
  max_devices: number
  email: string | null
}