import { AutocompleteOption } from '.'

export interface CreateMedicineDto {
  drug_name: string
  units_per_package: number
  issued_on: string
  expires_on: string
  manufacturers: string[]
}

export type CreateMedicineFormValue = Omit<
  CreateMedicineDto,
  'manufacturers'
> & {
  manufacturers: AutocompleteOption[]
}
