import { RoutesViews } from '@app/config/routing/init';
import { FC, Suspense } from 'react';

import { withHocs } from './providers';
import './styles/global.scss';

const App: FC = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RoutesViews />
      </Suspense>
    </>
  );
};
export default withHocs(App);
