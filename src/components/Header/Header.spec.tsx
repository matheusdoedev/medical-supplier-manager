import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Header from '.'

import { theme } from '@/styles'

vi.mock('react-router-dom', () => {
  return {
    useNavigate: vi.fn(),
  }
})

describe('Header component', () => {
  it('should render', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('header')).toBeInTheDocument()
  })
})
