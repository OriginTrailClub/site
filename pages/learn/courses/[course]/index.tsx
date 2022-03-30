import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';

import { MDXContent } from 'components/MDXContent';
import { Breadcrumbs } from 'components/Breadcrumbs';

import { OverviewLayout } from 'layouts/OverviewLayout';
import { CourseSidebarBlock } from 'layouts/Blocks/CourseSidebarBlock';

import { getCourses } from 'helpers/getCourses';
import { getCourseMeta } from 'helpers/getCourseMeta';
import { getCourseContent } from 'helpers/getCourseContent';
import { getCourseLessons } from 'helpers/getCourseLessons';
import { CourseLessons, CourseContent, CourseMeta } from 'helpers/types';

type Course = {
  content: CourseContent;
  lessons: CourseLessons;
  meta: CourseMeta;
};

interface CoursePageProps {
  course: Course;
}

export const getStaticProps = async ({
  params,
}: {
  params: { course: string };
}) => {
  const courseMeta = await getCourseMeta(params.course);
  const courseLessons = await getCourseLessons(params.course);
  const courseContent = await getCourseContent(params.course);

  return {
    props: {
      course: {
        meta: courseMeta,
        lessons: courseLessons,
        content: courseContent,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const courses = await getCourses();

  return {
    paths: courses.map(({ slug }) => ({
      params: {
        course: slug,
      },
    })),
    fallback: false,
  };
};

const CoursePage: NextPage<CoursePageProps> = (props) => {
  const { course } = props;
  const { meta, lessons, content } = course;
  const { subject, slug, description } = meta;

  const firstLesson = lessons?.[0]?.lessons?.[0];

  return (
    <>
      <Head>
        <title>{subject} - Origintrail Community Hub</title>
        <meta
          name="description"
          content={description}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@OriginTrailClub" />
        <meta name="twitter:title" content={`${subject} - Origintrail Community Hub`} />
        <meta
          name="twitter:description"
          content={description}
        />
        <meta
          name="twitter:image"
          content="https://origintrail.club/learn/socials/placeholder.jpg"
        />
        <meta name="twitter:image:alt" content={`${subject} - Origintrail Community Hub`} />

        <meta property="og:title" content={`${subject} - Origintrail Community Hub`} />
        <meta
          property="og:description"
          content={description}
        />
        <meta
          property="og:image"
          content="https://origintrail.club/learn/socials/placeholder.jpg"
        />
        <meta property="og:site_name" content="Origintrail Community Hub" />

        <meta name="robots" content="noindex" />
      </Head>
      <OverviewLayout>
        <OverviewLayout.Breadcrumbs>
          <Breadcrumbs>
            <Link
              href={{
                pathname: '/learn',
              }}
              passHref
            >
              <Breadcrumbs.Breadcrumb label="Learn" />
            </Link>
            <Link
              href={{
                pathname: '/learn/courses/[course]',
                query: {
                  course: slug,
                },
              }}
              passHref
            >
              <Breadcrumbs.Breadcrumb label={subject} />
            </Link>
          </Breadcrumbs>
        </OverviewLayout.Breadcrumbs>
        <OverviewLayout.Title>{subject}</OverviewLayout.Title>
        <OverviewLayout.Content>
          <MDXContent source={content} />
        </OverviewLayout.Content>
        <OverviewLayout.Sidebar>
          <CourseSidebarBlock>
            <CourseSidebarBlock.Title>Content</CourseSidebarBlock.Title>
            {firstLesson ? (
              <Link
                href={{
                  pathname: '/learn/courses/[course]/[lesson]',
                  query: {
                    course: slug,
                    lesson: firstLesson.slug,
                  },
                }}
                passHref
              >
                <CourseSidebarBlock.Action
                  label="Start"
                  Icon={ArrowRightLineIcon}
                />
              </Link>
            ) : null}
            <CourseSidebarBlock.Sections>
              {lessons.map((section) => (
                <CourseSidebarBlock.Section
                  title={section.title}
                  icon="/courses/ot-101/section-title-icon.png"
                  value={section.title}
                  key={section.title}
                >
                  {section.lessons.map((lesson) => (
                    <Link
                      key={lesson.slug}
                      href={{
                        pathname: '/learn/courses/[course]/[lesson]',
                        query: {
                          course: slug,
                          lesson: lesson.slug,
                        },
                      }}
                      passHref
                    >
                      <CourseSidebarBlock.Lesson label={lesson.title} />
                    </Link>
                  ))}
                </CourseSidebarBlock.Section>
              ))}
            </CourseSidebarBlock.Sections>
          </CourseSidebarBlock>
        </OverviewLayout.Sidebar>
      </OverviewLayout>
    </>
  );
};

export default CoursePage;
