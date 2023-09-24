import { render, screen } from '@testing-library/react'

import Text from '.'
import { TestProvider } from '@/__tests__'

describe('Text component', () => {
  it('should render', () => {
    render(
      <TestProvider>
        <Text>Teste</Text>
      </TestProvider>,
    )

    expect(screen.getByTestId('text')).toBeInTheDocument()
    expect(screen.getByText('Teste')).toBeInTheDocument()
  })
})
