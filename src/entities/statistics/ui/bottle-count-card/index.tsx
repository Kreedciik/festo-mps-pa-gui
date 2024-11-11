import { Chip, Group, Paper, Pill, rem, Text, ThemeIcon } from '@mantine/core';
import { IconCalculator } from '@tabler/icons-react';
import classes from '../index.module.scss';

export function BottleCountCard() {
  return (
    <Paper radius="md" withBorder className={classes.card} mt={20}>
      <ThemeIcon className={classes.icon} size={60} radius={60}>
        <IconCalculator style={{ width: rem(32), height: rem(32) }} stroke={1.5} />
      </ThemeIcon>

      <Text ta="center" fw={700} className={classes.title}>
        Registered bottle count
      </Text>
      <Group justify="center" mt="xs">
        <Pill size='xl'>10</Pill>
      </Group>
    </Paper>
  );
}