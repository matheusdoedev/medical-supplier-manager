import { CreateMedicineFormValue } from '@/interfaces'

export const CREATE_MEDICINE_ERROR_MESSAGE =
  'It was not possible to create the medication. Try again or contact support.'

export const FORM_DEFAULT_VALUES: CreateMedicineFormValue = {
  drug_name: '',
  units_per_package: 0,
  issued_on: '2023-09-26T19:46:13.148Z',
  expires_on: '2023-09-27T19:46:13.148Z',
  manufacturers: [],
}
