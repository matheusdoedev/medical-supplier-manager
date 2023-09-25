import { ReactNode } from 'react'
import { CSSProperties } from 'styled-components'

export interface CommonComponent {
  containerStyle?: CSSProperties
}

export interface CommonComponentWithChildren extends CommonComponent {
  children: ReactNode
}
