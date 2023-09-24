import { render, screen } from '@testing-library/react'

import { TestProvider } from '@/__tests__'

import Button from '.'

describe('Button component', () => {
  it('should render', () => {
    render(
      <TestProvider>
        <Button>Teste</Button>
      </TestProvider>,
    )

    expect(screen.getByTestId('button')).toBeInTheDocument()
  })
})
