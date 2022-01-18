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

type Course = {
  params: {
    slug: string;
  };
  data: {
    banner: string;
    subject: string;
    author: string;
    description: string;
  };
};

interface LearnPageProps {
  courses: Course[];
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
                    {courses.map((course) => (
                      <Link
                        href={{
                          pathname: '/learn/courses/[slug]',
                          query: course.params,
                        }}
                        passHref
                        key={course.params.slug}
                      >
                        <CoursesBlock.Course>
                          <CoursesBlock.Image
                            src={course.data.banner}
                            alt={course.data.subject}
                          />
                          <CoursesBlock.Content>
                            <CoursesBlock.Subject>
                              {course.data.subject}
                            </CoursesBlock.Subject>
                            <CoursesBlock.Author name={course.data.author} />
                            <CoursesBlock.Description>
                              {course.data.description}
                            </CoursesBlock.Description>
                          </CoursesBlock.Content>
                        </CoursesBlock.Course>
                      </Link>
                    ))}
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
