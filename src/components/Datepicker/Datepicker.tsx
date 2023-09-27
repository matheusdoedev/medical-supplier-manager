import { FC } from 'react'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'
import { css, styled } from 'styled-components'

import { theme } from '@/styles'

interface DatepickerComponentProps extends ReactDatePickerProps {
  label?: string
  $error?: string
}

const DatepickerComponent: FC<DatepickerComponentProps> = ({
  label,
  $error,
  ...props
}) => {
  const handleLabel = () => label && <DatepickerLabel>{label}</DatepickerLabel>

  const handleErrorText = () =>
    $error && <DatepickerError>{$error}</DatepickerError>

  return (
    <DatepickerWrapper data-testid="datepicker">
      <DatepickerHead>
        <DatepickerLabel>
          {handleLabel()}
          {handleErrorText()}
        </DatepickerLabel>
      </DatepickerHead>
      <DatepickerField>
        <DatePicker {...props} />
      </DatepickerField>
    </DatepickerWrapper>
  )
}

const DatepickerHead = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 16px;
  align-items: center;
`

const DatepickerError = styled.span`
  justify-self: end;
  color: ${({ theme }) => theme.colors.warning};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 10px;
  line-height: 1.1em;
`

const DatepickerLabel = styled.label`
  color: ${({ theme }) => theme.colors.quaternary['400']};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 14px;
  line-height: 1.1em;

  @media (min-width: ${theme.breakpoints.sm}) {
    font-size: 16px;
  }
`

const DatepickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;
  max-width: 350px;

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

const DatepickerField = styled.div<{ $error?: boolean }>`
  width: 100%;
  padding: 1px 1px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.terciary['600']};
  background: ${({ theme }) => theme.colors.terciary['400']};

  &.focus {
    border-color: ${({ theme }) => theme.colors.primary['400']};
  }

  ${({ $error }) =>
    $error &&
    css`
      border-color: ${({ theme }) => theme.colors.warning};
    `}
`

export default DatepickerComponent
