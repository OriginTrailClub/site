import type { AppProps } from 'next/app';

import { globalStyles } from 'constants/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return <Component {...pageProps} />;
}

export default MyApp;
