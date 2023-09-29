import { ObjectSchema } from 'yup'

import { YUP_SCHEMA_VALIDATE_DEFAULT_OPTIONS } from '@/constants'

export const validateYupSchema = async (
  value: unknown,
  schema: ObjectSchema<object>,
) => {
  await schema.validate(value, YUP_SCHEMA_VALIDATE_DEFAULT_OPTIONS)
}
