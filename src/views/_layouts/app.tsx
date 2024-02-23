import { Outlet } from 'react-router-dom'

import { AppHeader } from './_headers/app-header'

export const AppLayout = () => {
  return (
    <div className="min-h-screen">
      <AppHeader />
      <Outlet />
    </div>
  )
}
