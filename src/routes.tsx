import { createBrowserRouter } from 'react-router-dom'

import { CreateMedicine, Home, Login } from '@/views'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Home />,
  },
  {
    path: '/create-medicine',
    element: <CreateMedicine />,
  },
])
