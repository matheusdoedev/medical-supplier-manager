import { styled } from 'styled-components'

import { Container, Logo } from '@/components'

const Header = () => {
  return (
    <HeaderWrapper data-testid="header">
      <Container>
        <Logo variant="white" width={80.25} height={25.5} />
      </Container>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  padding: 16px;
  background: ${({ theme }) => theme.colors.secondary['500']};
`

export default Header
