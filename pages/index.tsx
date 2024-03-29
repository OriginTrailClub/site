import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import PlayLineIcon from 'remixicon-react/PlayLineIcon';
import ArrowRightFillIcon from 'remixicon-react/ArrowRightFillIcon';

import { PageIntroBlock } from 'layouts/Blocks/PageIntroBlock';
import { IntroBlock } from 'layouts/Blocks/IntroBlock';
import { TimelineBlock } from 'layouts/Blocks/TimelineBlock';
import { ArticleBlock } from 'layouts/Blocks/ArticleBlock';
import { UseCaseBlock } from 'layouts/Blocks/UseCaseBlock';
import { ParticipantsBlock } from 'layouts/Blocks/ParticipantsBlock';
import { MetricsBlock } from 'layouts/Blocks/MetricsBlock';
import { SolutionsBlock } from 'layouts/Blocks/SolutionsBlock';
import { ImageBlock } from 'layouts/Blocks/ImageBlock';
import { ProductsBlock } from 'layouts/Blocks/ProductsBlock';
import { SocialsBlock } from 'layouts/Blocks/SocialsBlock';
import { QuotesBlock } from 'layouts/Blocks/QuotesBlock';
import { CompaniesBlock } from 'layouts/Blocks/CompaniesBlock';

import { Grid } from 'components/Grid';

interface HomePageProps {
  network: {
    totalJobs: number;
    activeNodes: number;
    stakedTokens: number;
  };
  market: {
    marketCap: number;
    price: number;
    maxSupply: number;
  };
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const res = await fetch(`https://v5api.othub.info/api/Home/HomeV3`);
  const data = await res.json();

  return {
    props: {
      network: {
        totalJobs: data?.All?.TotalJobs,
        activeNodes: data?.All?.ActiveNodes,
        stakedTokens: data?.All?.StakedTokens,
      },
      market: {
        marketCap: data?.MarketCapUsd,
        price: data?.PriceUsd,
        maxSupply: 500000000,
      },
    },
    revalidate: 60 * 30,
  };
};

