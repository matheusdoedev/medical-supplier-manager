import { CSSProperties, FC } from 'react'
import BarLoader from 'react-spinners/BarLoader'
import { styled } from 'styled-components'

import { theme } from '@/styles'

const CSS_OVERRIDE: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
}

interface LoaderProps {
  isLoading: boolean
  color?: string
}

const Loader: FC<LoaderProps> = ({
  isLoading,
  color = theme.colors.terciary['400'],
}) => {
  return (
    <LoaderWrapper>
      <BarLoader
        color={color}
        loading={isLoading}
        cssOverride={CSS_OVERRIDE}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </LoaderWrapper>
  )
}

const LoaderWrapper = styled.div`
  padding: 5.5px 0;
`

export default Loader
