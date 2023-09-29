import { FormikErrors } from 'formik'
import { toast } from 'react-toastify'
import { ValidationError } from 'yup'

export const handleFormsSubmitError = (
  error: unknown,
  setErrors: (errors: FormikErrors<unknown>) => void,
) => {
  if (error instanceof ValidationError) {
    setErrors({ [error.path as string]: error.message })
    return
  }
  toast.error(
    'It was not possible to create the medication. Try again or contact support.',
  )
}
