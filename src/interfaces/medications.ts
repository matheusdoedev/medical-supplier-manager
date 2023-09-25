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

export interface GetMedicationsResponse {
  data: Medication[]
  total: number
  last_page: number
}
