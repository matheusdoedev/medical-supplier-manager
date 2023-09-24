import { styled } from 'styled-components'

import { LoginBgImg } from '@/assets'
import { Button, Logo, Text, TextField } from '@/components'

import { theme } from '@/styles'

const Login = () => {
  return (
    <LoginWrapper data-testid="login-view">
      <LoginContainer>
        <Logo />
        <Text
          className="logo-tagline"
          variant="small"
          color={theme.colors.secondary['600']}
        >
          Medical Supplier Manager
        </Text>
        <Text className="login-description" variant="big">
          Sign in with your credentials
        </Text>
        <TextField
          name="username"
          label="Username"
          placeholder="Enter your username"
          containerStyle={{ marginBottom: 16 }}
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
          containerStyle={{ marginBottom: 16 }}
        />
        <Button>Enter</Button>
      </LoginContainer>
    </LoginWrapper>
  )
}

const LoginWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.terciary['500']};

  @media (min-width: ${theme.breakpoints.sm}) {
    background: url(${LoginBgImg});
    background-size: cover;
  }
`

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme.colors.terciary['500']};
  padding: 64px 24px;
  width: 100%;
  max-width: 532px;
  border-radius: 12px;

  .logo-tagline {
    margin-top: 8px;
    margin-bottom: 24px;
  }

  .login-description {
    font-size: 16px;
    margin-bottom: 16px;
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    .logo-tagline {
      margin-top: 12px;
      margin-bottom: 32px;
    }

    .login-description {
      margin-bottom: 24px;
      font-size: 18px;
    }
  }
`

export default Login
