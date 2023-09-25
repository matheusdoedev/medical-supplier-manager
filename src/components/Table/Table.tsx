import { FC } from 'react'
import { CSSProperties, styled } from 'styled-components'

import { Text, Title } from '@/components'

import { theme } from '@/styles'

interface TableProps {
  heads: string[]
  data?: unknown[]
  theadStyle?: CSSProperties
}

const TableComponent: FC<TableProps> = ({ heads, data, theadStyle }) => {
  const tableHeads = () =>
    heads.map((head) => (
      <Title
        as="th"
        key={head}
        variant="extraSmall"
        containerStyle={{ textAlign: 'left' }}
        color={theme.colors.terciary['400']}
      >
        {head}
      </Title>
    ))

  const tableRows = () =>
    data?.map((rowData, index) => {
      const dataItems = Object.values(rowData as object)
      const tds = () =>
        dataItems.map((dataItem) => (
          <Text key={dataItem} as="td">
            {dataItem}
          </Text>
        ))

      return (
        <TableRow key={index} style={theadStyle}>
          {tds()}
        </TableRow>
      )
    })

  return (
    <TableWrapper>
      <Table data-testid="table">
        <TableHead style={theadStyle}>{tableHeads()}</TableHead>
        <TableBody>{tableRows()}</TableBody>
      </Table>
    </TableWrapper>
  )
}

const TableWrapper = styled.div`
  width: 100%;
  overflow: scroll;
`

const Table = styled.table`
  width: 150%;
`

const TableHead = styled.thead`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.secondary['400']};
  border-radius: 4px;
`

const TableBody = styled.tbody``

const TableRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.terciary['500']};
  border-bottom: 1px solid ${({ theme }) => theme.colors.quaternary['500']};
  padding: 16px;
`

export default TableComponent
