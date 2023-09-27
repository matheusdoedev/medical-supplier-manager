import { CSSProperties } from 'styled-components'

import { GetMedicationsParams } from '@/interfaces'

export const GET_MEDICATIONS_PARAMS_DEFAULT_VALUE: GetMedicationsParams = {
  page: 1,
  limit: 10,
}

export const MEDICATIONS_ROWS_STYLE: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1.5fr 1.5fr 2fr 1.5fr 1.5fr 4fr 4.5fr 1.5fr',
  columnGap: 16,
}

export const MEDICATIONS_TABLE_HEADS = [
  'App. Num.',
  'Product Num.',
  'Form',
  'Strength',
  'Ref. Drug',
  'Drug Name',
  'Active Ingredient',
  'Ref. Standard',
]
