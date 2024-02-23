import axios from 'axios'

import { env } from '@/env'

export const api = axios.create({
  baseURL: env.VITE_GITHUB_API_URL,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
  },
})
