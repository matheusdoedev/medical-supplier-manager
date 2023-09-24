import { render, screen } from '@testing-library/react'

import Login from '.'

import { TestProvider } from '@/__tests__'

const renderComponent = () => {
  render(
    <TestProvider>
      <Login />
    </TestProvider>,
  )
}

describe('Login view', () => {
  it('should render', () => {
    renderComponent()

    expect(screen.getByTestId('login-view')).toBeInTheDocument()
  })

  it('should contain logo', () => {
    renderComponent()

    expect(screen.getByTestId('logo')).toBeInTheDocument()
  })
})
