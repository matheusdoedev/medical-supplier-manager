import { FC, ReactNode } from 'react'
import { QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'

import { queryProvider } from '@/providers'

import { Reset, theme } from '@/styles'

interface RenderWithClientProps {
  children: ReactNode
}

const TestProvider: FC<RenderWithClientProps> = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Reset />

        <QueryClientProvider client={queryProvider}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  )
}

export default TestProvider
