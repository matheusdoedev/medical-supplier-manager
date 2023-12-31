import { FC } from 'react'
import { styled } from 'styled-components'

import { TableRow, Text } from '@/components'
import { MEDICATIONS_ROWS_STYLE } from '@/constants'
import { Medication } from '@/interfaces'

interface MedicationsDataTableRowsProps {
  medicationsData: Medication[]
}

const MedicationsDataTableRows: FC<MedicationsDataTableRowsProps> = ({
  medicationsData,
}) =>
  medicationsData.map(
    ({
      application_number,
      product_number,
      form,
      strength,
      reference_drug,
      drug_name,
      active_ingredient,
      reference_standard,
    }) => {
      const handleStrengthsWithAdvise = (
        strengthParts: string[],
      ): [string, string] => {
        return [strengthParts[0] + '**', strengthParts[1]]
      }

      const isStrengthDataWithAdviseText = strength.includes('**')

      const [strengthText, strengthAdvise] = isStrengthDataWithAdviseText
        ? handleStrengthsWithAdvise(strength.split('**'))
        : [strength, '']

      const handleDataLists = (dataString: string) => {
        const handleDataList = () =>
          dataString
            .split(';')
            .map((dataStringItem, index) => (
              <li
                key={`${dataStringItem}-${application_number}-${product_number}-${index}`}
              >
                {dataStringItem}
              </li>
            ))

        return <DataList>{handleDataList()}</DataList>
      }

      return (
        <TableRow
          key={`${application_number}-${product_number}`}
          style={MEDICATIONS_ROWS_STYLE}
        >
          <Text as="td">{application_number}</Text>
          <Text as="td">{drug_name}</Text>
          <Text as="td">{product_number}</Text>
          <Text as="td">{handleDataLists(form)} </Text>
          <Text as="td" tooltip={strengthAdvise}>
            {handleDataLists(strengthText)}
          </Text>
          <Text as="td">{reference_drug}</Text>
          <Text as="td">{handleDataLists(active_ingredient)}</Text>
          <Text as="td">{reference_standard}</Text>
        </TableRow>
      )
    },
  )

const DataList = styled.ul`
  list-style: disc;
`

export default MedicationsDataTableRows
