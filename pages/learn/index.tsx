import type { NextPage } from 'next';
import Head from 'next/head';

import BankFillIcon from 'remixicon-react/BankFillIcon';

import { OverviewLayout } from 'layouts/OverviewLayout';
import { Button } from 'components/Button';

interface LearnPageProps {}

const Home: NextPage<LearnPageProps> = (props) => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <OverviewLayout
        title="Origintrail Community Hub"
        description="The OriginTrail Community Hub is an accessible and open-source knowledge hub for and by the community. A place where Tracers can connect, collaborate, contribute and learn about all things OriginTrail"
      >
        <OverviewLayout.Header
          CallToAction={<Button label="Donate" Icon={BankFillIcon} />}
        />
        <OverviewLayout.Content>

        </OverviewLayout.Content>
      </OverviewLayout>
    </>
  );
};

export default Home;
