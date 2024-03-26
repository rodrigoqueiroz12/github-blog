import { env } from '@/env'
import { api } from '@/lib/axios'

interface getIssueParams {
  issueNumber: string
}

interface getIssueResponse {
  id: number
  html_url: string
  title: string
  created_at: string
  comments: string
  body: string
  user: {
    login: string
  }
}

export const getIssue = async ({ issueNumber }: getIssueParams) => {
  const username = env.VITE_GITHUB_USERNAME
  const repo = env.VITE_GITHUB_DEFAULT_REPOSITORY

  const res = await api.get<getIssueResponse>(
    `/repos/${username}/${repo}/issues/${issueNumber}`,
  )

  return res.data
}
