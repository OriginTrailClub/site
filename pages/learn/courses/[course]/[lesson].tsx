import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { getLessons } from 'helpers/getLessons';
import { getCourseLessonMeta } from 'helpers/getCourseLessonMeta';
import { getCourseLessonContent } from 'helpers/getCourseLessonContent';
import { getCourseLessonHeadings } from 'helpers/getCourseLessonHeadings';
import {
  CourseMeta,
  CourseLessonMeta,
  CourseLessonContent,
  CourseLessonHeadings,
} from 'helpers/types';

import { MDXContent } from 'components/MDXContent';

import { ContentLayout } from 'layouts/ContentLayout/ContentLayout';
import { PageContentBlock } from 'layouts/Blocks/PageContentBlock';
import { getCourseMeta } from 'helpers/getCourseMeta';

interface LessonPageProps {
  lesson: {
    meta: CourseLessonMeta;
    content: CourseLessonContent;
    headings: CourseLessonHeadings;
  };
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

  const courseMeta = await getCourseMeta(params.course);

  return {
    props: {
      lesson: {
        meta: lessonMeta,
        content: lessonContent,
        headings: lessonHeadings,
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
  const { lesson, course } = props;

  const { meta: courseMeta } = course;
  const { meta: lessonMeta, content, headings } = lesson;

  const { slug: courseSlug, subject: courseSubject } = courseMeta;
  const { slug: lessonSlug, title: lessonTitle } = lessonMeta;

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <ContentLayout>
        <ContentLayout.Breadcrumbs>
          <Link
            href={{
              pathname: '/learn',
            }}
            passHref
          >
            <ContentLayout.Breadcrumb label="Learn" />
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
            <ContentLayout.Breadcrumb label={courseSubject} />
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
            <ContentLayout.Breadcrumb label={lessonTitle} />
          </Link>
        </ContentLayout.Breadcrumbs>
        <ContentLayout.Title>{lessonTitle}</ContentLayout.Title>
        <ContentLayout.Content>
          <MDXContent source={content} />
        </ContentLayout.Content>
        <ContentLayout.Sidebar>
          <PageContentBlock>
            <PageContentBlock.Title>On this page</PageContentBlock.Title>
            <PageContentBlock.Links>
              {headings.map(({ label, slug }) => (
                <Link href={`#${slug}`} key={slug} passHref replace>
                  <PageContentBlock.Link href={`#${slug}`} label={label} />
                </Link>
              ))}
            </PageContentBlock.Links>
          </PageContentBlock>
        </ContentLayout.Sidebar>
      </ContentLayout>
    </>
  );
};

export default LessonPage;
