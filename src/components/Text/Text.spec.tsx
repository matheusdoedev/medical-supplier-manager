import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Text from '.'

import { theme } from '@/styles'

describe('Text component', () => {
  it('should render', () => {
    render(
      <ThemeProvider theme={theme}>
        <Text>Teste</Text>
      </ThemeProvider>,
    )

    expect(screen.getByTestId('text')).toBeInTheDocument()
    expect(screen.getByText('Teste')).toBeInTheDocument()
  })
})
