import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

import { Container, Icon, Logo, Text } from '@/components'
import { cleanAuthToken } from '@/utils'

import { theme } from '@/styles'

const Header = () => {
  const navigate = useNavigate()

  const goToDashboard = () => {
    navigate('/dashboard')
  }

  const handleLogout = () => {
    cleanAuthToken()
    navigate('/')
  }

  return (
    <HeaderWrapper data-testid="header">
      <HeaderContainer>
        <button onClick={goToDashboard}>
          <Logo variant="white" width={80.25} height={25.5} />
        </button>

        <LogoutButton onClick={handleLogout}>
          <Text color={theme.colors.terciary['500']}>Logout</Text>
          <Icon name="logout" fill={theme.colors.terciary['500']} />
        </LogoutButton>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`

const HeaderWrapper = styled.header`
  padding: 16px;
  background: ${({ theme }) => theme.colors.secondary['500']};
`

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
`

export default Header
