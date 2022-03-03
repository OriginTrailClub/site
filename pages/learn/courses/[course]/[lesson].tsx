import * as React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'

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
import {
  CourseMeta,
  CourseLessonMeta,
  CourseLessonContent,
  CourseLessonHeadings,
  CourseLessonPagination,
} from 'helpers/types';

interface LessonPageProps {
  lesson: {
    meta: CourseLessonMeta;
    content: CourseLessonContent;
    headings: CourseLessonHeadings;
  };
  pagination: CourseLessonPagination;
  course: {
    meta: CourseMeta;
  };
}

export const getStaticProps = async ({
  params,
}: {
  params: { course: string; lesson: string };
}) => {
  const lessonMeta = await getCourseLessonMeta(params);
  const lessonContent = await getCourseLessonContent(params);
  const lessonHeadings = await getCourseLessonHeadings(params);
  const lessonPagination = await getCourseLessonPagination(params);

  const courseMeta = await getCourseMeta(params.course);

  return {
    props: {
      lesson: {
        meta: lessonMeta,
        content: lessonContent,
        headings: lessonHeadings,
      },
      pagination: lessonPagination,
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
  const { lesson, course, pagination } = props;

  const { meta: courseMeta } = course;
  const { meta: lessonMeta, content, headings } = lesson;

  const { slug: courseSlug, subject: courseSubject } = courseMeta;
  const { slug: lessonSlug, title: lessonTitle } = lessonMeta;
  const {
    previousLessonSlug,
    nextLessonSlug,
    totalLessons,
    currentLessonIndex,
  } = pagination;

  const [activeHash, setActiveHash] = React.useState('#');

  const router = useRouter();

  React.useEffect(() => {
    const onHashChangeComplete = () => {
      setActiveHash(window.location.hash);
    };

    router.events.on('hashChangeComplete', onHashChangeComplete);

    return () => {
      router.events.off("hashChangeComplete", onHashChangeComplete);
    };
  }, [router.events, setActiveHash])

  React.useEffect(() => {
    setActiveHash(window.location.hash);
  }, [setActiveHash])

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
          <PageContentBlock>
            <PageContentBlock.Title>On this page</PageContentBlock.Title>
            <PageContentBlock.Links>
              {headings.map(({ label, slug }) => {
                const href = `#${slug}`;

                return (
                  <Link href={href} key={slug} passHref replace>
                    <PageContentBlock.Link href={href} isActive={href === activeHash} label={label} />
                  </Link>
                )
              })}
            </PageContentBlock.Links>
          </PageContentBlock>
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
