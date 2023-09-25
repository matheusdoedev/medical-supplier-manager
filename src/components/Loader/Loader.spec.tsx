import { render, screen } from '@testing-library/react'

import Loader from '.'

describe('Loader component', () => {
  it('should render if loading is true', () => {
    render(<Loader isLoading={true} />)

    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })

  it('should not render if loading is false', () => {
    render(<Loader isLoading={false} />)

    expect(screen.queryByTestId('loader')).toBeNull()
  })
})
