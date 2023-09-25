import { render, screen } from '@testing-library/react'

import CreateMedicine from '.'

describe('CreateMedicine view', () => {
  it('should render', () => {
    render(<CreateMedicine />)

    expect(screen.getByTestId('create-medicine-view')).toBeInTheDocument()
  })
})
