import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';

import { MDXContent } from 'components/MDXContent';
import { Breadcrumbs } from 'components/Breadcrumbs';

import { ContentLayout } from 'layouts/ContentLayout/ContentLayout';
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
  params: { course: string };
}

export const getStaticProps = async ({
  params,
}: {
  params: CoursePageProps['params'];
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
  const { subject, slug } = meta;

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <ContentLayout>
        <ContentLayout.Breadcrumbs>
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
        </ContentLayout.Breadcrumbs>
        <ContentLayout.Title>{subject}</ContentLayout.Title>
        <ContentLayout.Content>
          <MDXContent source={content} />
        </ContentLayout.Content>
        <ContentLayout.Sidebar>
          <CourseSidebarBlock>
            <CourseSidebarBlock.Title>Content</CourseSidebarBlock.Title>
            <CourseSidebarBlock.Action
              label="Start"
              Icon={ArrowRightLineIcon}
            />
            <CourseSidebarBlock.Sections>
              {lessons.map((section) => (
                <CourseSidebarBlock.Section
                  title={section.title}
                  icon="/courses/ot-101/section-title-icon.png"
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
        </ContentLayout.Sidebar>
      </ContentLayout>
    </>
  );
};

export default CoursePage;
