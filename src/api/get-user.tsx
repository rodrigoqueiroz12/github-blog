import { env } from '@/env'
import { api } from '@/lib/axios'

interface getUserResponse {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: false
  name: string
  company: string
  blog: string
  location: string
  email: string
  hireable: false
  bio: string
  twitter_username: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: Date
  updated_at: Date
  plan: {
    name: string
    space: number
    collaborators: number
    private_repos: number
  }
}

export const getUser = async (): Promise<getUserResponse> => {
  const username = env.VITE_GITHUB_USERNAME

  const res = await api.get(`/users/${username}`)

  return res.data
}
