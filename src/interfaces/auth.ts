import { ChangeEvent, FormEvent } from 'react'
import { FormikErrors } from 'formik'

import { LoginDto } from '.'

export interface AuthContextProps {
  handleLogin: (loginDto: LoginDto, postLogin: () => void) => Promise<void>
  isLogging: boolean
  handleSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void
  values: LoginDto
  handleChange: (e: string | ChangeEvent<unknown>) => void
  errors: FormikErrors<LoginDto>
}

export interface LoginResponse {
  token: string
}
