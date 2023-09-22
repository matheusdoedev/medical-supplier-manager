import { render, screen } from '@testing-library/react'

import App from './App'

describe('App component', () => {
  it('should render', () => {
    render(<App />)

    expect(screen.getByTestId('app')).toBeInTheDocument()
  })
})
