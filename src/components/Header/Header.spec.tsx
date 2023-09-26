import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Header from '.'

import { theme } from '@/styles'

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
