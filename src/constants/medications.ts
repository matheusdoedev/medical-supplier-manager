import { GetMedicationsParams } from '@/interfaces'
import { CSSProperties } from 'styled-components'

export const GET_MEDICATIONS_PARAMS_DEFAULT_VALUE: GetMedicationsParams = {
  page: 1,
  limit: 10,
}

export const MEDICATIONS_ROWS_STYLE: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1.5fr 1.5fr 2fr 1.5fr 1.5fr 4fr 4.5fr 1.5fr',
  columnGap: 16,
}
