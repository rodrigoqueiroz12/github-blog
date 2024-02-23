import { useQuery } from '@tanstack/react-query'
import { Building, ExternalLink, Github, Users } from 'lucide-react'

import { getUser } from '@/api/get-user'

import { AppContainer } from '../_components/app-container'

export const Home = () => {
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(),
    staleTime: 1000 * 60 * 60 * 1, // 1 hora
  })

  return (
    <main className="-mt-[5.5rem] pb-16">
      <AppContainer>
        <section className="mb-16 flex gap-8 rounded-[0.625rem] bg-profile p-8 shadow-lg">
          <img
            src={user?.avatar_url}
            alt={user?.name}
            className="pointer-events-none size-36 min-w-36 select-none rounded-lg"
          />

          <div className="w-full pt-2">
            <div className="mb-2 flex items-start justify-between">
              <h1 className="text-2xl font-bold leading-snug text-title">
                {user?.name}
              </h1>
              <a
                href={user?.html_url}
                target="_blank"
                className="flex items-start gap-2 text-xs uppercase leading-relaxed text-blue underline-offset-4 hover:underline"
                rel="noreferrer"
              >
                Github <ExternalLink className="size-3" />
              </a>
            </div>

            <p className="mb-6 text-base leading-relaxed">{user?.bio}</p>

            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-base text-subtitle">
                <Github className="size-[1.125rem] text-label" />
                {user?.login}
              </span>

              {user && user.company && (
                <span className="flex items-center gap-2 text-base text-subtitle">
                  <Building className="size-[1.125rem] text-label" />
                  {user.company}
                </span>
              )}

              <span className="flex items-center gap-2 text-base text-subtitle">
                <Users className="size-[1.125rem] text-label" />
                {user?.followers} seguidores
              </span>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold leading-relaxed text-subtitle">
              Publicações
            </h2>

            <span className="text-sm text-span">6 publicações</span>
          </div>

          <input
            type="text"
            placeholder="Buscar conteúdo"
            autoComplete="off"
            className="mb-12 w-full rounded-md border border-border bg-input px-4 py-3 leading-relaxed text-text outline-none transition-colors placeholder:text-label focus:border-blue"
          />

          <div className="grid grid-cols-2 gap-8">
            <article className="relative h-[16.25rem] overflow-hidden rounded-[0.625rem] bg-post p-8">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold leading-relaxed text-title">
                  Title
                </h3>
                <span className="text-sm leading-relaxed text-span">
                  Há 1 dia
                </span>
              </div>

              <p className="text-base leading-relaxed text-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, est
                delectus saepe sunt, laudantium neque vero atque at repellendus
                officiis in autem fugit natus distinctio itaque ex consectetur
                molestias reiciendis veniam sed, dolore ducimus maxime pariatur
                exercitationem? Corporis odio amet a sint, repellat suscipit ab
                officiis saepe, error fuga recusandae totam nemo inventore
                mollitia! Modi fugit soluta porro nam voluptatem similique!
                Aperiam quidem, voluptas magni unde architecto fugiat libero
                vitae sequi sapiente delectus accusantium. Magnam in ea optio
                doloremque odio, quod similique repudiandae dolor, dignissimos,
                quia quas architecto ratione quam enim consectetur iste
                excepturi praesentium nobis? Reprehenderit illo atque facilis!
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-post to-post/70"></div>
            </article>
          </div>
        </section>
      </AppContainer>
    </main>
  )
}
