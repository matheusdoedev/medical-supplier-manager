import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from 'react-query'
import { useFormik } from 'formik'
import { styled } from 'styled-components'
import { ValidationError } from 'yup'
import { toast } from 'react-toastify'

import {
  AutocompleteField,
  Button,
  Datepicker,
  Icon,
  Text,
  TextField,
  Title,
} from '@/components'
import { YUP_SCHEMA_VALIDATE_DEFAULT_OPTIONS } from '@/constants'
import {
  AutocompleteOption,
  CreateMedicineDto,
  CreateMedicineFormValue,
} from '@/interfaces'
import { InternPageLayout } from '@/layouts'
import { interviewService } from '@/services'
import { postCreateMedicationSchema } from '@/utils'

import { theme } from '@/styles'

const FORM_DEFAULT_VALUES: CreateMedicineFormValue = {
  drug_name: '',
  units_per_package: 0,
  issued_on: '2023-09-26T19:46:13.148Z',
  expires_on: '2023-09-27T19:46:13.148Z',
  manufacturers: [],
}

type DateFields = 'expires_on' | 'issued_on'

const CreateMedicine = () => {
  const [isCreating, setIsCreating] = useState(false)

  const navigate = useNavigate()

  const { mutateAsync } = useMutation((createMedicineDto: CreateMedicineDto) =>
    interviewService.postMedications(createMedicineDto),
  )

  const handleCreateMedicationSubmit = async (
    createMedicineFormValue: CreateMedicineFormValue,
  ) => {
    setIsCreating(true)

    try {
      await postCreateMedicationSchema.validate(
        createMedicineFormValue,
        YUP_SCHEMA_VALIDATE_DEFAULT_OPTIONS,
      )

      const createMedicationDto = {
        ...createMedicineFormValue,
        manufacturers: createMedicineFormValue.manufacturers.map(
          (manufacturers) => manufacturers.value,
        ),
      }

      await mutateAsync(createMedicationDto)
      toast.success('Medication was successfully created.')
      navigate('/dashboard')
    } catch (error) {
      if (error instanceof ValidationError) {
        handleFormError({ [error.path as string]: error.message })
        return
      }
      toast.error(
        'It was not possible to create the medication. Try again or contact support.',
      )
    } finally {
      setIsCreating(false)
    }
  }

  const { values, handleChange, setValues, handleSubmit, setErrors, errors } =
    useFormik({
      initialValues: FORM_DEFAULT_VALUES,
      onSubmit: handleCreateMedicationSubmit,
    })

  function handleFormError(error: object) {
    setErrors(error)
  }

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
      <section data-testid="create-medicine-view">
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
