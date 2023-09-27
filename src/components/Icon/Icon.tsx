import { FC } from 'react'
import { styled } from 'styled-components'

import { ICON_LIST } from '@/constants'
import { IconProps } from '@/interfaces'

const Icon: FC<IconProps> = ({ name, fill, width, height, containerStyle }) => {
  const SelectedIcon = ICON_LIST[name]

  return (
    <IconWrapper
      data-testid="icon"
      fill={fill}
      width={width}
      height={height}
      style={containerStyle}
    >
      <SelectedIcon />
    </IconWrapper>
  )
}

const IconWrapper = styled.div<Omit<IconProps, 'name'>>`
  display: flex;
  align-items: center;

  & > svg {
    fill: ${({ fill, theme }) => fill ?? theme.colors.terciary['400']};
    width: ${({ width }) => (width ? width + 'px' : 'auto')};
    height: ${({ height }) => (height ? height + 'px' : 'auto')};
  }
`

export default Icon
