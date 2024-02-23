import background from '@/assets/app-header-background.svg'
import { AppLogo } from '@/views/_components/app-logo'

export const AppHeader = () => {
  return (
    <header className="relative -z-10 flex h-[18.5rem] items-start justify-center pt-16">
      <img
        src={background}
        alt=""
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full select-none object-cover"
      />

      <AppLogo />
    </header>
  )
}
