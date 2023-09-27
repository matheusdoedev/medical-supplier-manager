import { screen, render } from '@testing-library/react'

import Logo from '.'

describe('Logo component', () => {
  it('should render', () => {
    render(<Logo variant="default" />)

    expect(screen.getByTestId('logo')).toBeInTheDocument()
  })
})
