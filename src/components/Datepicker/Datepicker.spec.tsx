import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Datepicker from '.'

import { theme } from '@/styles'

describe('Button component', () => {
  it('should render', () => {
    render(
      <ThemeProvider theme={theme}>
        <Datepicker label="Manufactures" onChange={(value) => value} />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('datepicker')).toBeInTheDocument()
  })
})
