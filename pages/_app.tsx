import type { AppProps } from 'next/app';

import { SSRProvider } from '@react-aria/ssr';
import {I18nProvider} from '@react-aria/i18n';

import { globalStyles } from 'constants/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <I18nProvider locale="en-US">
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </I18nProvider>
  );
}

export default MyApp;
