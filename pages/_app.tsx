import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';

import { SSRProvider } from '@react-aria/ssr';
import { I18nProvider } from '@react-aria/i18n';

import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';

import { globalStyles } from 'constants/globalStyles';

import { PageLayout } from 'layouts/PageLayout';

import { Button } from 'components/Button';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon-origintrail.ico" />
      </Head>
      <I18nProvider locale="en-US">
        <SSRProvider>
          <PageLayout>
            <PageLayout.Header
              CallToAction={
                <Link
                  href={{
                    pathname: '/learn',
                  }}
                  passHref
                >
                  <Button label="Learn" Icon={ArrowRightLineIcon} as="a" />
                </Link>
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
