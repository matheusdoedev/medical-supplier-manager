import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import InternPageLayout from '.'

import { theme } from '@/styles'

vi.mock('react-router-dom', () => {
  return {
    useNavigate: vi.fn(),
  }
})

describe('InternPageLayout layout', () => {
  it('should render', () => {
    render(
      <ThemeProvider theme={theme}>
        <InternPageLayout>Teste</InternPageLayout>
      </ThemeProvider>,
    )

    expect(screen.getByTestId('intern-page-layout')).toBeInTheDocument()
  })
})
