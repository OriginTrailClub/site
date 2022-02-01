import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { getCourses } from 'helpers/getCourses';
import { getCourse, CourseSection } from 'helpers/getCourse';
import { ContentLayout } from 'layouts/ContentLayout/ContentLayout';
import { MDXContent } from 'components/MDXContent';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

type Course = {
  content: MDXRemoteSerializeResult;
  toc: CourseSection[];
  data: {
    banner: string;
    subject: string;
    author: string;
    description: string;
  };
};

interface CoursePageProps {
  course: Course;
}

export const getStaticProps = async ({
  params,
}: {
  params: { course: string };
}) => {
  const course = await getCourse(params.course);

  return {
    props: {
      course,
    },
  };
};

export const getStaticPaths = async () => {
  const courses = await getCourses();

  return {
    paths: courses.map(({ params: { slug } }) => ({
      params: {
        course: slug,
      },
    })),
    fallback: false,
  };
};

const CoursePage: NextPage<CoursePageProps> = (props) => {
  const { course } = props;
  const { data, toc, content } = course;
  const { subject } = data;

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <ContentLayout>
        <ContentLayout.Title>{subject}</ContentLayout.Title>
        <ContentLayout.Content>
          <MDXContent source={content} />
        </ContentLayout.Content>
        <ContentLayout.Sidebar>
          <ul>
            {toc.map((section) => (
              <li key={section.title}>
                <strong>{section.title}</strong>
                <ul>
                  {section.lessons.map((lesson) => (
                    <li key={lesson.slug}>{lesson.title}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </ContentLayout.Sidebar>
      </ContentLayout>
    </>
  );
};

export default CoursePage;
