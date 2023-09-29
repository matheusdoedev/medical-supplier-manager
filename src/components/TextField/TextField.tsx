import {
  ChangeEvent,
  FC,
  useRef,
  useEffect,
  HTMLInputTypeAttribute,
} from 'react'
import { CSSProperties, styled } from 'styled-components'

import {
  InputError,
  InputHead,
  InputLabel,
  InputWrapper,
  InputFieldWrapper,
} from '@/styles'

interface TextFieldProps {
  type?: HTMLInputTypeAttribute
  label?: string
  name: string
  placeholder?: string
  value: string | number
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  containerStyle?: CSSProperties
  max?: string
  $error?: string
}

type InputOnFocusActions = 'on' | 'off'

const TextField: FC<TextFieldProps> = ({
  name,
  type = 'text',
  label,
  onChange,
  value,
  containerStyle,
  $error,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const inputWrapperRef = useRef<HTMLDivElement>(null)

  const handleLabel = () =>
    label && <InputLabel htmlFor={name}>{label}</InputLabel>

  const handleErrorText = () => $error && <InputError>{$error}</InputError>

  useEffect(() => {
    if (!inputRef.current || !inputWrapperRef.current) return

    const handleInputOnFocus = (action: InputOnFocusActions) => () => {
      if (action === 'on') {
        inputWrapperRef.current?.classList.add('focus')
        return
      }
      inputWrapperRef.current?.classList.remove('focus')
    }

    inputRef.current.addEventListener('focusin', handleInputOnFocus('on'))
    inputRef.current.addEventListener('focusout', handleInputOnFocus('off'))
  }, [])

  return (
    <InputWrapper data-testid="text-field" style={containerStyle}>
      <InputHead>
        {handleLabel()}
        {handleErrorText()}
      </InputHead>
      <InputFieldWrapper $error={!!$error} ref={inputWrapperRef}>
        <TextFieldInput
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          ref={inputRef}
          {...props}
        />
      </InputFieldWrapper>
    </InputWrapper>
  )
}

const TextFieldInput = styled.input`
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
`

export default TextField
