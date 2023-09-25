import { FC, ReactNode } from 'react'
import { styled } from 'styled-components'

import { Container, Header } from '@/components'

interface InternPageLayoutProps {
  children: ReactNode
}

const InternPageLayout: FC<InternPageLayoutProps> = ({ children }) => {
  return (
    <section>
      <Header />
      <Content>
        <Container>{children}</Container>
      </Content>
    </section>
  )
}

const Content = styled.section`
  background: ${({ theme }) => theme.colors.terciary['400']};
  padding-top: 64px;
`

export default InternPageLayout
