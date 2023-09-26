import { styled } from 'styled-components'

const TableRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.terciary['500']};
  border-bottom: 1px solid ${({ theme }) => theme.colors.quaternary['500']};
  padding: 16px;
`

export default TableRow
