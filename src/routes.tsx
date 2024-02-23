import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './views/_layouts/app'
import { Home } from './views/pages/home'
import { Post } from './views/pages/post'

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
        path: '/posts/:postId',
        element: <Post />,
      },
    ],
  },
])
