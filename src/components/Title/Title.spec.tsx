import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Title from '.'

import { theme } from '@/styles'

describe('Title component', () => {
  it('should render', () => {
    render(
      <ThemeProvider theme={theme}>
        <Title>teste</Title>
      </ThemeProvider>,
    )

    expect(screen.getByTestId('title')).toBeInTheDocument()
  })
})
