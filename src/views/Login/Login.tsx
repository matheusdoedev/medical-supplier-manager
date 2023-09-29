import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { toast } from 'react-toastify'

import { LoginBgImg } from '@/assets'
import { Button, Logo, Text, TextField } from '@/components'
import { useAuth, useQueryParams } from '@/hooks'
import { getAuthToken } from '@/utils'

import { theme } from '@/styles'

const Login = () => {
  const { values, handleChange, handleSubmit, isLogging, errors } = useAuth()

  const { username, password } = values

  const isSessionExpired = useQueryParams().get('sessionExpired')

  useEffect(() => {
    if (isSessionExpired) {
      toast.warning('Session expired. You must sign in to continue.')
    }
  }, [isSessionExpired])

  const token = getAuthToken()

  if (token) return <Navigate to="/dashboard" replace={true} />

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
        <LoginForm onSubmit={handleSubmit}>
          <TextField
            name="username"
            label="Username"
            placeholder="Enter your username"
            $error={errors.username}
            containerStyle={{ marginBottom: 16 }}
            value={username}
            onChange={handleChange}
          />
          <TextField
            type="password"
            name="password"
            label="Password"
            placeholder="Enter your password"
            $error={errors.password}
            containerStyle={{ marginBottom: 16 }}
            value={password}
            onChange={handleChange}
          />
          <Button type="submit" isLoading={isLogging}>
            Enter
          </Button>
        </LoginForm>
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

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export default Login
