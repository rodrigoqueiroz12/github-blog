import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './views/_layouts/app'
import { Home } from './views/pages/app/home/home'
import { Post } from './views/pages/app/post/post'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/posts/:post',
        element: <Post />,
      },
    ],
  },
])