const Home: NextPage<HomePageProps> = (props) => {
  const { market, network } = props;

  return (
    <>
      <Head>
        <title>Origintrail Community Hub</title>
        <meta
          name="description"
          content="The OriginTrail Community Hub is an accessible and open-source knowledge hub for and by the community. A place where Tracers can connect, collaborate, contribute and learn about all things OriginTrail"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@OriginTrailClub" />
        <meta name="twitter:title" content="Origintrail Community Hub" />
        <meta
          name="twitter:description"
          content="The OriginTrail Community Hub is an accessible and open-source knowledge hub for and by the community. A place where Tracers can connect, collaborate, contribute and learn about all things OriginTrail"
        />
        <meta
          name="twitter:image"
          content="https://origintrail.club/socials/twitter/placeholder-twitter.jpg"
        />
        <meta name="twitter:image:alt" content="Origintrail Community Hub" />

        <meta property="og:title" content="Origintrail Community Hub" />
        <meta
          property="og:description"
          content="The OriginTrail Community Hub is an accessible and open-source knowledge hub for and by the community. A place where Tracers can connect, collaborate, contribute and learn about all things OriginTrail"
        />
        <meta
          property="og:image"
          content="https://origintrail.club/socials/open-graph/placeholder-og.jpg"
        />
        <meta property="og:site_name" content="Origintrail Community Hub" />
      </Head>
      <Grid>
        <Grid.Item>
          <PageIntroBlock>
            <PageIntroBlock.Content>
              <PageIntroBlock.Title>
                The world&apos;s first decentralized knowledge graph️
              </PageIntroBlock.Title>
              <PageIntroBlock.Description>
                OriginTrail is a neutral web3 protocol for organizing your most
                important assets - making them discoverable and verifiable using
                a decentralized knowledge graph and blockchain technology.
              </PageIntroBlock.Description>
              <PageIntroBlock.Actions>
                <PageIntroBlock.Action
                  label="How it works"
                  Icon={PlayLineIcon}
                  href="https://www.youtube.com/watch?v=AsCUigu39Hw"
                  as="a"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </PageIntroBlock.Actions>
            </PageIntroBlock.Content>
            <PageIntroBlock.Image
              src="/home/introduction.png"
              alt="The world’s first Decentralized Knowledge Graph️"
            />
          </PageIntroBlock>
        </Grid.Item>
        <Grid.Item>
          <MetricsBlock>
            <MetricsBlock.Category value="Market">
              <MetricsBlock.Title>Metrics</MetricsBlock.Title>
              <MetricsBlock.Action
                label="Dashboard"
                Icon={ArrowRightFillIcon}
                href="https://othub.origin-trail.network/dashboard"
                as="a"
                target="_blank"
                rel="noopener noreferrer"
              />
              <MetricsBlock.Metrics>
                <MetricsBlock.Metric
                  icon="/metrics/market-cap.png"
                  value={market.marketCap}
                  label="Total Market Cap"
                  currency="USD"
                  notation="compact"
                  style="currency"
                />
                <MetricsBlock.Metric
                  icon="/metrics/price.png"
                  value={market.price}
                  label="Price"
                  currency="USD"
                  style="currency"
                />
                <MetricsBlock.Metric
                  icon="/metrics/max-supply.png"
                  value={500000000}
                  notation="compact"
                  label="Max Supply"
                />
              </MetricsBlock.Metrics>
            </MetricsBlock.Category>
            <MetricsBlock.Category value="Network">
              <MetricsBlock.Title>Metrics</MetricsBlock.Title>
              <MetricsBlock.Action
                label="Dashboard"
                Icon={ArrowRightFillIcon}
                href="https://othub.origin-trail.network/dashboard"
                as="a"
                target="_blank"
                rel="noopener noreferrer"
              />
              <MetricsBlock.Metrics>
                <MetricsBlock.Metric
                  icon="/metrics/total-graph-size.png"
                  value={network.activeNodes}
                  notation="compact"
                  label="Active Nodes"
                />
                <MetricsBlock.Metric
                  icon="/metrics/dataset-published.png"
                  value={network.totalJobs}
                  notation="compact"
                  label="Total Datasets Published"
                />
                <MetricsBlock.Metric
                  icon="/metrics/total-tokens-staked.png"
                  value={network.stakedTokens}
                  notation="compact"
                  label="Total Tokens Staked"
                />
              </MetricsBlock.Metrics>
            </MetricsBlock.Category>
          </MetricsBlock>
        </Grid.Item>
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
                digital assets. The Decentralized Knowledge Graph allows data
                assets (like in supply chains, art, diplomas, certificates,
                NFTs, DeFi, and more) to be structured, linked, persistent, and
                understandable.
              </IntroBlock.Description>
            </IntroBlock>
          </Grid.Item>
          <Grid.Item>
            <SolutionsBlock>
              <SolutionsBlock.Case>
                <SolutionsBlock.Problem>
                  <SolutionsBlock.Image
                    src="/solutions/interoperability.png"
                    alt="Poor data interoperability"
                  />
                  <SolutionsBlock.Title>
                    Poor data interoperability
                  </SolutionsBlock.Title>
                  <SolutionsBlock.Description>
                    Data silos and low data interoperability create major
                    technical challenges for providers that want to build
                    collaborative applications, especially for organisations
                    that want to establish end-to-end supply chain transparency.
                  </SolutionsBlock.Description>
                </SolutionsBlock.Problem>
                <SolutionsBlock.Solution>
                  <SolutionsBlock.Image
                    src="/solutions/seamless-connection.png"
                    alt="Seamless connection of data"
                  />
                  <SolutionsBlock.Title>
                    Seamless connection of data
                  </SolutionsBlock.Title>
                  <SolutionsBlock.Description>
                    OriginTrail is built on globally recognized GS1 and W3C
                    standards which allow for efficient alignment of data from
                    multiple data sources. It enables seamless and automatic
                    data connection and interoperability between legacy (ERP)
                    systems.
                  </SolutionsBlock.Description>
                </SolutionsBlock.Solution>
              </SolutionsBlock.Case>
              <SolutionsBlock.Case>
                <SolutionsBlock.Problem>
                  <SolutionsBlock.Image
                    src="/solutions/cost-scalability.png"
                    alt="Cost and scalability of blockchains"
                  />
                  <SolutionsBlock.Title>
                    Cost and scalability of blockchains
                  </SolutionsBlock.Title>
                  <SolutionsBlock.Description>
                    Existing blockchain solutions are expensive when it comes to
                    data operations and lack adequate database properties. Any
                    solution wishing to integrate blockchain needs to overcome
                    the problem of handling interoperable data and the high
                    cost.
                  </SolutionsBlock.Description>
                </SolutionsBlock.Problem>
                <SolutionsBlock.Solution>
                  <SolutionsBlock.Image
                    src="/solutions/infinitly-scalable.png"
                    alt="Infinitely scalable and cost efficient"
                  />
                  <SolutionsBlock.Title>
                    Infinitely scalable and cost efficient
                  </SolutionsBlock.Title>
                  <SolutionsBlock.Description>
                    OriginTrail does all the heavy lifting off-chain by
                    leveraging powerful graph data structures which allow for
                    high flexibility and (inter)connectivity of data. Its
                    open-source nature enables easy and efficient deployment.
                  </SolutionsBlock.Description>
                </SolutionsBlock.Solution>
              </SolutionsBlock.Case>
              <SolutionsBlock.Case>
                <SolutionsBlock.Problem>
                  <SolutionsBlock.Image
                    src="/solutions/data-tampering-centralization.png"
                    alt="Data tampering and centralization"
                  />
                  <SolutionsBlock.Title>
                    Data tampering and centralization
                  </SolutionsBlock.Title>
                  <SolutionsBlock.Description>
                    Current attempts to overcome data silos are done by
                    aggregating data in a centralized way, prompting concerns
                    about data integrity and omitting accountability.
                    Centralization also allows for possible data tampering and
                    collusion between parties.
                  </SolutionsBlock.Description>
                </SolutionsBlock.Problem>
                <SolutionsBlock.Solution>
                  <SolutionsBlock.Image
                    src="/solutions/data-immutability.png"
                    alt="Data immutability"
                  />
                  <SolutionsBlock.Title>Data immutability</SolutionsBlock.Title>
                  <SolutionsBlock.Description>
                    OriginTrail harnesses the power of blockchain to create a
                    tamper-proof &ldquo;fingerprint&rdquo; (a cryptographic
                    hash) which is used to prove that data has not been modified
                    in any way. OriginTrail is being built to support many
                    different blockchain implementations.
                  </SolutionsBlock.Description>
                </SolutionsBlock.Solution>
              </SolutionsBlock.Case>
              <SolutionsBlock.Case>
                <SolutionsBlock.Problem>
                  <SolutionsBlock.Image
                    src="/solutions/sensitive-data-protection.png"
                    alt="Sensitive data protection"
                  />
                  <SolutionsBlock.Title>
                    Sensitive data protection
                  </SolutionsBlock.Title>
                  <SolutionsBlock.Description>
                    Companies are often reluctant to exchange data with other
                    companies as they are concerned this might undermine their
                    competitive position. Exchange of data is often enforced by
                    power asymmetry or done because of regulatory reasons.{' '}
                  </SolutionsBlock.Description>
                </SolutionsBlock.Problem>
                <SolutionsBlock.Solution>
                  <SolutionsBlock.Image
                    src="/solutions/privacy.png"
                    alt="Privacy by default"
                  />
                  <SolutionsBlock.Title>
                    Privacy by default
                  </SolutionsBlock.Title>
                  <SolutionsBlock.Description>
                    Data creators can set the data to be public or private, have
                    data expire after a certain amount of time, or have that
                    data (or parts of it) shared only with appropriate parties.
                    Sensitive data is protected using “zero-knowledge”
                    encryption methods.{' '}
                  </SolutionsBlock.Description>
                </SolutionsBlock.Solution>
              </SolutionsBlock.Case>
            </SolutionsBlock>
          </Grid.Item>
        </Grid.Group>
        <Grid.Group>
          <Grid.Item>
            <IntroBlock align="left">
              <IntroBlock.Subtitle>A new frontier</IntroBlock.Subtitle>
              <IntroBlock.Title>
                The data backbone of web3, built for global use
              </IntroBlock.Title>
              <IntroBlock.Description>
                The OriginTrail protocol is used by organizations of all shapes
                and sizes for building every kind of application imaginable that
                requires trust, data integrity and interoperability.
              </IntroBlock.Description>
            </IntroBlock>
          </Grid.Item>
          <Grid.Item>
            <UseCaseBlock aria-label="Use cases">
              <UseCaseBlock.Case value="Supply Chains">
                <UseCaseBlock.Title>Supply Chains</UseCaseBlock.Title>
                <UseCaseBlock.Description>
                  Increase transparency, safety, and financial performance from
                  seed to table
                </UseCaseBlock.Description>
                <UseCaseBlock.Image
                  src="/use-cases/supply-chain.png"
                  alt="Supply Chains"
                />
              </UseCaseBlock.Case>
              <UseCaseBlock.Case value="Non Fungible Tokens">
                <UseCaseBlock.Title>Non Fungible Tokens</UseCaseBlock.Title>
                <UseCaseBlock.Description>
                  Protect, connect and level-up NFTs by leveraging powerful
                  knowledge graph technology
                </UseCaseBlock.Description>
                <UseCaseBlock.Image
                  src="/use-cases/nfts.png"
                  alt="Non Fungible Tokens"
                />
              </UseCaseBlock.Case>
              <UseCaseBlock.Case value="Decentralized Finance">
                <UseCaseBlock.Title>Decentralized Finance</UseCaseBlock.Title>
                <UseCaseBlock.Description>
                  Collateralizing real world assets or querying real world
                  events for use within finance
                </UseCaseBlock.Description>
                <UseCaseBlock.Image
                  src="/use-cases/defi.png"
                  alt="Decentralized Finance"
                />
              </UseCaseBlock.Case>
              <UseCaseBlock.Case value="Data Marketplace">
                <UseCaseBlock.Title>Data Marketplace</UseCaseBlock.Title>
                <UseCaseBlock.Description>
                  Provide open-source infrastructure that encourages fair data
                  exchange
                </UseCaseBlock.Description>
                <UseCaseBlock.Image
                  src="/use-cases/data-marketplace.png"
                  alt="Data Marketplace"
                />
              </UseCaseBlock.Case>
              <UseCaseBlock.Case value="Certifications and Compliance">
                <UseCaseBlock.Title>
                  Certifications & Compliance
                </UseCaseBlock.Title>
                <UseCaseBlock.Description>
                  Safeguard the validity of issued training certificates and
                  business standards
                </UseCaseBlock.Description>
                <UseCaseBlock.Image
                  src="/use-cases/certifications.png"
                  alt="Cetifications & Compliance"
                />
              </UseCaseBlock.Case>
              <UseCaseBlock.Case value="Logistics and Transportation">
                <UseCaseBlock.Title>
                  Logistics & Transportation
                </UseCaseBlock.Title>
                <UseCaseBlock.Description>
                  Enhance logistics systems to achieve linked, secured, and
                  trusted data sharing
                </UseCaseBlock.Description>
                <UseCaseBlock.Image
                  src="/use-cases/logistics.png"
                  alt="Logistics & Transportation"
                />
              </UseCaseBlock.Case>
              <UseCaseBlock.Case value="Pharmaceutical Industry">
                <UseCaseBlock.Title>Pharmaceutical Industry</UseCaseBlock.Title>
                <UseCaseBlock.Description>
                  Fight fraud, power serialisation, and ensure compliance
                </UseCaseBlock.Description>
                <UseCaseBlock.Image
                  src="/use-cases/pharmaceutical.png"
                  alt="Pharmaceutical Industry"
                />
              </UseCaseBlock.Case>
              <UseCaseBlock.Case value="Personal Data Management">
                <UseCaseBlock.Title>
                  Personal Data Management
                </UseCaseBlock.Title>
                <UseCaseBlock.Description>
                  Take back control over personal data while enabling compliance
                </UseCaseBlock.Description>
                <UseCaseBlock.Image
                  src="/use-cases/personal-data.png"
                  alt="Personal Data Management"
                />
              </UseCaseBlock.Case>
            </UseCaseBlock>
          </Grid.Item>
        </Grid.Group>
        <Grid.Group>
          <Grid.Item>
            <ImageBlock>
              <ImageBlock.Image
                src="/home/network-of-nodes-desktop.png"
                alt="Helping the world unlock the true potential of data assets"
                minBreakpoint="@bp4"
                ratio={432 / 1234}
              />
              <ImageBlock.Image
                src="/home/network-of-nodes-mobile.png"
                alt="Helping the world unlock the true potential of data assets"
                maxBreakpoint="@bp4"
                ratio={432 / 720}
              />
            </ImageBlock>
          </Grid.Item>
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
                peer-to-peer network that is permissionless and decentralized.
                The protocol combines knowledge graph and blockchain technology
                and is build with interoperability and global standards in mind.
              </IntroBlock.Description>
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
                date={new Date(2018, 11, 7)}
                title="Hyperledger"
                icon="/blockchain-timeline/hyperledger.svg"
              />
              <TimelineBlock.Event
                date={new Date(2021, 2, 23)}
                title="Gnosis"
                icon="/blockchain-timeline/gnosis.svg"
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
          <Grid.Item>
            <ArticleBlock>
              <ArticleBlock.Content>
                <ArticleBlock.Subtitle>
                  A self-sustaining, incentivized network
                </ArticleBlock.Subtitle>
                <ArticleBlock.Title>
                  The four network participants
                </ArticleBlock.Title>
                <ArticleBlock.Description>
                  The $TRAC token is a means of compensation between data
                  creators, data holders, and data consumers. It uses an
                  innovative staking system to keep all parties honest. Nodes
                  are therefore incentivized for performing consensus checks and
                  delivering data on demand.
                </ArticleBlock.Description>
                <ArticleBlock.Action
                  label="Token Utility"
                  Icon={ArrowRightFillIcon}
                  href="https://medium.com/origintrail/origintrail-a-look-into-network-mechanisms-incentives-and-market-forces-e99938b8687c"
                  as="a"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </ArticleBlock.Content>
              <ArticleBlock.Image
                src="/home/network-participants.png"
                alt="The four network participants"
              />
            </ArticleBlock>
          </Grid.Item>
          <Grid.Item>
            <ParticipantsBlock aria-label="Network Participants">
              <ParticipantsBlock.Participant value="Data Providers">
                <ParticipantsBlock.Image
                  src="/participants/data-provider.png"
                  alt="Data Providers"
                />
                <ParticipantsBlock.Title>
                  Data Providers
                </ParticipantsBlock.Title>
                <ParticipantsBlock.Description>
                  An entity that publishes ERP or other data to the OriginTrail
                  Decentralized Network (ODN)
                </ParticipantsBlock.Description>
              </ParticipantsBlock.Participant>
              <ParticipantsBlock.Participant value="Data Creators">
                <ParticipantsBlock.Image
                  src="/participants/data-creator.png"
                  alt="Data Creators"
                />
                <ParticipantsBlock.Title>Data Creators</ParticipantsBlock.Title>
                <ParticipantsBlock.Description>
                  An entity that is responsible for correctly importing the data
                  from the data provider
                </ParticipantsBlock.Description>
              </ParticipantsBlock.Participant>
              <ParticipantsBlock.Participant value="Data Holders">
                <ParticipantsBlock.Image
                  src="/participants/data-holder.png"
                  alt="Data Holders"
                />
                <ParticipantsBlock.Title>Data Holders</ParticipantsBlock.Title>
                <ParticipantsBlock.Description>
                  An entity that commits to storing and holding the data for a
                  certain period of time
                </ParticipantsBlock.Description>
              </ParticipantsBlock.Participant>
              <ParticipantsBlock.Participant value="Data Viewers">
                <ParticipantsBlock.Image
                  src="/participants/data-viewer.png"
                  alt="Data Viewers"
                />
                <ParticipantsBlock.Title>Data Viewers</ParticipantsBlock.Title>
                <ParticipantsBlock.Description>
                  An entity that requests data from any of the available nodes
                  in the ODN network
                </ParticipantsBlock.Description>
              </ParticipantsBlock.Participant>
            </ParticipantsBlock>
          </Grid.Item>
        </Grid.Group>
        <Grid.Group>
          <Grid.Item>
            <IntroBlock>
              <IntroBlock.Subtitle>Enterprise adoption</IntroBlock.Subtitle>
              <IntroBlock.Title>
                Flagship products built with OriginTrail
              </IntroBlock.Title>
              <IntroBlock.Description>
                OriginTrail already powers trusted data exchange in different
                industries - including Fortune 500 companies - bringing value to
                users and companies around the world.
              </IntroBlock.Description>
              <IntroBlock.Action
                label="Use cases"
                Icon={ArrowRightFillIcon}
                href="https://origintrail.io/case-studies"
                as="a"
                target="_blank"
                rel="noopener noreferrer"
              />
            </IntroBlock>
          </Grid.Item>
          <Grid.Item>
            <ProductsBlock>
              <ProductsBlock.Product value="standards-cerfications">
                <ProductsBlock.Header
                  title="Standards & Certifications"
                  icon="/products/products-1-icon.jpg"
                />
                <ProductsBlock.Content>
                  <ProductsBlock.Image
                    src="/products/products-1-image.jpg"
                    alt="Standards & Certifications"
                  />
                  <ProductsBlock.Description>
                    BSI is using the OriginTrail protocol to safeguard the
                    validity of issued training certificates and business
                    standards. OriginTrail-based applications developed for BSI
                    enable quick validity checks for any document by
                    cross-referencing trusted data. This data is stored on the
                    OriginTrail Decentralized Network, which is connected to the
                    Ethereum blockchain.
                  </ProductsBlock.Description>
                  <ProductsBlock.Action
                    label="Case study"
                    Icon={ArrowRightFillIcon}
                    href="https://origintrail.io/case-studies/standards-and-certifications"
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </ProductsBlock.Content>
              </ProductsBlock.Product>
              <ProductsBlock.Product value="rail-travel-safety">
                <ProductsBlock.Header
                  title="Rail Travel Safety"
                  icon="/products/products-3-icon.jpg"
                />
                <ProductsBlock.Content>
                  <ProductsBlock.Image
                    src="/products/products-3-image.jpg"
                    alt="Rail Travel Safety"
                  />
                  <ProductsBlock.Description>
                    Ensuring the safety of train travel by tracking every piece
                    of rail track material used by the Swiss Federal Railways.
                    SBB is looking to move beyond the state of the art to ensure
                    real-time availability of quality traceability information
                    for individual parts involved in their systems to deliver
                    one of the world&apos;s most reliable rail journeys.
                  </ProductsBlock.Description>
                  <ProductsBlock.Action
                    label="Case study"
                    Icon={ArrowRightFillIcon}
                    href="https://origintrail.io/case-studies/rail-travel-safety"
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </ProductsBlock.Content>
              </ProductsBlock.Product>
              <ProductsBlock.Product value="trusted-bytes">
                <ProductsBlock.Header
                  title="Trusted Bytes"
                  icon="/products/products-1-icon.jpg"
                />
                <ProductsBlock.Content>
                  <ProductsBlock.Image
                    src="/products/products-2-image.jpg"
                    alt="trusted-bytes"
                  />
                  <ProductsBlock.Description>
                    Trusted Bytes aims to use innovative digital technology to
                    facilitate the flow of goods across the UK border,
                    increasing efficiency, transparency, and security of the UK
                    food sector. This will help to create proof of food
                    provenance by digitizing critical border transfer processes
                    while also providing seamless real-time digital connectivity
                    to supply chain operators.
                  </ProductsBlock.Description>
                  <ProductsBlock.Action
                    label="Press release"
                    Icon={ArrowRightFillIcon}
                    href="https://www.bsigroup.com/en-GB/about-bsi/media-centre/press-releases/2021/april/bsi-joins-innovate-uk-consortium-designed-to-help-digitize-the-uks-fresh-produce-supply-chains/"
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </ProductsBlock.Content>
              </ProductsBlock.Product>
              <ProductsBlock.Product value="sustainable-argiculture">
                <ProductsBlock.Header
                  title="Sustainable Agriculture"
                  icon="/products/products-4-icon.jpg"
                />
                <ProductsBlock.Content>
                  <ProductsBlock.Image
                    src="/products/products-4-image.jpg"
                    alt="Sustainable Agriculture"
                  />
                  <ProductsBlock.Description>
                    The OriginTrail protocol is helping with the digital
                    transformation of the European countryside. European
                    agriculture is on its way to become smarter, more efficient,
                    and more sustainable through continuous digital innovation
                    and research. As part of this digital agricultural
                    revolution, the OriginTrail protocol is supporting several
                    trusted agri-food supply chain solutions within Europe-wide
                    research and innovation consortia.
                  </ProductsBlock.Description>
                  <ProductsBlock.Action
                    label="Case study"
                    Icon={ArrowRightFillIcon}
                    href="https://origintrail.io/case-studies/sustainable-agriculture"
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </ProductsBlock.Content>
              </ProductsBlock.Product>
              <ProductsBlock.Product value="trusted-factory">
                <ProductsBlock.Header
                  title="Trusted Factory"
                  icon="/products/products-5-icon.jpg"
                />
                <ProductsBlock.Content>
                  <ProductsBlock.Image
                    src="/products/products-5-image.jpg"
                    alt="Trusted Factory"
                  />
                  <ProductsBlock.Description>
                    BSI and SCAN are utilizing the OriginTrail protocol to
                    ensure the integrity of security audits for some of the
                    largest US importers. Today, SCAN has more than 21,300
                    factories in its database, with several hundred new audits
                    conducted monthly. All of the audits are secured utilizing
                    the OriginTrail Decentralized Network and comply with
                    SCAN&apos;s rigorous data privacy requirements. With
                    flexible data permissions, the solution enables SCAN to
                    share data with government agencies such as CTPAT.
                  </ProductsBlock.Description>
                  <ProductsBlock.Action
                    label="Case study"
                    Icon={ArrowRightFillIcon}
                    href="https://origintrail.io/case-studies/trusted-factory"
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </ProductsBlock.Content>
              </ProductsBlock.Product>
              <ProductsBlock.Product value="AidTrust">
                <ProductsBlock.Header
                  title="AidTrust"
                  icon="/products/products-6-icon.jpg"
                />
                <ProductsBlock.Content>
                  <ProductsBlock.Image
                    src="/products/products-6-image.jpg"
                    alt="AidTrust"
                  />
                  <ProductsBlock.Description>
                    AidTrust brings visibility and trust to the distribution of
                    donated medicines. Bringing together BSI&apos;s global
                    footprint, expertise in management systems and supply chain
                    risk management best practice, with the OriginTrail
                    Decentralized Knowledge Graph developed by our technology
                    partner Trace Labs, AidTrust enables visibility, risk flags,
                    real-time decision-making, while maintaining data integrity,
                    security and privacy, on all medicines at all stages of the
                    supply chain.
                  </ProductsBlock.Description>
                  <ProductsBlock.Action
                    label="Case study"
                    Icon={ArrowRightFillIcon}
                    href="https://www.bsigroup.com/globalassets/localfiles/en-gb/healthcare/donated-medicines-and-vaccines/aidtrust-case-study.pdf"
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </ProductsBlock.Content>
              </ProductsBlock.Product>
            </ProductsBlock>
          </Grid.Item>
          <Grid.Item>
            <CompaniesBlock>
              <CompaniesBlock.Title>Ecosystem</CompaniesBlock.Title>
              <CompaniesBlock.CallToAction
                label="Map"
                href="https://origintrail.io/ecosystem-landscape"
                as="a"
                target="_blank"
                rel="noopener noreferrer"
              />
              <CompaniesBlock.Companies>
                <CompaniesBlock.Company
                  src="/ecosystem/acala.png"
                  alt="Acala"
                />
                <CompaniesBlock.Company src="/ecosystem/sbb.png" alt="SBB" />
                <CompaniesBlock.Company src="/ecosystem/scan.png" alt="Scan" />
                <CompaniesBlock.Company
                  src="/ecosystem/wef.png"
                  alt="World economic forum"
                />
                <CompaniesBlock.Company
                  src="/ecosystem/gs1-slovenija.png"
                  alt="GS1 Slovenia"
                />
                <CompaniesBlock.Company
                  src="/ecosystem/substrate.png"
                  alt="Substrate"
                />
              </CompaniesBlock.Companies>
            </CompaniesBlock>
          </Grid.Item>
          <Grid.Item>
            <QuotesBlock>
              <QuotesBlock.Slide value="Quote Bob Metcalfe">
                <QuotesBlock.Image
                  src="/quotes/bob-metcalfe.png"
                  alt="Bob Metcalfe"
                />
                <QuotesBlock.Quote>
                  <QuotesBlock.Description>
                    “The early Metcalfe&apos;s Law talked about the connection
                    of machines and how valuable PCs would be connected,
                    Facebook made it all about connecting people together, what
                    OriginTrail is working on is connectivity of data and the
                    value that can be derived from that.”
                  </QuotesBlock.Description>
                  <QuotesBlock.Caption>
                    <QuotesBlock.Author name="Bob Metcalfe" />
                    <QuotesBlock.Role label="Advisor to Trace Labs, core developers of OriginTrail" />
                  </QuotesBlock.Caption>
                </QuotesBlock.Quote>
              </QuotesBlock.Slide>
              <QuotesBlock.Slide value="Quote Gregg Kidd">
                <QuotesBlock.Image
                  src="/quotes/greg-kidd.png"
                  alt="Greg Kidd"
                />
                <QuotesBlock.Quote>
                  <QuotesBlock.Description>
                    “Identity is not just for people—but for every supply chain
                    to track the origin and provenance of our food, drinks, and
                    vaccines. OriginTrail makes the identity of things secure
                    and transparent through blockchain technology.”
                  </QuotesBlock.Description>
                  <QuotesBlock.Caption>
                    <QuotesBlock.Author name="Gregg Kidd" />
                    <QuotesBlock.Role label="CEO Global ID and Founder Hard Yaka" />
                  </QuotesBlock.Caption>
                </QuotesBlock.Quote>
              </QuotesBlock.Slide>
              <QuotesBlock.Slide value="Quote Dan Purtell">
                <QuotesBlock.Image
                  src="/quotes/dan-purtell.png"
                  alt="Dan Purtell"
                />
                <QuotesBlock.Quote>
                  <QuotesBlock.Description>
                    “We&apos;ve been working with OriginTrail since 2018.
                    Digital trust is very important to us, OriginTrail and
                    blockchain technology help us verify claims in a very
                    immutable way. It&apos;s a great strategic partnership and
                    we plan on growing it.”
                  </QuotesBlock.Description>
                  <QuotesBlock.Caption>
                    <QuotesBlock.Author name="Dan Purtell" />
                    <QuotesBlock.Role label="Director of Innovation BSI" />
                  </QuotesBlock.Caption>
                </QuotesBlock.Quote>
              </QuotesBlock.Slide>
              <QuotesBlock.Slide value="Quote Aaron Bradley">
                <QuotesBlock.Image
                  src="/quotes/aaron-bradley.png"
                  alt="Aaron Bradley"
                />
                <QuotesBlock.Quote>
                  <QuotesBlock.Description>
                    “Very excited to be joining the advisory board of Trace
                    Labs, though I feel like Greg Hirsch in the company of
                    Kendall and Roman Roy. Don&apos;t @ me, it&apos;s the only
                    standing-alongside-giants analogy I could come up with”
                  </QuotesBlock.Description>
                  <QuotesBlock.Caption>
                    <QuotesBlock.Author name="Aaron Bradley" />
                    <QuotesBlock.Role label="Knowledge Graph Strategist EA" />
                  </QuotesBlock.Caption>
                </QuotesBlock.Quote>
              </QuotesBlock.Slide>
            </QuotesBlock>
          </Grid.Item>
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
                Let&apos;s collaborate, learn, contribute, and spread the word.
                Together.
              </IntroBlock.Description>
            </IntroBlock>
          </Grid.Item>
          <Grid.Item>
            <SocialsBlock>
              <SocialsBlock.Github
                href="https://github.com/origintrail"
                label="Github"
              />
              <SocialsBlock.Discord
                href="https://discord.gg/k4W8Jk9T"
                label="Discord"
              />
              <SocialsBlock.Twitter
                href="https://twitter.com/origin_trail"
                label="Twitter"
              />
              <SocialsBlock.Reddit
                href="https://www.reddit.com/r/OriginTrail/"
                label="Reddit"
              />
              <SocialsBlock.Telegram
                href="https://t.me/OriginTrail/"
                label="Telegram"
              />
              <SocialsBlock.Medium
                href="https://origintrail.medium.com/"
                label="Medium"
              />
            </SocialsBlock>
          </Grid.Item>
        </Grid.Group>
      </Grid>
    </>
  );
};

export default Home;
