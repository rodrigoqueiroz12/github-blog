import { AppLogo } from '@/views/_components/app-logo'

export const AppHeader = () => {
  return (
    <header className="relative flex h-[18.5rem] items-start justify-center border-b border-solid border-border bg-background pt-16">
      <AppLogo />
    </header>
  )
}
