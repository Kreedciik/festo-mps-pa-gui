import compose from 'compose-function';

import { withErrorBoundary } from './withErrorBoundary';
import { withReactQuery } from './withReactQuery';

export const withHocs = compose(withErrorBoundary, withReactQuery);
