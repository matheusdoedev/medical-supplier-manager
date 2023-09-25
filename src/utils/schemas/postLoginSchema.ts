import * as yup from 'yup'

export const postLoginSchema = yup.object({
  username: yup.string().required('The username is required.'),
  password: yup.string().required('The password is required.'),
})
