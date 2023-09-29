import { useContext } from 'react'

import { AuthContext } from '@/contexts'

export const useAuth = () => {
  const authContext = useContext(AuthContext)

  if (!authContext) {
    throw new Error('useAuth is not defined.')
  }

  return authContext
}
