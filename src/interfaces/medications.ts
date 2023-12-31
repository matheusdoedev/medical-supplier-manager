export interface GetMedicationsParams {
  page: number
  limit: number
  search?: string
}

export interface Medication {
  active_ingredient: string
  application_number: string
  drug_name: string
  form: string
  product_number: string
  reference_drug: string
  reference_standard: string
  strength: string
}

export type GetMedicationsParamsReducerActions =
  | 'goToNextPage'
  | 'goToLastPage'
  | 'goToPreviousPage'
  | 'goToFirstPage'
  | 'changeSearch'
  | 'changeLimit'

export interface GetMedicationsParamsReducerActionProps {
  type: GetMedicationsParamsReducerActions
  lastPage?: number
  search?: string
  limit?: number
}
