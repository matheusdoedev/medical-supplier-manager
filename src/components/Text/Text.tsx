import { FC, ReactNode } from 'react'
import { CSSProperties, styled, WebTarget } from 'styled-components'

import { theme } from '@/styles'

const TEXT_VARIANTS = {
  small: { fontSize: 12 },
  default: { fontSize: 14 },
  medium: { fontSize: 16 },
  big: { fontSize: 18 },
}

interface TextComponentProps {
  as?: WebTarget
  variant?: 'small' | 'default' | 'medium' | 'big'
  children: ReactNode
  color?: string
  containerStyle?: CSSProperties
  className?: string
}

interface TextProps {
  fontSize: number
  color: string
}

const TextComponent: FC<TextComponentProps> = ({
  as,
  children,
  variant = 'default',
  color = theme.colors.quaternary['500'],
  containerStyle,
  className,
}) => {
  const { fontSize } = TEXT_VARIANTS[variant]

  return (
    <Text
      as={as}
      data-testid="text"
      fontSize={fontSize}
      color={color}
      style={containerStyle}
      className={className}
    >
      {children}
    </Text>
  )
}

const Text = styled.p<TextProps>`
  font-size: ${({ fontSize }) => fontSize + 'px'};
  line-height: 1.4em;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ color }) => color};
`

export default TextComponent
