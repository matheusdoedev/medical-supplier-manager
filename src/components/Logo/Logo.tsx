import { FC } from 'react'
import { styled } from 'styled-components'

import { LogoDefaultSvg, LogoWhiteSvg } from '@/assets'

const LOGO_VARIANTS = {
  default: LogoDefaultSvg,
  white: LogoWhiteSvg,
}

interface LogoProps {
  variant?: 'default' | 'white'
  width?: number
  height?: number
}

const Logo: FC<LogoProps> = ({ variant = 'default', width, height }) => {
  const logoImg = LOGO_VARIANTS[variant]

  return (
    <LogoImg
      data-testid="logo"
      src={logoImg}
      alt="MSM"
      width={width}
      height={height}
    />
  )
}

const LogoImg = styled.img<Omit<LogoProps, 'variant'>>`
  width: ${({ width }) => (width ? width + 'px' : '107px')};
  height: ${({ height }) => (height ? height + 'px' : '34px')};
`

export default Logo
