import type { AppProps } from 'next/app';
import Head from 'next/head';

import { SSRProvider } from '@react-aria/ssr';
import { I18nProvider } from '@react-aria/i18n';

import { globalStyles } from 'constants/globalStyles';

import BankFillIcon from 'remixicon-react/BankFillIcon';

import { PageLayout } from 'layouts/PageLayout';

import { Button } from 'components/Button';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <I18nProvider locale="en-US">
        <SSRProvider>
          <PageLayout>
            <PageLayout.Header
              CallToAction={
                <Button
                  label="Donate"
                  Icon={BankFillIcon}
                  href="https://donate.origintrail.club"
                  as="a"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            />
            <PageLayout.Content>
              <Component {...pageProps} />
            </PageLayout.Content>
            <PageLayout.Footer />
          </PageLayout>
        </SSRProvider>
      </I18nProvider>
    </>
  );
}

export default MyApp;
