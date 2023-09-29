import { css, styled } from 'styled-components'

interface InputWrapperProps {
  $error?: boolean
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;
  max-width: 350px;
`

export const InputHead = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 16px;
  align-items: center;
`

export const InputError = styled.span`
  justify-self: end;
  color: ${({ theme }) => theme.colors.warning};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 10px;
  line-height: 1.1em;
`

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.colors.quaternary['400']};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 14px;
  line-height: 1.1em;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 16px;
  }
`

export const InputFieldWrapper = styled.div<InputWrapperProps>`
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
