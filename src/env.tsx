import { z } from 'zod'

const envSchema = z.object({
  VITE_GITHUB_API_URL: z.string(),
  VITE_GITHUB_USERNAME: z.string(),
})

const _env = envSchema.safeParse(import.meta.env)

if (!_env.success) {
  console.error(import.meta.env)

  throw new Error('Missing environment variables')
}

export const env = _env.data
