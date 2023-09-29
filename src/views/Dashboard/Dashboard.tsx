import { ChangeEvent, useEffect, useMemo, useReducer, useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

import {
  Button,
  Icon,
  Loader,
  MedicationsDataTableRows,
  Pagination,
  Table,
  Text,
  TextField,
} from '@/components'
import {
  GET_MEDICATIONS_PARAMS_DEFAULT_VALUE,
  MEDICATIONS_ROWS_STYLE,
  MEDICATIONS_TABLE_HEADS,
} from '@/constants'
import { getMedicationsParamsReducer } from '@/hooks'
import { GetWithPagination, Medication } from '@/interfaces'
import { InternPageLayout } from '@/layouts'
import { interviewService } from '@/services'

import { theme } from '@/styles'

const Dashboard = () => {
  const [searchError, setSearchError] = useState<string | undefined>(undefined)
  const [limitError, setLimitError] = useState<string | undefined>(undefined)

  const [params, paramsDispatch] = useReducer(
    getMedicationsParamsReducer,
    GET_MEDICATIONS_PARAMS_DEFAULT_VALUE,
  )

  const navigate = useNavigate()

  const {
    data: getMedicationsData,
    isFetching: isFetchingMedications,
    refetch,
  } = useQuery('getMedications', () => interviewService.getMedications(params))

  const { data: medicationsData, last_page }: GetWithPagination<Medication> =
    useMemo(() => {
      if (!getMedicationsData) return { data: [], last_page: 1, total: 0 }

      return getMedicationsData.data
    }, [getMedicationsData])

  const goToCreateMedicineView = () => {
    navigate('/create-medicine')
  }

  const handleTableRender = () =>
    last_page !== 0 ? (
      <>
        <Text variant="small" color={theme.colors.quaternary['200']}>
          Scroll to right to see more data.
        </Text>
        <Table
          heads={MEDICATIONS_TABLE_HEADS}
          theadStyle={MEDICATIONS_ROWS_STYLE}
          tableStyle={{ width: '100%', minWidth: '1280px' }}
        >
          <MedicationsDataTableRows medicationsData={medicationsData} />
        </Table>
        <Text
          containerStyle={{ marginTop: '8px' }}
          variant="small"
          color={theme.colors.quaternary['200']}
        >
          **Federal Register determination that product was not discontinued or
          withdrawn for safety or efficacy reasons
        </Text>
      </>
    ) : (
      <Text containerStyle={{ textAlign: 'center', marginBottom: '24px' }}>
        No results was found.
      </Text>
    )

  const handleMedicationsTableRender = () =>
    isFetchingMedications ? (
      <FetchingLoader>
        <Loader
          isLoading={isFetchingMedications}
          color={theme.colors.secondary['500']}
        />
      </FetchingLoader>
    ) : (
      <>
        {handleTableRender()}
        <Pagination
          params={params}
          paramsDispatch={paramsDispatch}
          last_page={last_page}
        />
      </>
    )

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    paramsDispatch({ type: 'changeSearch', search: event.target.value })
  }

  const handleChangeLimit = (event: ChangeEvent<HTMLInputElement>) => {
    paramsDispatch({ type: 'changeLimit', limit: Number(event.target.value) })
  }

  useEffect(() => {
    refetch()
  }, [params.page, refetch])

  useEffect(() => {
    if (
      params.search &&
      params.search.length < 3 &&
      params.search.length >= 1
    ) {
      setSearchError('Must have at least 3 characters.')
    } else {
      setSearchError(undefined)
      paramsDispatch({ type: 'goToFirstPage' })
      refetch()
    }
  }, [params.search, refetch])

  useEffect(() => {
    if (params.limit > 1000) {
      setLimitError('Max: 1000')
    } else if (params.limit <= 0) {
      setLimitError('Min: 1')
    } else {
      setLimitError(undefined)
      paramsDispatch({ type: 'goToFirstPage' })
      refetch()
    }
  }, [params.limit, refetch])

  return (
    <InternPageLayout>
      <section data-testid="dashboard-view">
        <DashboardHead>
          <SearchFields>
            <TextField
              name="search"
              label="Search"
              placeholder="Ex: Paredrine"
              value={params.search ?? ''}
              onChange={handleChangeSearch}
              $error={searchError}
            />
            <TextField
              type="number"
              name="limit"
              label="Results per page"
              placeholder="Ex: 10"
              value={params.limit}
              onChange={handleChangeLimit}
              $error={limitError}
            />
          </SearchFields>
          <Button type="button" onClick={goToCreateMedicineView}>
            <Icon name="add" containerStyle={{ marginRight: '4px' }} />
            Create Medicine
          </Button>
        </DashboardHead>

        {handleMedicationsTableRender()}
      </section>
    </InternPageLayout>
  )
}

const DashboardHead = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;

  & button {
    max-width: 100%;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    & button {
      max-width: 258px;
    }
  }
`

const SearchFields = styled.section`
  display: flex;
  column-gap: 16px;
`

const FetchingLoader = styled.div`
  padding-top: 48px;
`

export default Dashboard
