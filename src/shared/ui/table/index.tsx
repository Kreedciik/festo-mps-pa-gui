import { Table } from "@mantine/core";
import { FC, ReactNode } from "react"

interface TableComponentProps {
    rows: ReactNode[];
    columns: string[];
}
export const TableComponent: FC<TableComponentProps> = ({columns, rows}) => {
  return (
    <Table withColumnBorders withTableBorder striped highlightOnHover>
    <Table.Thead>
      <Table.Tr>
        {columns.map(column => (<Table.Th key={column}>{column}</Table.Th>))}
      </Table.Tr>
    </Table.Thead>
    <Table.Tbody>{rows}</Table.Tbody>
  </Table>
  )
}
