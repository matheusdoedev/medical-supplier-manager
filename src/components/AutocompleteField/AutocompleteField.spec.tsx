import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import AutocompleteField from '.'

import { theme } from '@/styles'

describe('Button component', () => {
  it('should render', () => {
    render(
      <ThemeProvider theme={theme}>
        <AutocompleteField
          label="Manufactures"
          placeholder="Select manufactures"
          options={[]}
          value={[]}
          onChange={(value) => value}
        />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('autocomplete')).toBeInTheDocument()
  })
})
