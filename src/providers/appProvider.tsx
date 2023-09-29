import { FC, ReactNode } from 'react'
import { QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'

import { Toast } from '@/components'
import { AuthProvider, queryProvider } from '@/providers'

import { Reset, theme } from '@/styles'

import 'react-toastify/dist/ReactToastify.css'
import 'react-datepicker/dist/react-datepicker.css'

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <div data-testid="app">
      <ThemeProvider theme={theme}>
        <Reset />

        <QueryClientProvider client={queryProvider}>
          <AuthProvider>
            {children} <Toast />
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  )
}
