import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdAdd,
  MdLogout,
} from 'react-icons/md'
import { AnyObject, ValidateOptions } from 'yup'

export const TEXT_VARIANTS = {
  small: { fontSize: 12 },
  default: { fontSize: 14 },
  medium: { fontSize: 16 },
  big: { fontSize: 18 },
}

export const TITLE_VARIANTS = {
  extraSmall: { fontSize: 16 },
  small: { fontSize: 18 },
  default: { fontSize: 24 },
  medium: { fontSize: 32 },
  big: { fontSize: 46 },
}

export const ICON_LIST = {
  add: MdAdd,
  arrowLeft: MdKeyboardArrowLeft,
  arrowRight: MdKeyboardArrowRight,
  doubleArrowLeft: MdKeyboardDoubleArrowLeft,
  doubleArrowRight: MdKeyboardDoubleArrowRight,
  logout: MdLogout,
}

export const YUP_SCHEMA_VALIDATE_DEFAULT_OPTIONS:
  | ValidateOptions<AnyObject>
  | undefined = {
  abortEarly: true,
}
