import type { NextPage } from 'next';
import Head from 'next/head';

import { getCourses } from 'helpers/getCourses';
import { getCourse } from 'helpers/getCourse';
import { ContentLayout } from 'layouts/ContentLayout/ContentLayout';
import { MDXContent } from 'components/MDXContent';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

type Course = {
  content: MDXRemoteSerializeResult;
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
  params: { slug: string };
}) => {
  const course = await getCourse(params);

  return {
    props: {
      course,
    },
  };
};

export async function getStaticPaths() {
  const courses = await getCourses();

  return {
    paths: courses.map((course) => ({ params: course.params })),
    fallback: false,
  };
}

const CoursePage: NextPage<CoursePageProps> = (props) => {
  console.log(props);

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <ContentLayout>
        <ContentLayout.Title>{props.course.data.subject}</ContentLayout.Title>
        <ContentLayout.Content>
          <MDXContent source={props.course.content} />
        </ContentLayout.Content>
        <ContentLayout.Sidebar>Show lessons</ContentLayout.Sidebar>
      </ContentLayout>
    </>
  );
};

export default CoursePage;
