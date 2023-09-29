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
import { MEDICATIONS_ROWS_STYLE, MEDICATIONS_TABLE_HEADS } from '@/constants'
import { useGetMedications } from '@/hooks'
import { InternPageLayout } from '@/layouts'

import { theme } from '@/styles'

const Dashboard = () => {
  const {
    last_page,
    medicationsData,
    isFetchingMedications,
    params,
    paramsDispatch,
    handleChangeLimit,
    handleChangeSearch,
    searchError,
    limitError,
    goToCreateMedicineView,
  } = useGetMedications()

  const handleTableRender = () =>
    medicationsData.length !== 0 ? (
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
