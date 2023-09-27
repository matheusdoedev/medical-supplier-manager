import * as yup from 'yup'

export const postCreateMedicationSchema = yup.object({
  drug_name: yup.string().required('Drug name is required.'),
  units_per_package: yup.number().min(1, 'Units must be bigger than 1.'),
  issued_on: yup.string().required('Issued on date is required'),
  expires_on: yup.string().required('Expires on date is required'),
  manufacturers: yup
    .array()
    .min(1, 'Must have at least one manufacturer')
    .required('Must have at least one manufacturer'),
})
