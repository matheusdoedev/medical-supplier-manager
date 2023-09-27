import { styled } from 'styled-components'

import { theme } from '@/styles'

const Container = styled.section`
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: 0 16px;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 0 24px;
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    max-width: 1180px;
  }

  @media (min-width: ${theme.breakpoints.xxl}) {
    max-width: 1380px;
  }
`

export default Container
