import { ReactNode } from 'react'
import { CSSProperties, WebTarget } from 'styled-components'

import { ICON_LIST, TEXT_VARIANTS, TITLE_VARIANTS } from '@/constants'

export interface CommonComponent {
  containerStyle?: CSSProperties
}

export interface CommonComponentWithChildren extends CommonComponent {
  children: ReactNode
}

export interface TextComponentProps {
  as?: WebTarget
  variant?: keyof typeof TEXT_VARIANTS
  children: ReactNode
  color?: string
  containerStyle?: CSSProperties
  tooltip?: string
  className?: string
}

export type TitleComponentProps = Omit<TextComponentProps, 'variant'> & {
  variant?: keyof typeof TITLE_VARIANTS
}

export interface TextProps {
  fontSize: number
  color: string
}

export interface TitleProps extends TextProps {}

export interface IconProps extends CommonComponent {
  name: keyof typeof ICON_LIST
  fill?: string
  width?: number
  height?: number
}

export interface GetWithPagination<T> {
  data: T[]
  total: number
  last_page: number
}

export interface AutocompleteOption {
  title: string
  value: string
}

export interface AutocompleteFieldProps {
  options: AutocompleteOption[]
  value: AutocompleteOption[]
  onChange: (value: AutocompleteOption[]) => void
  label: string
  placeholder: string
  $error?: string
}
