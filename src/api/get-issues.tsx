import { env } from '@/env'
import { api } from '@/lib/axios'

interface getIssuesResponse {
  total_count: 280
  incomplete_results: false
  items: {
    body: string
    url: string
    repository_url: string
    labels_url: string
    comments_url: string
    events_url: string
    html_url: string
    id: number
    node_id: string
    number: number
    title: string
    user: {
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
      site_admin: boolean
    }
    labels: [
      {
        id: number
        node_id: string
        url: string
        name: string
        color: string
      },
    ]
    state: string
    assignee: string | null
    milestone: {
      url: string
      html_url: string
      labels_url: string
      id: number
      node_id: string
      number: number
      state: string
      title: string
      description: string
      creator: {
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
        site_admin: string | false
      }
      open_issues: number
      closed_issues: number
      created_at: string
      updated_at: string
      closed_at: string | null
      due_on: string | null
    }
    comments: number
    created_at: string
    updated_at: string
    closed_at: string | null
    pull_request: {
      url: string
      html_url: string
      diff_url: string
      patch_url: string
    }
    score: number
    locked: boolean
    author_association: string
    state_reason: string
  }[]
}

export const getIssues = async (searchTerm: string) => {
  const res = await api.get<getIssuesResponse>('/search/issues', {
    params: {
      q: `${searchTerm} repo:${env.VITE_GITHUB_USERNAME}/${env.VITE_GITHUB_DEFAULT_REPOSITORY}`,
    },
  })

  return res.data
}
