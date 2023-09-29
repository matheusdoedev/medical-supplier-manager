import { FC, ReactNode, useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useFormik } from 'formik'

import {
  AUTH_FORM_DEFAULT_VALUES,
  YUP_SCHEMA_VALIDATE_DEFAULT_OPTIONS,
} from '@/constants'
import { AuthContext } from '@/contexts'
import { LoginDto } from '@/interfaces'
import { interviewService } from '@/services'
import { handleFormsSubmitError, postLoginSchema, setAuthToken } from '@/utils'

interface AuthProviderProps {
  children: ReactNode
}

const LOGIN_ERROR_MESSAGE = 'Email or password is invalid.'

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isLogging, setIsLogging] = useState(false)

  const navigate = useNavigate()

  const { mutateAsync } = useMutation((loginDto: LoginDto) => {
    return interviewService.postLogin(loginDto)
  })

  const handleLogin = useCallback(
    async (loginDto: LoginDto) => {
      setIsLogging(true)

      try {
        await postLoginSchema.validate(
          loginDto,
          YUP_SCHEMA_VALIDATE_DEFAULT_OPTIONS,
        )

        const { data } = await mutateAsync(loginDto)

        const { token } = data

        setAuthToken(token)

        navigate('/dashboard')
      } catch (error) {
        handleFormsSubmitError(error, setErrors, LOGIN_ERROR_MESSAGE)
      } finally {
        setIsLogging(false)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mutateAsync, navigate],
  )

  const { handleSubmit, values, handleChange, setErrors, errors } = useFormik({
    initialValues: AUTH_FORM_DEFAULT_VALUES,
    onSubmit: handleLogin,
  })

  const value = useMemo(() => {
    return {
      handleLogin,
      isLogging,
      handleSubmit,
      values,
      handleChange,
      errors,
    }
  }, [errors, handleChange, handleLogin, handleSubmit, isLogging, values])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
