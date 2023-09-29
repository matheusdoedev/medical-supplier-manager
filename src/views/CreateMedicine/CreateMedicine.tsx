import { styled } from 'styled-components'

import {
  AutocompleteField,
  Button,
  Datepicker,
  Icon,
  Text,
  TextField,
  Title,
} from '@/components'
import { useCreateMedicine } from '@/hooks'
import { InternPageLayout } from '@/layouts'

import { theme } from '@/styles'

const CreateMedicine = () => {
  const {
    goBackToDashboard,
    handleChange,
    handleChangeDate,
    handleChangeManufacturers,
    handleSubmit,
    isCreating,
    values,
    errors,
    serializedManufacturesOptions,
  } = useCreateMedicine()

  const { drug_name, expires_on, issued_on, manufacturers, units_per_package } =
    values

  return (
    <InternPageLayout>
      <CreateMedicineWrapper data-testid="create-medicine-view">
        <GoBackButton onClick={goBackToDashboard}>
          <Icon
            name="arrowLeft"
            fill={theme.colors.quaternary['500']}
            width={20}
            height={20}
          />{' '}
          <Text>Voltar</Text>
        </GoBackButton>

        <Title>Create a new medicine</Title>

        <CreateMedicineForm onSubmit={handleSubmit}>
          <TextField
            name="drug_name"
            label="Drug name*"
            placeholder="Ex: Paredrine"
            value={drug_name}
            $error={errors.drug_name}
            onChange={handleChange}
          />
          <TextField
            type="number"
            name="units_per_package"
            label="Units per package*"
            placeholder="Ex: 7"
            value={units_per_package}
            onChange={handleChange}
            $error={errors.units_per_package}
          />
          <DateRow>
            <Datepicker
              label="Issued on*"
              selected={new Date(issued_on)}
              onChange={handleChangeDate('issued_on')}
              $error={errors.issued_on}
              showTimeSelect
            />
            <Datepicker
              label="Expires on*"
              selected={new Date(expires_on)}
              onChange={handleChangeDate('expires_on')}
              $error={errors.expires_on}
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
            label="Manufactures"
            placeholder="Select manufactures"
            options={serializedManufacturesOptions}
            value={manufacturers}
            $error={errors.manufacturers as string}
            onChange={handleChangeManufacturers}
          />
          <Button type="submit" isLoading={isCreating}>
            Save
          </Button>
        </CreateMedicineForm>
      </CreateMedicineWrapper>
    </InternPageLayout>
  )
}

const CreateMedicineWrapper = styled.section`
  & h2 {
    font-size: 18px;
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    & h2 {
      font-size: 24px;
    }
  }
`

const GoBackButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 2px;
  margin-bottom: 24px;

  @media (min-width: ${theme.breakpoints.sm}) {
    margin-bottom: 32px;
  }
`

const CreateMedicineForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-top: 16px;

  @media (min-width: ${theme.breakpoints.sm}) {
    margin-top: 24px;
  }
`

const DateRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
  max-width: 350px;
  align-items: center;
`

export default CreateMedicine
