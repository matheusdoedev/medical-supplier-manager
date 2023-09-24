import {
  ChangeEvent,
  FC,
  useRef,
  useEffect,
  HTMLInputTypeAttribute,
} from 'react'
import { CSSProperties, styled } from 'styled-components'

import { theme } from '@/styles'

interface TextFieldProps {
  type?: HTMLInputTypeAttribute
  label?: string
  name: string
  placeholder?: string
  onChange?: (value: string | number) => void
  containerStyle?: CSSProperties
}

type InputOnFocusActions = 'on' | 'off'

const TextField: FC<TextFieldProps> = ({
  name,
  type = 'text',
  label,
  onChange,
  containerStyle,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const inputWrapperRef = useRef<HTMLDivElement>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return
    onChange(event.target.value)
  }

  const handleLabel = () =>
    label && <TextFieldLabel htmlFor={name}>{label}</TextFieldLabel>

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
    <TextFieldWrapper data-testid="text-field" style={containerStyle}>
      {handleLabel()}
      <TextFieldInputWrapper ref={inputWrapperRef}>
        <TextFieldInput
          type={type}
          id={name}
          name={name}
          onChange={handleChange}
          ref={inputRef}
          {...props}
        />
      </TextFieldInputWrapper>
    </TextFieldWrapper>
  )
}

const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;
  max-width: 350px;
`

const TextFieldLabel = styled.label`
  color: ${({ theme }) => theme.colors.quaternary['400']};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 14px;
  line-height: 1.1em;

  @media (min-width: ${theme.breakpoints.sm}) {
    font-size: 16px;
  }
`

const TextFieldInputWrapper = styled.div`
  width: 100%;
  padding: 1px 1px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.terciary['600']};
  background: ${({ theme }) => theme.colors.terciary['400']};

  &.focus {
    border-color: ${({ theme }) => theme.colors.primary['400']};
  }
`

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
