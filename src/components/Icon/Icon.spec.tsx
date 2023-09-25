import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Icon from '.'

import { theme } from '@/styles'

describe('Icon component', () => {
  it('should render', () => {
    render(
      <ThemeProvider theme={theme}>
        <Icon name="add" />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
