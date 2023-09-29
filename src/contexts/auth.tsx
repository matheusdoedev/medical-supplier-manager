import { createContext } from 'react'

import { AuthContextProps } from '@/interfaces'

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
)
