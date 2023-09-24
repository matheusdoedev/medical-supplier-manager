import { ButtonHTMLAttributes, FC } from 'react'
import { styled } from 'styled-components'

import { CommonComponentWithChildren } from '@/interfaces'
import { theme } from '@/styles'

interface ButtonProps
  extends CommonComponentWithChildren,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {}

const ButtonComponent: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button data-testid="button" {...props}>
      {children}
    </Button>
  )
}

const Button = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors.terciary['400']};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 14px;
  font-weight: 700;
  line-height: 1.1em;
  text-transform: uppercase;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.secondary['600']};
  padding: 13px 16px;
  max-width: 350px;
  width: 100%;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    background: ${({ theme }) => theme.colors.secondary['500']};
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    font-size: 16px;
  }
`

export default ButtonComponent
