import {
  Calendar,
  ChevronLeft,
  ExternalLink,
  Github,
  MessageCircle,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import { AppContainer } from '../_components/app-container'

export const Post = () => {
  return (
    <main className="-mt-[5.5rem] pb-16">
      <AppContainer>
        <section className="rounded-[0.625rem] bg-profile p-8 shadow-lg">
          <div className="mb-5 flex items-start justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-xs uppercase leading-relaxed text-blue underline-offset-4 hover:underline"
            >
              <ChevronLeft className="size-4" />
              Voltar
            </Link>

            <a
              href="#"
              target="_blank"
              className="flex items-start gap-2 text-xs uppercase leading-relaxed text-blue underline-offset-4 hover:underline"
            >
              Github <ExternalLink className="size-3" />
            </a>
          </div>

          <h1 className="mb-2 text-2xl font-bold leading-snug text-title">
            post title
          </h1>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-base text-subtitle">
              <Github className="size-[1.125rem] text-label" />
              rodrigoqueiroz12
            </span>

            <span className="flex items-center gap-2 text-base text-subtitle">
              <Calendar className="size-[1.125rem] text-label" />
              Há 1 dia
            </span>

            <span className="flex items-center gap-2 text-base text-subtitle">
              <MessageCircle className="size-[1.125rem] text-label" />5
              comentários
            </span>
          </div>
        </section>

        <section className="p-10">
          <p className="leading-relaxed text-text">
            <strong>
              Programming languages all have built-in data structures, but these
              often differ from one language to another.
            </strong>{' '}
            This article attempts to list the built-in data structures available
            in JavaScript and what properties they have. These can be used to
            build other data structures. Wherever possible, comparisons with
            other languages are drawn.
          </p>
          <br />
          <p className="leading-relaxed text-blue">Dynamic typing</p>
          <p className="leading-relaxed text-text">
            JavaScript is a loosely typed and dynamic language. Variables in
            JavaScript are not directly associated with any particular value
            type, and any variable can be assigned (and re-assigned) values of
            all types:
          </p>
          <br />
          <code className="flex rounded-sm bg-post p-4">
            let foo = 42; <br />
            foo = ‘bar’;
            <br />
            string foo = true;
            <br />
          </code>
        </section>
      </AppContainer>
    </main>
  )
}
