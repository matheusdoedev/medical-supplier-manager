import { FC, ReactNode, createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useFormik } from 'formik'
import { ValidationError } from 'yup'

import { AUTH_FORM_DEFAULT_VALUES } from '@/constants'
import { AuthContextProps, LoginDto } from '@/interfaces'
import { interviewService } from '@/services'
import { postLoginSchema, setAuthToken } from '@/utils'

interface AuthProviderProps {
  children: ReactNode
}

const LOGIN_ERROR_MESSAGE = 'Email or password is invalid.'

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isLogging, setIsLogging] = useState(false)

  const navigate = useNavigate()

  const { mutateAsync } = useMutation((loginDto: LoginDto) => {
    return interviewService.postLogin(loginDto)
  })

  const handleLogin = async (loginDto: LoginDto) => {
    setIsLogging(true)

    try {
      await postLoginSchema.validate(loginDto, {
        abortEarly: true,
      })

      const { data } = await mutateAsync(loginDto)

      const { token } = data

      setAuthToken(token)

      navigate('/dashboard')
    } catch (error) {
      if (error instanceof ValidationError) {
        handleFormError({ [error.path as string]: error.message })
        return
      }
      handleFormError({
        username: LOGIN_ERROR_MESSAGE,
        password: LOGIN_ERROR_MESSAGE,
      })
    } finally {
      setIsLogging(false)
    }
  }

  const { handleSubmit, values, handleChange, setErrors, errors } = useFormik({
    initialValues: AUTH_FORM_DEFAULT_VALUES,
    onSubmit: handleLogin,
  })

  function handleFormError(error: object) {
    setErrors(error)
  }

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        isLogging,
        handleSubmit,
        values,
        handleChange,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const authContext = useContext(AuthContext)

  if (!authContext) {
    throw new Error('useAuth is not defined.')
  }

  return authContext
}

export { AuthProvider, useAuth }
