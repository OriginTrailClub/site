import type { AppProps } from 'next/app';

import { globalStyles } from 'constants/globalStyles';

import { SSRProvider } from '@react-aria/ssr';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
