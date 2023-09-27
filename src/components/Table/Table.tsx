import { FC, ReactNode } from 'react'
import { CSSProperties, styled } from 'styled-components'

import { Title } from '@/components'

import { theme } from '@/styles'

interface TableProps {
  heads: string[]
  tableStyle?: CSSProperties
  theadStyle?: CSSProperties
  children: ReactNode
}

const TableComponent: FC<TableProps> = ({
  heads,
  theadStyle,
  tableStyle,
  children,
}) => {
  const tableHeads = () =>
    heads.map((head) => (
      <Title as="th" key={head} color={theme.colors.terciary['400']}>
        {head}
      </Title>
    ))

  return (
    <TableWrapper>
      <table data-testid="table" style={tableStyle}>
        <thead>
          <TableHeadRow style={theadStyle}>{tableHeads()}</TableHeadRow>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </TableWrapper>
  )
}

const TableWrapper = styled.div`
  width: 100%;
  overflow: scroll;
`

const TableHeadRow = styled.tr`
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.secondary['400']};
  border-radius: 4px;

  & th {
    font-size: 14px;
    text-align: left;
  }
`

export default TableComponent
