import { render, screen } from '@testing-library/react'

import { TestProvider } from '@/__tests__'

import TextField from '.'

describe('TextField component', () => {
  it('should render', () => {
    render(
      <TestProvider>
        <TextField name="teste" label="Teste" />
      </TestProvider>,
    )

    expect(screen.getByTestId('text-field')).toBeInTheDocument()
  })
})
