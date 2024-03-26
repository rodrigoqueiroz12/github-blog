import {
  ExternalLinkIcon,
  GitHubLogoIcon,
  PersonIcon,
} from '@radix-ui/react-icons'
import { useQuery } from '@tanstack/react-query'

import { getUser } from '@/api/get-user'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export const ProfileSection = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(),
    staleTime: Infinity,
  })

  return (
    <section>
      <Card className="mb-16 flex flex-col gap-8 rounded-lg bg-background p-6 shadow md:flex-row">
        {isLoading ? (
          <Skeleton className="mx-auto size-36 min-w-36 rounded-md md:mx-0" />
        ) : (
          <img
            src={user?.avatar_url}
            alt={user?.name}
            className="pointer-events-none mx-auto size-36 select-none rounded-md md:mx-0"
          />
        )}

        <div className="w-full pt-2">
          <div className="mb-2 flex flex-col items-start justify-between md:flex-row">
            {isLoading ? (
              <Skeleton className="h-8 min-w-[18.25rem] max-w-full" />
            ) : (
              <h1 className="order-2 text-2xl font-bold leading-snug text-card-foreground md:order-1">
                {user?.name}
              </h1>
            )}

            {isLoading ? (
              <Skeleton className="h-7 w-20 max-w-full" />
            ) : (
              <a
                href={user?.html_url}
                target="_blank"
                className="order-1 flex items-start gap-2 text-xs font-bold uppercase leading-relaxed text-primary underline-offset-4 hover:underline md:order-2"
                rel="noreferrer"
              >
                Github <ExternalLinkIcon className="size-3 text-primary" />
              </a>
            )}
          </div>

          {isLoading ? (
            <Skeleton className="mb-6 h-7 w-full" />
          ) : (
            <p className="mb-6 leading-relaxed text-muted-foreground">
              {user?.bio}
            </p>
          )}

          <div className="flex flex-col items-center gap-6 md:flex-row">
            {isLoading ? (
              <Skeleton className="h-7 w-36" />
            ) : (
              <span className="flex items-center gap-2 text-muted-foreground">
                <GitHubLogoIcon className="size-[1.125rem] text-accent-foreground" />
                {user?.login}
              </span>
            )}

            {isLoading ? (
              <Skeleton className="h-7 w-36" />
            ) : (
              <span className="flex items-center gap-2 text-muted-foreground">
                <PersonIcon className="size-[1.125rem] text-accent-foreground" />
                {user?.followers} seguidores
              </span>
            )}
          </div>
        </div>
      </Card>
    </section>
  )
}
