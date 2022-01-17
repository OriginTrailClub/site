import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import BankFillIcon from 'remixicon-react/BankFillIcon';
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';

import { getCourses } from 'helpers/getCourses';

import { OverviewLayout } from 'layouts/OverviewLayout';
import { PageIntroBlock } from 'layouts/Blocks/PageIntroBlock';
import { CoursesBlock } from 'layouts/Blocks/CoursesBlock';

import { Button } from 'components/Button';
import { Grid } from 'components/Grid';

interface LearnPageProps {
  courses: [];
}

export const getStaticProps = async () => {
  const courses = await getCourses();

  return {
    props: {
      courses,
    },
  };
};

const LearnPage: NextPage<LearnPageProps> = (props) => {
  const { courses } = props;

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
                    <Link href="/learn/courses/origintrail-101" passHref>
                      <PageIntroBlock.Action
                        label="Start learning"
                        as="a"
                        Icon={ArrowRightLineIcon}
                      />
                    </Link>
                  </PageIntroBlock.Actions>
                </PageIntroBlock.Content>
                <PageIntroBlock.Image
                  src="/learn/introduction.png"
                  alt="OriginTrail Academy"
                />
              </PageIntroBlock>
            </Grid.Item>
            <Grid.Group>
              <Grid.Item>
                <CoursesBlock>
                  <CoursesBlock.Title>Courses</CoursesBlock.Title>
                  <CoursesBlock.Courses>
                    <CoursesBlock.Course>
                      <CoursesBlock.Image
                        src="/courses/banner-ot-101.jpg"
                        alt="OriginTrail 101"
                      />
                      <CoursesBlock.Content>
                        <CoursesBlock.Subject>
                          OriginTrail 101
                        </CoursesBlock.Subject>
                        <CoursesBlock.Author name="Amos Thomas" />
                        <CoursesBlock.Description>
                          In this course, you will learn how OriginTrail has
                          been revolutionizing supply chains since 2011 and how
                          you can make their blockchain-based solutions work for
                          you!
                        </CoursesBlock.Description>
                      </CoursesBlock.Content>
                    </CoursesBlock.Course>
                    <CoursesBlock.Course>
                      <CoursesBlock.Image
                        src="/courses/banner-ot-102.jpg"
                        alt="OriginTrail 102"
                      />
                      <CoursesBlock.Content>
                        <CoursesBlock.Subject>
                          OriginTrail 102
                        </CoursesBlock.Subject>
                        <CoursesBlock.Author name="Amos Thomas" />
                        <CoursesBlock.Description>
                          Amos is back to explain the OriginTrail Knowledge
                          Economy. Set up your Node using best practice,
                          understand how to connect to the wider OriginTrail
                          Decentralized Network (ODN), and more.
                        </CoursesBlock.Description>
                      </CoursesBlock.Content>
                    </CoursesBlock.Course>
                  </CoursesBlock.Courses>
                </CoursesBlock>
              </Grid.Item>
            </Grid.Group>
          </Grid>
        </OverviewLayout.Content>
        <OverviewLayout.Footer />
      </OverviewLayout>
    </>
  );
};

export default LearnPage;
