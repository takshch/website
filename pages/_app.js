import '../styles/globals.css';
import { withRouter } from 'next/router';
import DefaultLayout from '../layouts/index';

// returns Layout component for route
const getLayoutByRoute = (pathName) => {
  return DefaultLayout;
};

function MyApp({ Component, pageProps, router }) {
  const Layout = getLayoutByRoute(router.pathName);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default withRouter(MyApp);
