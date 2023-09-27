import { render, screen } from '@testing-library/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { AppProvider } from '@/providers'

import Login from '.'

export const MOCK_ROUTER = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppProvider>
        <Login />
      </AppProvider>
    ),
  },
])

const renderComponent = () => {
  render(<RouterProvider router={MOCK_ROUTER} />)
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
