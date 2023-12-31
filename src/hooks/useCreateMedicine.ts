import { useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'

import { CREATE_MEDICINE_ERROR_MESSAGE, FORM_DEFAULT_VALUES } from '@/constants'
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
      handleFormsSubmitError(error, setErrors, CREATE_MEDICINE_ERROR_MESSAGE)
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
