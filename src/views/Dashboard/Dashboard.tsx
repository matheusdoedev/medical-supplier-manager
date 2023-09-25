import { useMemo } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

import { Button, Icon, Table } from '@/components'
import { GetMedicationsResponse, IconProps } from '@/interfaces'
import { InternPageLayout } from '@/layouts'
import { interviewService } from '@/services'

import { theme } from '@/styles'

const PAGINATION_BUTTON_COMMON_PROPERTIES: Omit<IconProps, 'name'> = {
  fill: theme.colors.secondary['500'],
  width: 24,
  height: 24,
}

const PAGINATION_BUTTONS_LIST: IconProps[] = [
  { name: 'doubleArrowLeft', ...PAGINATION_BUTTON_COMMON_PROPERTIES },
  { name: 'arrowLeft', ...PAGINATION_BUTTON_COMMON_PROPERTIES },
  { name: 'arrowRight', ...PAGINATION_BUTTON_COMMON_PROPERTIES },
  { name: 'doubleArrowRight', ...PAGINATION_BUTTON_COMMON_PROPERTIES },
]

const Dashboard = () => {
  const navigate = useNavigate()

  const { data: getMedicationsData } = useQuery('getMedications', () =>
    interviewService.getMedications(),
  )

  const serializedMedicationsData: GetMedicationsResponse = useMemo(() => {
    if (!getMedicationsData) return { data: [], last_page: 1, total: 0 }

    return getMedicationsData.data
  }, [getMedicationsData])

  const goToCreateMedicineView = () => {
    navigate('/create-medicine')
  }

  const handlePaginationButtons = () =>
    PAGINATION_BUTTONS_LIST.map(({ name, fill, width, height }) => (
      <PaginationButton key={name}>
        <Icon name={name} fill={fill} width={width} height={height} />
      </PaginationButton>
    ))

  return (
    <InternPageLayout>
      <section data-testid="dashboard-view">
        <DashboardHead>
          <Button
            containerStyle={{ maxWidth: '258px' }}
            onClick={goToCreateMedicineView}
          >
            <Icon name="add" containerStyle={{ marginRight: '4px' }} />
            Create Medicine
          </Button>
        </DashboardHead>

        <Table
          heads={[
            'App. Number',
            'Active Ingredient',
            'Drug Name',
            'Form',
            'Product Number',
            'Reference Drug',
            'Reference Standard',
            'Strength',
          ]}
          data={serializedMedicationsData.data}
          theadStyle={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 2fr 3.5fr 1.5fr 1.5fr 3fr 4fr 1fr',
          }}
        />

        <PaginationButtons>{handlePaginationButtons()}</PaginationButtons>
      </section>
    </InternPageLayout>
  )
}

const DashboardHead = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 32px;
`

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
`

export default Dashboard
