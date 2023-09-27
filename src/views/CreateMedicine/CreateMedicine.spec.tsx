import { render, screen } from '@testing-library/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { AppProvider } from '@/providers'

import CreateMedicine from '.'

export const MOCK_ROUTER = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppProvider>
        <CreateMedicine />
      </AppProvider>
    ),
  },
])

const renderComponent = () => {
  render(<RouterProvider router={MOCK_ROUTER} />)
}

describe('CreateMedicine view', () => {
  it('should render', () => {
    renderComponent()

    expect(screen.getByTestId('create-medicine-view')).toBeInTheDocument()
  })
})
