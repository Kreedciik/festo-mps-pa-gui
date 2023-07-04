import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const withReactQuery = (Component: FC) => () =>
  (
    <QueryClientProvider client={queryClient}>
      {<Component />}
    </QueryClientProvider>
  );
