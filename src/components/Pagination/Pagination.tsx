import { Dispatch, FC } from 'react'
import { styled } from 'styled-components'

import { Icon } from '@/components'
import {
  GetMedicationsParams,
  GetMedicationsParamsReducerActionProps,
} from '@/interfaces'

import { theme } from '@/styles'

interface PaginationProps {
  params: GetMedicationsParams
  paramsDispatch: Dispatch<GetMedicationsParamsReducerActionProps>
  last_page: number
}

const Pagination: FC<PaginationProps> = ({
  params,
  paramsDispatch,
  last_page,
}) => {
  const handleChangePage =
    (action: GetMedicationsParamsReducerActionProps) => () => {
      paramsDispatch(action)
    }

  const handlePaginationBackwardButtons = () =>
    params.page !== 1 && (
      <>
        <PaginationButton
          data-testid="pagination-backwards-buttons"
          onClick={handleChangePage({ type: 'goToFirstPage' })}
        >
          <Icon
            name="doubleArrowLeft"
            fill={theme.colors.secondary['500']}
            width={24}
            height={24}
          />
        </PaginationButton>
        <PaginationButton
          onClick={handleChangePage({ type: 'goToPreviousPage' })}
        >
          <Icon
            name="arrowLeft"
            fill={theme.colors.secondary['500']}
            width={24}
            height={24}
          />
        </PaginationButton>
      </>
    )

  const handlePaginationForwardButtons = () =>
    last_page !== 1 &&
    params.page !== last_page && (
      <>
        <PaginationButton onClick={handleChangePage({ type: 'goToNextPage' })}>
          <Icon
            name="arrowRight"
            fill={theme.colors.secondary['500']}
            width={24}
            height={24}
          />
        </PaginationButton>
        <PaginationButton
          onClick={handleChangePage({
            type: 'goToLastPage',
            lastPage: last_page,
          })}
        >
          <Icon
            name="doubleArrowRight"
            fill={theme.colors.secondary['500']}
            width={24}
            height={24}
          />
        </PaginationButton>
      </>
    )

  return (
    last_page !== 0 && (
      <PaginationButtons data-testid="pagination">
        {handlePaginationBackwardButtons()}
        <PaginationButton>{params.page}</PaginationButton>
        {handlePaginationForwardButtons()}
      </PaginationButtons>
    )
  )
}

const PaginationButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 16px;
  margin-top: 24px;
`

const PaginationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.secondary['500']};
  border: 1px solid ${({ theme }) => theme.colors.secondary['500']};
  border-radius: 4px;

  font-size: 14px;
`

export default Pagination
