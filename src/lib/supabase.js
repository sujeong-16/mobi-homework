import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://efwszctryswwdtcalych.supabase.co'
const supabaseAnonKey = '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'

// Supabase 프로젝트 대시보드 > Settings > API 에서 두 값 확인 가능!
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
