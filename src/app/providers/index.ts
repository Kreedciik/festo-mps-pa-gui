import compose from 'compose-function';

import { withErrorBoundary } from './withErrorBoundary';
import { withReactQuery } from './withReactQuery';
import { withMantine } from './withMantine';

export const withHocs = compose(withMantine, withErrorBoundary, withReactQuery);
