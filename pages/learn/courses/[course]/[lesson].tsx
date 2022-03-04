import * as React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Breadcrumbs } from 'components/Breadcrumbs';
import { MDXContent } from 'components/MDXContent';
import { Pagination } from 'components/Pagination';

import { ContentLayout } from 'layouts/ContentLayout/ContentLayout';
import { PageContentBlock } from 'layouts/Blocks/PageContentBlock';

import { getLessons } from 'helpers/getLessons';
import { getCourseMeta } from 'helpers/getCourseMeta';
import { getCourseLessonMeta } from 'helpers/getCourseLessonMeta';
import { getCourseLessonContent } from 'helpers/getCourseLessonContent';
import { getCourseLessonHeadings } from 'helpers/getCourseLessonHeadings';
import { getCourseLessonPagination } from 'helpers/getCourseLessonPagination';
import { getCourseSectionMeta } from 'helpers/getCourseSectionMeta';
import {
  CourseMeta,
  CourseLessonMeta,
  CourseLessonContent,
  CourseLessonHeadings,
  CourseLessonPagination,
  CourseSectionMeta,
  CourseLessons,
} from 'helpers/types';
import { CourseSidebarBlock } from 'layouts/Blocks/CourseSidebarBlock';
import { getCourseLessons } from 'helpers/getCourseLessons';

interface LessonPageProps {
  lesson: {
    meta: CourseLessonMeta;
    content: CourseLessonContent;
    headings: CourseLessonHeadings;
  };
  pagination: CourseLessonPagination;
  lessons: CourseLessons;
  section: {
    meta: CourseSectionMeta;
  };
  course: {
    meta: CourseMeta;
  };
  params: { course: string; lesson: string };
}

export const getStaticProps = async ({
  params,
}: {
  params: LessonPageProps['params'];
}) => {
  const lessonMeta = await getCourseLessonMeta(params);
  const lessonContent = await getCourseLessonContent(params);
  const lessonHeadings = await getCourseLessonHeadings(params);
  const lessonPagination = await getCourseLessonPagination(params);
  const courseLessons = await getCourseLessons(params.course);
  const sectionMeta = await getCourseSectionMeta(params);

  const courseMeta = await getCourseMeta(params.course);

  return {
    props: {
      params,
      lessons: courseLessons,
      lesson: {
        meta: lessonMeta,
        content: lessonContent,
        headings: lessonHeadings,
      },
      pagination: lessonPagination,
      section: {
        meta: sectionMeta,
      },
      course: {
        meta: courseMeta,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const lessons = await getLessons();

  return {
    paths: lessons.map((lesson) => ({
      params: lesson,
    })),
    fallback: false,
  };
};

const LessonPage: NextPage<LessonPageProps> = (props) => {
  const { lesson, course, section, pagination, lessons, params } = props;

  const { meta: courseMeta } = course;
  const { meta: lessonMeta, content, headings } = lesson;
  const { meta: sectionMeta } = section;

  const { slug: courseSlug, subject: courseSubject } = courseMeta;
  const { slug: lessonSlug, title: lessonTitle } = lessonMeta;
  const { slug: sectionSlug, title: sectionTitle } = sectionMeta;
  const {
    previousLessonSlug,
    nextLessonSlug,
    totalLessons,
    currentLessonIndex,
  } = pagination;
  const { course: currentCourseSlug, lesson: currentLessonSlug } = params;

  const [activeHash, setActiveHash] = React.useState('#');

  const router = useRouter();

  React.useEffect(() => {
    const onHashChangeComplete = () => {
      setActiveHash(window.location.hash);
    };

    const onRouteChangeComplete = () => {
      setActiveHash(window.location.hash);
    };

    router.events.on('hashChangeComplete', onHashChangeComplete);
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('hashChangeComplete', onHashChangeComplete);
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router.events, setActiveHash]);

  React.useEffect(() => {
    setActiveHash(window.location.hash);
  }, [setActiveHash]);

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
                  course: courseSlug,
                },
              }}
              passHref
            >
              <Breadcrumbs.Breadcrumb label={courseSubject} />
            </Link>
            <Link
              href={{
                pathname: '/learn/courses/[course]/[lesson]',
                query: {
                  course: courseSlug,
                  lesson: sectionSlug,
                },
              }}
              passHref
            >
              <Breadcrumbs.Breadcrumb label={sectionTitle} />
            </Link>
            <Link
              href={{
                pathname: '/learn/courses/[course]/[lesson]',
                query: {
                  course: courseSlug,
                  lesson: lessonSlug,
                },
              }}
              passHref
            >
              <Breadcrumbs.Breadcrumb label={lessonTitle} />
            </Link>
          </Breadcrumbs>
        </ContentLayout.Breadcrumbs>
        <ContentLayout.Title>{lessonTitle}</ContentLayout.Title>
        <ContentLayout.Content>
          <MDXContent source={content} />
        </ContentLayout.Content>
        <ContentLayout.Sidebar>
          <CourseSidebarBlock>
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
                          course: courseSlug,
                          lesson: lesson.slug,
                        },
                      }}
                      passHref
                    >
                      <CourseSidebarBlock.Lesson label={lesson.title}>
                        {currentLessonSlug === lesson.slug ? (
                          <>
                            {headings.map((heading) => {
                              const href = `#${heading.slug}`;

                              return (
                                <Link
                                  href={href}
                                  passHref
                                  replace
                                  key={heading.slug}
                                >
                                  <CourseSidebarBlock.Chapter
                                    label={heading.label}
                                  />
                                </Link>
                              );
                            })}
                          </>
                        ) : null}
                      </CourseSidebarBlock.Lesson>
                    </Link>
                  ))}
                </CourseSidebarBlock.Section>
              ))}
            </CourseSidebarBlock.Sections>
          </CourseSidebarBlock>
        </ContentLayout.Sidebar>
        <ContentLayout.Pagination>
          <Pagination>
            {previousLessonSlug ? (
              <Link
                href={{
                  pathname: '/learn/courses/[course]/[lesson]',
                  query: {
                    course: courseSlug,
                    lesson: previousLessonSlug,
                  },
                }}
                passHref
              >
                <Pagination.Previous label="Previous page" as="a" />
              </Link>
            ) : null}
            <Pagination.Counter
              current={currentLessonIndex}
              total={totalLessons}
            />
            {nextLessonSlug ? (
              <Link
                href={{
                  pathname: '/learn/courses/[course]/[lesson]',
                  query: {
                    course: courseSlug,
                    lesson: nextLessonSlug,
                  },
                }}
                passHref
              >
                <Pagination.Next label="Next page" as="a" />
              </Link>
            ) : null}
          </Pagination>
        </ContentLayout.Pagination>
      </ContentLayout>
    </>
  );
};

export default LessonPage;
