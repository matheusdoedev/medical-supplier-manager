import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { GET_MEDICATIONS_PARAMS_DEFAULT_VALUE } from '@/constants'

import Pagination from '.'

import { theme } from '@/styles'

const paramsDispatch = vi.fn()

describe('Pagination component', () => {
  it('should render if last page is greater than 0', () => {
    render(
      <ThemeProvider theme={theme}>
        <Pagination
          params={GET_MEDICATIONS_PARAMS_DEFAULT_VALUE}
          paramsDispatch={paramsDispatch}
          last_page={2}
        />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('pagination')).toBeInTheDocument()
  })

  it('should not render if last page is equal to 0', () => {
    render(
      <ThemeProvider theme={theme}>
        <Pagination
          params={GET_MEDICATIONS_PARAMS_DEFAULT_VALUE}
          paramsDispatch={paramsDispatch}
          last_page={0}
        />
      </ThemeProvider>,
    )

    expect(screen.queryByTestId('pagination')).toBeNull()
  })

  it('should not render backwards buttons if page is equal to 1', () => {
    render(
      <ThemeProvider theme={theme}>
        <Pagination
          params={{
            ...GET_MEDICATIONS_PARAMS_DEFAULT_VALUE,
            page: 1,
          }}
          paramsDispatch={paramsDispatch}
          last_page={3}
        />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('pagination')).toBeInTheDocument()
    expect(screen.queryByTestId('pagination-backwards-buttons')).toBeNull()
  })

  it('should render backwards buttons if page is not equal to 1', () => {
    render(
      <ThemeProvider theme={theme}>
        <Pagination
          params={{
            ...GET_MEDICATIONS_PARAMS_DEFAULT_VALUE,
            page: 2,
          }}
          paramsDispatch={paramsDispatch}
          last_page={3}
        />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('pagination')).toBeInTheDocument()
    expect(
      screen.queryByTestId('pagination-backwards-buttons'),
    ).toBeInTheDocument()
  })
})
