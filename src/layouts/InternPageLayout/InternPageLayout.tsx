import { FC, ReactNode } from 'react'
import { styled } from 'styled-components'

import { Container, Header } from '@/components'

import { theme } from '@/styles'

interface InternPageLayoutProps {
  children: ReactNode
}

const InternPageLayout: FC<InternPageLayoutProps> = ({ children }) => {
  return (
    <section data-testid="intern-page-layout">
      <Header />
      <Content>
        <Container>{children}</Container>
      </Content>
    </section>
  )
}

const Content = styled.section`
  background: ${({ theme }) => theme.colors.terciary['400']};
  padding-top: 32px;
  padding-bottom: 64px;

  @media (min-width: ${theme.breakpoints.sm}) {
    padding-top: 48px;
    padding-bottom: 128px;
  }
`

export default InternPageLayout
