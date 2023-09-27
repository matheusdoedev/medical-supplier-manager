import { CSSProperties } from 'styled-components'

import { GetMedicationsParams } from '@/interfaces'

export const GET_MEDICATIONS_PARAMS_DEFAULT_VALUE: GetMedicationsParams = {
  page: 1,
  limit: 10,
}

export const MEDICATIONS_ROWS_STYLE: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1.5fr 4fr 2fr 1.5fr 1.5fr 1.5fr 4fr 2fr',
  columnGap: 16,
}

export const MEDICATIONS_TABLE_HEADS = [
  'App. Num.',
  'Drug Name',
  'Product Num.',
  'Form',
  'Strength',
  'Ref. Drug',
  'Active Ingredient',
  'Ref. Standard',
]
