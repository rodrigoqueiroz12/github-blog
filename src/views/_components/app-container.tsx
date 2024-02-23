import { ReactNode } from 'react'

interface AppContainer {
  children: ReactNode
}

export const AppContainer = ({ children }: AppContainer) => {
  return <div className="mx-auto max-w-4xl px-8">{children}</div>
}
