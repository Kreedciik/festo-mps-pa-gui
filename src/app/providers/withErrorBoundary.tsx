import { FC } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import { AppError } from '../config/app-error';

const ErrorFallback = ({ error }: FallbackProps) => {
  console.log(error, 'error boundary');
  return <AppError />;
};

export const withErrorBoundary = (Component: FC) => () =>
  (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Component />
    </ErrorBoundary>
  );
