import { Navigate, Outlet } from 'react-router-dom'

import { getAuthToken } from '@/utils'

const AuthorizedRoutes = () => {
  const token = getAuthToken()

  return !token ? (
    <Navigate to="/?sessionExpired=true" replace={true} />
  ) : (
    <Outlet />
  )
}

export default AuthorizedRoutes
