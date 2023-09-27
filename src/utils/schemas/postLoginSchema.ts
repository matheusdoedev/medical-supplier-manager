import * as yup from 'yup'

export const postLoginSchema = yup.object({
  username: yup.string().required('The username is required.'),
  password: yup
    .string()
    .min(8, 'The password must have at least 8 characters.')
    .required('The password is required.'),
})
