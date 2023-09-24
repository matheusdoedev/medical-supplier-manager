import { FC } from 'react'
import styled from 'styled-components'

import { LogoDefaultSvg, LogoWhiteSvg } from '@/assets'

const LOGO_VARIANTS = {
  default: LogoDefaultSvg,
  white: LogoWhiteSvg,
}

interface LogoProps {
  variant?: 'default' | 'white'
}

const Logo: FC<LogoProps> = ({ variant = 'default' }) => {
  const logoImg = LOGO_VARIANTS[variant]

  return <LogoImg data-testid="logo" src={logoImg} alt="MSM" />
}

const LogoImg = styled.img`
  width: 107px;
  height: 34px;
`

export default Logo
