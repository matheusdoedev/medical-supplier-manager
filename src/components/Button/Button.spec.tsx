import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Button from '.'

import { theme } from '@/styles'

describe('Button component', () => {
  it('should render', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Teste</Button>
      </ThemeProvider>,
    )

    expect(screen.getByTestId('button')).toBeInTheDocument()
  })
})
