import type { NextPage } from 'next';
import Head from 'next/head';

import BankFillIcon from 'remixicon-react/BankFillIcon';
import PlayLineIcon from 'remixicon-react/PlayLineIcon';
import ArrowRightFillIcon from 'remixicon-react/ArrowRightFillIcon';

import { OverviewLayout } from 'layouts/OverviewLayout';
import { PageIntroBlock } from 'layouts/Blocks/PageIntroBlock';
import { IntroBlock } from 'layouts/Blocks/IntroBlock';
import { TimelineBlock } from 'layouts/Blocks/TimelineBlock';
import { UseCaseBlock } from 'layouts/Blocks/UseCaseBlock';

import { Grid } from 'components/Grid';
import { Button } from 'components/Button';

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
              <Grid.Item>
                <IntroBlock>
                  <IntroBlock.Subtitle>
                    Harnessing Neutrality, Inclusiveness & Usability
                  </IntroBlock.Subtitle>
                  <IntroBlock.Title>
                    Helping the world unlock the true potential of data assets
                  </IntroBlock.Title>
                  <IntroBlock.Description>
                    Organize, discover and verify anything - from physical to
                    digital assets like supply chain items to Art, Diplomas,
                    Certificates, NFTs, DeFi and more. The Decentralized
                    Knowledge Graph allows the worlds’ data assets to be
                    structured, linked, persistent and understandable.
                  </IntroBlock.Description>
                  <IntroBlock.Action
                    label="Why OriginTrail?"
                    Icon={ArrowRightFillIcon}
                  />
                </IntroBlock>
              </Grid.Item>
              <Grid.Item>Solutions</Grid.Item>
            </Grid.Group>
            <Grid.Group>
              <Grid.Item>
                <IntroBlock>
                  <IntroBlock.Subtitle>
                    A blockchain agnostic, multi-chain protocol
                  </IntroBlock.Subtitle>
                  <IntroBlock.Title>
                    The data backbone of web3,build for global use
                  </IntroBlock.Title>
                  <IntroBlock.Description>
                    OrginTrail protocol has been used to create robust
                    decentralized applications in nearly every industry
                  </IntroBlock.Description>
                </IntroBlock>
              </Grid.Item>
              <Grid.Item>
                <UseCaseBlock>
                  <UseCaseBlock.Case>
                    <UseCaseBlock.Title>Supply Chains</UseCaseBlock.Title>
                    <UseCaseBlock.Description>
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus.
                    </UseCaseBlock.Description>
                    <UseCaseBlock.Image
                      src="/use-cases/use-case-1.svg"
                      alt="Supply Chains"
                    />
                  </UseCaseBlock.Case>
                  <UseCaseBlock.Case>
                    <UseCaseBlock.Title>Non Fungible Tokens</UseCaseBlock.Title>
                    <UseCaseBlock.Description>
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus.
                    </UseCaseBlock.Description>
                    <UseCaseBlock.Image
                      src="/use-cases/use-case-1.svg"
                      alt="Non Fungible Tokens"
                    />
                  </UseCaseBlock.Case>
                  <UseCaseBlock.Case>
                    <UseCaseBlock.Title>
                      Decentralized Finance
                    </UseCaseBlock.Title>
                    <UseCaseBlock.Description>
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus.
                    </UseCaseBlock.Description>
                    <UseCaseBlock.Image
                      src="/use-cases/use-case-1.svg"
                      alt="Decentralized Finance"
                    />
                  </UseCaseBlock.Case>
                  <UseCaseBlock.Case>
                    <UseCaseBlock.Title>Data Marketplace</UseCaseBlock.Title>
                    <UseCaseBlock.Description>
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus.
                    </UseCaseBlock.Description>
                    <UseCaseBlock.Image
                      src="/use-cases/use-case-1.svg"
                      alt="Data Marketplace"
                    />
                  </UseCaseBlock.Case>
                  <UseCaseBlock.Case>
                    <UseCaseBlock.Title>
                      Cetifications & Compliance
                    </UseCaseBlock.Title>
                    <UseCaseBlock.Description>
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus.
                    </UseCaseBlock.Description>
                    <UseCaseBlock.Image
                      src="/use-cases/use-case-1.svg"
                      alt="Cetifications & Compliance"
                    />
                  </UseCaseBlock.Case>
                  <UseCaseBlock.Case>
                    <UseCaseBlock.Title>
                      Logistics & Transportation
                    </UseCaseBlock.Title>
                    <UseCaseBlock.Description>
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus.
                    </UseCaseBlock.Description>
                    <UseCaseBlock.Image
                      src="/use-cases/use-case-1.svg"
                      alt="Logistics & Transportation"
                    />
                  </UseCaseBlock.Case>
                  <UseCaseBlock.Case>
                    <UseCaseBlock.Title>
                      Pharmaceutical Industry
                    </UseCaseBlock.Title>
                    <UseCaseBlock.Description>
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus.
                    </UseCaseBlock.Description>
                    <UseCaseBlock.Image
                      src="/use-cases/use-case-1.svg"
                      alt="Pharmaceutical Industry"
                    />
                  </UseCaseBlock.Case>
                  <UseCaseBlock.Case>
                    <UseCaseBlock.Title>
                      Personal Data Management
                    </UseCaseBlock.Title>
                    <UseCaseBlock.Description>
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus.
                    </UseCaseBlock.Description>
                    <UseCaseBlock.Image
                      src="/use-cases/use-case-1.svg"
                      alt="Personal Data Management"
                    />
                  </UseCaseBlock.Case>
                </UseCaseBlock>
              </Grid.Item>
            </Grid.Group>
            <Grid.Group>
              <Grid.Item>
                <IntroBlock>
                  <IntroBlock.Subtitle>
                    A blockchain agnostic, multi-chain protocol
                  </IntroBlock.Subtitle>
                  <IntroBlock.Title>
                    A global and permissionless network of nodes
                  </IntroBlock.Title>
                  <IntroBlock.Description>
                    The OriginTrail Decentralized Network (ODN) is a global
                    peer-to-peer network that is permissionless and
                    decentralized. The protocol combines knowledge graph and
                    blockchain technology and is build with interoperability and
                    global standards in mind.
                  </IntroBlock.Description>
                  <IntroBlock.Action
                    label="How it works"
                    Icon={ArrowRightFillIcon}
                  />
                </IntroBlock>
              </Grid.Item>
              <Grid.Item>
                <TimelineBlock>
                  <TimelineBlock.Event
                    date={new Date(2018, 11, 7)}
                    title="Ethereum"
                    icon="/blockchain-timeline/ethereum.svg"
                  />
                  <TimelineBlock.Event
                    date={new Date(2021, 2, 23)}
                    title="Xdai"
                    icon="/blockchain-timeline/xdai.svg"
                  />
                  <TimelineBlock.Event
                    date={new Date(2021, 7, 26)}
                    title="Polygon"
                    icon="/blockchain-timeline/polygon.svg"
                  />
                  <TimelineBlock.Event
                    title="Polkadot"
                    icon="/blockchain-timeline/polkadot.svg"
                  />
                </TimelineBlock>
              </Grid.Item>
              <Grid.Item>Article</Grid.Item>
              <Grid.Item>Participants</Grid.Item>
            </Grid.Group>
            <Grid.Group>
              <Grid.Item>
                <IntroBlock>
                  <IntroBlock.Subtitle>
                    Harnessing Neutrality, Inclusiveness & Usability
                  </IntroBlock.Subtitle>
                  <IntroBlock.Title>
                    Helping the world unlock the true potential of data assets
                  </IntroBlock.Title>
                  <IntroBlock.Description>
                    Organize, discover and verify anything - from physical to
                    digital assets like supply chain items to Art, Diplomas,
                    Certificates, NFTs, DeFi and more. The Decentralized
                    Knowledge Graph allows the worlds’ data assets to be
                    structured, linked, persistent and understandable.
                  </IntroBlock.Description>
                  <IntroBlock.Action
                    label="How it works"
                    Icon={ArrowRightFillIcon}
                  />
                </IntroBlock>
              </Grid.Item>
              <Grid.Item>Products</Grid.Item>
              <Grid.Item>Quotes</Grid.Item>
              <Grid.Item>Companies</Grid.Item>
            </Grid.Group>
            <Grid.Group>
              <Grid.Item>
                <IntroBlock>
                  <IntroBlock.Subtitle>Tracers unite!</IntroBlock.Subtitle>
                  <IntroBlock.Title>
                    Join our vibrant community today
                  </IntroBlock.Title>
                  <IntroBlock.Description>
                    OriginTrail is not a company. It is an ecosystem in which
                    everyone can contribute. We are connected on so many levels.
                    Let’s collaborate, learn, contribute, and spread the word.
                    Together.
                  </IntroBlock.Description>
                </IntroBlock>
              </Grid.Item>
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
