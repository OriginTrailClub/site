import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import BankFillIcon from 'remixicon-react/BankFillIcon';

import { OverviewLayout } from 'layouts/OverviewLayout';
import { Button } from 'components/Button';
import { Grid } from 'components/Grid';
import { PageIntroBlock } from 'layouts/Blocks/PageIntroBlock';
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';

interface LearnPageProps { }

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
                    <Grid>
                        <Grid.Item>
                            <PageIntroBlock>
                                <PageIntroBlock.Content>
                                    <PageIntroBlock.Title>
                                        OriginTrail Academy
                                    </PageIntroBlock.Title>
                                    <PageIntroBlock.Description>
                                        Want to learn more about OriginTrail, but don’t know where
                                        to start? These structured courses will help you kickstart
                                        your blockchain journey.
                                    </PageIntroBlock.Description>
                                    <PageIntroBlock.Actions>
                                        <Link href="/learn/origintrail-101" passHref>
                                            <PageIntroBlock.Action label="Start learning" as="a" Icon={ArrowRightLineIcon} />
                                        </Link>
                                    </PageIntroBlock.Actions>
                                </PageIntroBlock.Content>
                                <PageIntroBlock.Image
                                    src="/learn/introduction.png"
                                    alt="OriginTrail Academy"
                                />
                            </PageIntroBlock>
                        </Grid.Item>
                    </Grid>
                </OverviewLayout.Content>
            </OverviewLayout>
        </>
    );
};

export default Home;
