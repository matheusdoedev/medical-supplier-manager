import { styled } from 'styled-components'

import { theme } from '@/styles'

const Container = styled.section`
  width: 100%;
  max-width: 328px;
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints.sm}) {
    max-width: 544px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    max-width: 688px;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    max-width: 920px;
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    max-width: 1180px;
  }

  @media (min-width: ${theme.breakpoints.xxl}) {
    max-width: 1380px;
  }
`

export default Container
