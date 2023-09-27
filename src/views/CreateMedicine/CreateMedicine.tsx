import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useFormik } from 'formik'
import { styled } from 'styled-components'

import {
  AutocompleteField,
  Datepicker,
  Icon,
  Text,
  TextField,
  Title,
} from '@/components'
import { AutocompleteOption, CreateMedicineFormValue } from '@/interfaces'
import { InternPageLayout } from '@/layouts'
import { interviewService } from '@/services'

import { theme } from '@/styles'
import { useMemo } from 'react'

const FORM_DEFAULT_VALUES: CreateMedicineFormValue = {
  drug_name: '',
  units_per_package: 0,
  issued_on: '2023-09-26T19:46:13.148Z',
  expires_on: '2023-09-26T19:46:13.148Z',
  manufacturers: [],
}

type DateFields = 'expires_on' | 'issued_on'

const CreateMedicine = () => {
  const navigate = useNavigate()

  const { values, handleChange, setValues, handleSubmit } = useFormik({
    initialValues: FORM_DEFAULT_VALUES,
    onSubmit: (createMedicineDto: CreateMedicineFormValue) =>
      console.log(createMedicineDto),
  })

  const { drug_name, expires_on, issued_on, manufacturers, units_per_package } =
    values

  const { data: getManufacturersData } = useQuery('getManufacturers', () =>
    interviewService.getManufacturers(),
  )

  const serializedManufacturesOptions: AutocompleteOption[] = useMemo(() => {
    if (!getManufacturersData) return []

    return getManufacturersData.data.data.map(({ name }) => ({
      title: name,
      value: name,
    }))
  }, [getManufacturersData])

  const goBackToDashboard = () => {
    navigate('/dashboard')
  }

  const handleChangeDate = (dateField: DateFields) => (date: Date) => {
    setValues({ ...values, [dateField]: date.toISOString() })
  }

  const handleChangeManufacturers = (value: AutocompleteOption[]) => {
    setValues({ ...values, manufacturers: value })
  }

  return (
    <InternPageLayout>
      <section>
        <GoBackButton onClick={goBackToDashboard}>
          <Icon
            name="arrowLeft"
            fill={theme.colors.quaternary['500']}
            width={20}
            height={20}
          />{' '}
          <Text>Voltar</Text>
        </GoBackButton>

        <Title containerStyle={{ marginBottom: '24px' }}>
          Create a new medicine
        </Title>

        <CreateMedicineForm onSubmit={handleSubmit}>
          <TextField
            name="drug_name"
            label="Drug name*"
            placeholder="Ex: Paredrine"
            value={drug_name}
            onChange={handleChange}
          />
          <TextField
            type="number"
            name="units_per_package"
            label="Units per package*"
            placeholder="Ex: 7"
            value={units_per_package}
            onChange={handleChange}
          />
          <DateRow>
            <Datepicker
              label="Issued on*"
              selected={new Date(issued_on)}
              onChange={handleChangeDate('issued_on')}
              showTimeSelect
            />
            <Datepicker
              label="Expires on*"
              selected={new Date(expires_on)}
              onChange={handleChangeDate('expires_on')}
              excludeDateIntervals={[
                {
                  start: new Date('0000-01-01T00:00:00.148Z'),
                  end: new Date(issued_on),
                },
              ]}
              showTimeSelect
            />
          </DateRow>
          <AutocompleteField
            options={serializedManufacturesOptions}
            value={manufacturers}
            onChange={handleChangeManufacturers}
          />
        </CreateMedicineForm>
      </section>
    </InternPageLayout>
  )
}

const GoBackButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 2px;
  margin-bottom: 32px;
`

const CreateMedicineForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`

const DateRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
  max-width: 350px;
  align-items: center;
`

export default CreateMedicine
