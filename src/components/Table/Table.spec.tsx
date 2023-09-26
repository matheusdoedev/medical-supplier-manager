import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Table from '.'

import { theme } from '@/styles'

describe('Table component', () => {
  it('should render', () => {
    render(
      <ThemeProvider theme={theme}>
        <Table heads={['Teste']} data={[]} />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('table')).toBeInTheDocument()
  })
})
