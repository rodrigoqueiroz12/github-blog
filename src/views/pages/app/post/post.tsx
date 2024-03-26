/* eslint-disable react-hooks/rules-of-hooks */
import {
  CalendarIcon,
  ChatBubbleIcon,
  ChevronLeftIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
} from '@radix-ui/react-icons'
import { useQuery } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Link, Navigate, useParams } from 'react-router-dom'

import { getIssue } from '@/api/get-issue'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Markdown } from '@/views/_components/markdown/markdown'

import { AppContainer } from '../../../_components/app-container'

export const Post = () => {
  const { post } = useParams()

  if (!post) {
    return <Navigate to="/" />
  }

  const {
    data: issue,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['issue'],
    queryFn: () => getIssue({ issueNumber: post }),
    staleTime: 1000 * 60 * 5, // 5 minutos
    retry: false,
  })

  if (isError) {
    return <Navigate to="/" />
  }

  return (
    <main className="relative z-10 -mt-[5.5rem] pb-16">
      <AppContainer>
        <section>
          <Card className="p-6">
            <div className="mb-5 flex items-center justify-between md:items-start">
              <Link
                to="/"
                className="text-blue flex items-center gap-2 text-xs uppercase leading-relaxed text-muted-foreground underline-offset-4 hover:underline"
              >
                <ChevronLeftIcon className="size-4" />
                Voltar
              </Link>

              {isLoading ? (
                <Skeleton className="h-7 w-20 max-w-full pt-2" />
              ) : (
                <a
                  href={issue?.html_url}
                  target="_blank"
                  className="text-blue flex items-start gap-2 text-xs font-bold uppercase leading-relaxed text-primary underline-offset-4 hover:underline md:pt-2"
                  rel="noreferrer"
                >
                  Github <ExternalLinkIcon className="size-3" />
                </a>
              )}
            </div>

            {isLoading ? (
              <Skeleton className="mb-2 h-8 w-80 max-w-full" />
            ) : (
              <h1 className="mb-6 text-2xl font-bold leading-snug text-card-foreground md:mb-2">
                {issue?.title}
              </h1>
            )}

            <div className="flex flex-col items-center justify-start gap-4 md:flex-row md:gap-8">
              {isLoading ? (
                <Skeleton className="h-7 w-36 max-w-full" />
              ) : (
                <span className="inline-flex items-center gap-2 text-muted-foreground">
                  <GitHubLogoIcon className="text-label size-[1.125rem] text-accent-foreground" />
                  {issue?.user.login}
                </span>
              )}

              {isLoading || !issue ? (
                <Skeleton className="h-7 w-36 max-w-full" />
              ) : (
                <span className="inline-flex items-center gap-2 text-muted-foreground">
                  <CalendarIcon className="text-label size-[1.125rem] text-accent-foreground" />
                  {formatDistanceToNow(issue?.created_at, {
                    locale: ptBR,
                    addSuffix: true,
                  })}
                </span>
              )}

              {isLoading ? (
                <Skeleton className="h-7 w-36 max-w-full" />
              ) : (
                <span className="inline-flex items-center gap-2 text-muted-foreground">
                  <ChatBubbleIcon className="text-label size-[1.125rem] text-accent-foreground" />
                  {issue?.comments} comentário(s)
                </span>
              )}
            </div>
          </Card>
        </section>

        <section className="px-4 py-10 md:p-10">
          <Markdown>{issue?.body}</Markdown>
        </section>
      </AppContainer>
    </main>
  )
}
