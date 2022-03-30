import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';

import { getCourses } from 'helpers/getCourses';
import { Courses } from 'helpers/types';

import { PageIntroBlock } from 'layouts/Blocks/PageIntroBlock';
import { CoursesBlock } from 'layouts/Blocks/CoursesBlock';

import { Grid } from 'components/Grid';

interface LearnPageProps {
  courses: Courses;
}

export const getStaticProps = async ({}) => {
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
        <title>Learn - Origintrail Community Hub</title>


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
                        course: course.slug,
                      },
                    }}
                    passHref
                    key={course.slug}
                  >
                    <CoursesBlock.Course>
                      <CoursesBlock.Image
                        src={course.banner}
                        alt={course.subject}
                      />
                      <CoursesBlock.Content>
                        <CoursesBlock.Subject>
                          {course.subject}
                        </CoursesBlock.Subject>
                        <CoursesBlock.Author name={course.author} />
                        <CoursesBlock.Description>
                          {course.description}
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
