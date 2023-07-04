import { TOKEN } from '@shared/lib/constants';
import { Layout } from '@widgets/layout';
import { Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  // useLayoutEffect(() => {
  //   (async function () {
  //     const authToken = Cookies.get(TOKEN.AUTH_TOKEN);
  //     if (!authToken) {
  //       logoutUser();
  //     } else {
  //       await getViewerData();
  //     }
  //   })();
  // }, [logoutUser, getViewerData]);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
