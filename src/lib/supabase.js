import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// 환경 변수가 로드되었는지 확인하는 코드를 추가할 수 있습니다.
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Supabase URL 또는 Anon Key가 로드되지 않았습니다. .env 파일 및 VITE_ 접두사를 확인하세요.',
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
