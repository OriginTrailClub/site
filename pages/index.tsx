import type { NextPage } from 'next';
import Head from 'next/head';

import BankFillIcon from 'remixicon-react/BankFillIcon';
import PlayLineIcon from 'remixicon-react/PlayLineIcon';

import { OverviewLayout } from 'layouts/OverviewLayout';

import { Grid } from 'components/Grid';

import { Button } from 'components/Button';

import { PageIntroBlock } from 'layouts/Blocks/PageIntroBlock';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OverviewLayout
        title="Origintrail Club"
        description="Generated by create next app"
      >
        <OverviewLayout.Header
          CallToAction={<Button label="Donate" Icon={BankFillIcon} />}
        />
        <OverviewLayout.Content>
          <Grid>
            <Grid.Item>
              <PageIntroBlock>
                <PageIntroBlock.Content>
                  <PageIntroBlock.Title>
                    The world’s first Decentralized Knowledge Graph️
                  </PageIntroBlock.Title>
                  <PageIntroBlock.Description>
                    OriginTrail is a neutral web3 protocol in which you can
                    organize your most important assets making them discoverable
                    and verifiable using a groundbreaking decentralized
                    knowledge graph.
                  </PageIntroBlock.Description>
                  <PageIntroBlock.Actions>
                    <PageIntroBlock.Action
                      label="How it works"
                      Icon={PlayLineIcon}
                    />
                    <PageIntroBlock.Action
                      variant="tertiary"
                      label="Start Learning"
                      Icon={PlayLineIcon}
                    />
                  </PageIntroBlock.Actions>
                </PageIntroBlock.Content>
                <PageIntroBlock.Image
                  src="/home/introduction.jpg"
                  alt="The world’s first Decentralized Knowledge Graph️"
                />
              </PageIntroBlock>
            </Grid.Item>
            <Grid.Item>Metrics</Grid.Item>
            <Grid.Group>
              <Grid.Item>Content</Grid.Item>
              <Grid.Item>Solutions</Grid.Item>
            </Grid.Group>
            <Grid.Group>
              <Grid.Item>Content</Grid.Item>
              <Grid.Item>UseCases</Grid.Item>
            </Grid.Group>
            <Grid.Group>
              <Grid.Item>Content</Grid.Item>
              <Grid.Item>Timeline</Grid.Item>
              <Grid.Item>Article</Grid.Item>
              <Grid.Item>Participants</Grid.Item>
            </Grid.Group>
            <Grid.Group>
              <Grid.Item>Content</Grid.Item>
              <Grid.Item>Products</Grid.Item>
              <Grid.Item>Quotes</Grid.Item>
              <Grid.Item>Companies</Grid.Item>
            </Grid.Group>
            <Grid.Group>
              <Grid.Item>Content</Grid.Item>
              <Grid.Item>Socials</Grid.Item>
            </Grid.Group>
          </Grid>
        </OverviewLayout.Content>
        <OverviewLayout.Footer />
      </OverviewLayout>
    </>
  );
};

export default Home;
