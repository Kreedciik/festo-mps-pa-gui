import { MantineProvider } from '@mantine/core';
import { FC } from 'react';
import '@mantine/core/styles.css';

export const withMantine = (Component: FC) => () =>
  (
    <MantineProvider>
      {<Component />}
    </MantineProvider>
  );
