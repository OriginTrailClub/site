import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';

import { getCourses } from 'helpers/getCourses';

import { PageIntroBlock } from 'layouts/Blocks/PageIntroBlock';
import { CoursesBlock } from 'layouts/Blocks/CoursesBlock';

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
      <Grid>
        <Grid.Item>
          <PageIntroBlock>
            <PageIntroBlock.Content>
              <PageIntroBlock.Title>OriginTrail Academy</PageIntroBlock.Title>
              <PageIntroBlock.Description>
                Want to learn more about OriginTrail, but don’t know where to
                start? These structured courses will help you kickstart your
                blockchain journey.
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
                      pathname: '/learn/courses/[course]',
                      query: {
                        course: course.params.slug,
                      },
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
    </>
  );
};

export default LearnPage;
