import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import TextField from '.'

import { theme } from '@/styles'

describe('TextField component', () => {
  it('should render', () => {
    render(
      <ThemeProvider theme={theme}>
        <TextField
          name="teste"
          label="Teste"
          value="Teste"
          onChange={(event) => void event}
        />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('text-field')).toBeInTheDocument()
  })
})
