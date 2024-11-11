import { Badge, Group, Paper, Progress, rem, Text, ThemeIcon } from '@mantine/core';
import { IconDropletHalf2Filled } from '@tabler/icons-react';
import classes from '../index.module.scss';

export function WaterLevelCard() {
    const waterLevelInPercentage = (20 / 500) * 100;
  return (
    <Paper style={{width: '100%'}} radius="md" withBorder className={classes.card} mt={20}>
      <ThemeIcon className={classes.icon} size={60} radius={60}>
        <IconDropletHalf2Filled style={{ width: rem(32), height: rem(32) }} stroke={1.5} />
      </ThemeIcon>

      <Text ta="center" fw={700} className={classes.title}>
        Water level in the tank
      </Text>
      <Group justify="space-between" mt="xs">
        <Text fz="sm" c="dimmed">
          Used water
        </Text>
        <Text fz="sm" c="dimmed">
        {waterLevelInPercentage}%
        </Text>
      </Group>

      <Progress value={waterLevelInPercentage} mt={5} />

      <Group justify="space-between" mt="md">
        <Text fz="sm">20 ml / 500 ml</Text>
        <Badge size="sm">480 ml left</Badge>
      </Group>
    </Paper>
  );
}