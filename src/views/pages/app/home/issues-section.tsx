import { useQuery } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import debounce from 'lodash.debounce'
import { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'

import { getIssues } from '@/api/get-issues'
import { Card, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Markdown } from '@/views/_components/markdown/markdown'

export const IssuesSection = () => {
  const [query, setQuery] = useState('')

  const { data: issues } = useQuery({
    queryKey: ['issues', query],
    queryFn: () => getIssues(query),
    staleTime: 1000 * 60 * 5, // 5 minutos
    retry: false,
  })

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const debouncedOnChange = debounce(onChange, 500)

  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-bold leading-relaxed text-card-foreground">
          Publicações
        </h2>

        {issues && (
          <span className="text-sm text-muted-foreground">
            {issues.items.length === 1
              ? `${issues?.items.length} publicação`
              : `${issues?.items.length} publicações`}
          </span>
        )}
      </div>

      <Input
        type="text"
        onChange={debouncedOnChange}
        placeholder="Buscar conteúdo"
        autoComplete="off"
        className="mb-12 h-[3.125rem] rounded-sm px-4 text-base leading-[1.6]"
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {issues &&
          issues.items.map((issue) => (
            <Link to={`/posts/${issue.number}`} key={issue.id}>
              <article>
                <Card className="relative h-[16.25rem] overflow-hidden rounded-md p-6">
                  <div className="mb-5 flex flex-col items-start justify-between gap-3 md:flex-row">
                    <CardTitle className="order-2 text-xl font-bold leading-[1.6] text-card-foreground md:order-1">
                      {issue.title}
                    </CardTitle>

                    <span className="order-1 text-nowrap text-sm leading-[1.6] text-muted-foreground md:order-2">
                      {formatDistanceToNow(issue.created_at, {
                        locale: ptBR,
                        addSuffix: true,
                      })}
                    </span>
                  </div>
                  <Markdown>{issue.body.substring(200, -1)}</Markdown>
                  <div className="from-post to-post/70 absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t"></div>
                </Card>
              </article>
            </Link>
          ))}
      </div>
    </section>
  )
}
