import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'

import { TooltipProvider } from './components/ui/tooltip'
import { ThemeProvider } from './contexts/ThemeContext'
import { queryClient } from './lib/react-query'
import { routes } from './routes'

export default function Provider() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider storageKey="github-blog-ui-theme">
        <TooltipProvider>
          <RouterProvider router={routes} />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
