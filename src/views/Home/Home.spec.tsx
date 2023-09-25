import { render, screen } from '@testing-library/react'

import Home from '.'

describe('Home view', () => {
  it('should render', () => {
    render(<Home />)

    expect(screen.getByTestId('home-view')).toBeInTheDocument()
  })
})
