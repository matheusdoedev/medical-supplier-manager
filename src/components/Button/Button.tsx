import { ButtonHTMLAttributes, FC, useMemo } from 'react'
import { styled } from 'styled-components'

import { Loader } from '@/components'
import { CommonComponentWithChildren } from '@/interfaces'

import { theme } from '@/styles'

interface ButtonProps
  extends CommonComponentWithChildren,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  isLoading?: boolean
}

const ButtonComponent: FC<ButtonProps> = ({
  children,
  containerStyle,
  isLoading = false,
  ...props
}) => {
  const handleButtonContent = useMemo(() => {
    return isLoading ? <Loader isLoading={isLoading} /> : children
  }, [children, isLoading])

  return (
    <Button data-testid="button" style={containerStyle} {...props}>
      {handleButtonContent}
    </Button>
  )
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

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
    padding: 11.5px 16px;
  }
`

export default ButtonComponent
