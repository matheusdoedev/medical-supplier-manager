import { FC } from 'react'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'
import { styled } from 'styled-components'

import {
  InputHead,
  InputWrapper,
  InputLabel,
  InputError,
  InputFieldWrapper,
} from '@/styles'

interface DatepickerComponentProps extends ReactDatePickerProps {
  label?: string
  $error?: string
}

const DatepickerComponent: FC<DatepickerComponentProps> = ({
  label,
  $error,
  ...props
}) => {
  const handleLabel = () => label && <InputLabel>{label}</InputLabel>

  const handleErrorText = () => $error && <InputError>{$error}</InputError>

  return (
    <DatepickerWrapper data-testid="datepicker">
      <InputHead>
        {handleLabel()}
        {handleErrorText()}
      </InputHead>
      <InputFieldWrapper>
        <DatePicker {...props} />
      </InputFieldWrapper>
    </DatepickerWrapper>
  )
}

const DatepickerWrapper = styled(InputWrapper)`
  .react-datepicker__input-container input {
    width: 100%;
    border: none;
    outline: none;
    padding: 9px 15px;

    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.quaternary['500']};

    &::placeholder {
      color: ${({ theme }) => theme.colors.terciary['600']};
      line-height: 1.1em;
    }
  }
`

export default DatepickerComponent
