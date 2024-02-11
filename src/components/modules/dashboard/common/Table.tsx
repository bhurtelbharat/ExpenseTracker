import { Table } from '@mantine/core';

export const TableLayout = (props: any) => {
    const { tabledata, cols, colheader } = props;

    const rows = tabledata.map((data: any, index: number) => (
        <Table.Tr key={index}>
            {cols.map((k: any, i: number) => (
                <Table.Td key={i}>{data[k] ?? ''}</Table.Td>
            ))}
        </Table.Tr>
    ));

    return <Table>
        <Table.Thead>
            <Table.Tr>
                {colheader.map((col: any, i: number) => (
                    <Table.Th key={i}>{col}</Table.Th>
                ))}
            </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
    </Table>

}
