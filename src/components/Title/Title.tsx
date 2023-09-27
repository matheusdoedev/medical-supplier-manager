import { FC } from 'react'
import { styled } from 'styled-components'

import { TITLE_VARIANTS } from '@/constants'
import { TitleComponentProps, TitleProps } from '@/interfaces'

import { theme } from '@/styles'

const TitleComponent: FC<TitleComponentProps> = ({
  as,
  children,
  variant = 'default',
  color = theme.colors.quaternary['500'],
  containerStyle,
  className,
}) => {
  const { fontSize } = TITLE_VARIANTS[variant]

  return (
    <Title
      as={as}
      data-testid="title"
      fontSize={fontSize}
      style={containerStyle}
      color={color}
      className={className}
    >
      {children}
    </Title>
  )
}

const Title = styled.h2<TitleProps>`
  font-size: ${({ fontSize }) => fontSize + 'px'};
  line-height: 1.1em;
  font-family: ${({ theme }) => theme.fonts.primary};
  text-transform: uppercase;
  color: ${({ color }) => color};
`

export default TitleComponent
