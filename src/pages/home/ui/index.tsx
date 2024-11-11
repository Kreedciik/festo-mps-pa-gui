import { TableComponent } from '@shared/ui/table';
import classes from './index.module.scss'
import mockData from '@shared/mocks/MOCK_DATA.json'
import { Flex, Table } from '@mantine/core';
import { BottleCountCard, WaterLevelCard } from '@entities/statistics';
export const Home = () => {
    const columns = ["Cup registered at", "Filling started", "Filling finished", "Reached the final point"]
    const rows = mockData.map((element, i) => (
        <Table.Tr key={i}>
        <Table.Td>{element.registered_at}</Table.Td>
        <Table.Td>{element.filling_started}</Table.Td>
        <Table.Td>{element.filling_finished}</Table.Td>
        <Table.Td>{element.reached_at}</Table.Td>
      </Table.Tr>
    ))
    return (
        <Flex gap={10} direction={'column'} className={classes.home}>
            <Flex justify={'space-between'} gap={10}>
            <WaterLevelCard />
            <BottleCountCard />
            </Flex>
            <TableComponent columns={columns} rows={rows} />
        </Flex>
    );
};