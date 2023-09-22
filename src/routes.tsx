import { createBrowserRouter } from 'react-router-dom'

import { Home } from '@/views'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])
