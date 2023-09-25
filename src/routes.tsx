import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AuthorizedRoutes } from '@/components'
import { AppProvider } from '@/providers'
import { CreateMedicine, Home, Login } from '@/views'

const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<AuthorizedRoutes />}>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/create-medicine" element={<CreateMedicine />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}

export default RoutesProvider
