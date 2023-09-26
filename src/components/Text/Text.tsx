import { FC } from 'react'
import { styled } from 'styled-components'

import { TEXT_VARIANTS } from '@/constants'
import { TextComponentProps, TextProps } from '@/interfaces'

import { theme } from '@/styles'

const TextComponent: FC<TextComponentProps> = ({
  as = 'p',
  children,
  variant = 'default',
  color = theme.colors.quaternary['500'],
  containerStyle,
  tooltip,
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
      title={tooltip}
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
