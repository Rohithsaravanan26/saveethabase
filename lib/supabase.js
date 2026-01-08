import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key || !url.startsWith('http')) {
    // Only warn in development to keep logs clean in prod if intent is to fail
    if (process.env.NODE_ENV === 'development') {
      console.warn('Supabase credentials missing or invalid. Using placeholders.')
    }
    // Return placeholder client to prevent build crash
    return createBrowserClient(
      'https://placeholder.supabase.co',
      'placeholder-key'
    )
  }

  return createBrowserClient(url, key)
}