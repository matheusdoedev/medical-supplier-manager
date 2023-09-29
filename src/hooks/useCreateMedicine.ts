import { useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'

import {
  AutocompleteOption,
  CreateMedicineDto,
  CreateMedicineFormValue,
} from '@/interfaces'
import { interviewService } from '@/services'
import {
  handleFormsSubmitError,
  postCreateMedicationSchema,
  validateYupSchema,
} from '@/utils'

const FORM_DEFAULT_VALUES: CreateMedicineFormValue = {
  drug_name: '',
  units_per_package: 0,
  issued_on: '2023-09-26T19:46:13.148Z',
  expires_on: '2023-09-27T19:46:13.148Z',
  manufacturers: [],
}

type DateFields = 'expires_on' | 'issued_on'

export const useCreateMedicine = () => {
  const [isCreating, setIsCreating] = useState(false)

  const navigate = useNavigate()

  const { mutateAsync } = useMutation((createMedicineDto: CreateMedicineDto) =>
    interviewService.postMedications(createMedicineDto),
  )

  const handleSerializeManufacturersToSend = (
    manufacturers: AutocompleteOption[],
  ) => manufacturers.map((manufacturers) => manufacturers.value)

  const { values, handleChange, setValues, handleSubmit, setErrors, errors } =
    useFormik({
      initialValues: FORM_DEFAULT_VALUES,
      onSubmit: handleCreateMedicationSubmit,
    })

  async function handleCreateMedicationSubmit(
    createMedicineFormValue: CreateMedicineFormValue,
  ) {
    setIsCreating(true)

    try {
      await validateYupSchema(
        createMedicineFormValue,
        postCreateMedicationSchema,
      )

      const createMedicationDto = {
        ...createMedicineFormValue,
        manufacturers: handleSerializeManufacturersToSend(
          createMedicineFormValue.manufacturers,
        ),
      }

      await mutateAsync(createMedicationDto)
      toast.success('Medication was successfully created.')
      navigate('/dashboard')
    } catch (error) {
      handleFormsSubmitError(error, setErrors)
    } finally {
      setIsCreating(false)
    }
  }

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

  return {
    values,
    handleChange,
    handleSubmit,
    errors,
    isCreating,
    serializedManufacturesOptions,
    goBackToDashboard,
    handleChangeDate,
    handleChangeManufacturers,
  }
}
