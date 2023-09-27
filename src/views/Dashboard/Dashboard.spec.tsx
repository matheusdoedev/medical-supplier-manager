import { render, screen } from '@testing-library/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { AppProvider } from '@/providers'

import Dashboard from '.'

export const MOCK_ROUTER = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppProvider>
        <Dashboard />
      </AppProvider>
    ),
  },
])

const renderComponent = () => {
  render(<RouterProvider router={MOCK_ROUTER} />)
}

describe('Dashboard view', () => {
  it('should render', () => {
    renderComponent()

    expect(screen.getByTestId('dashboard-view')).toBeInTheDocument()
  })
})
