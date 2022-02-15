import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { getCourses } from 'helpers/getCourses';
import { getCourse, CourseSection } from 'helpers/getCourse';
import { ContentLayout } from 'layouts/ContentLayout/ContentLayout';
import { MDXContent } from 'components/MDXContent';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

import { CourseSidebarBlock } from 'layouts/Blocks/CourseSidebarBlock';
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';

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
  params: { course: string };
}

export const getStaticProps = async ({
  params,
}: {
  params: CoursePageProps['params'];
}) => {
  const course = await getCourse(params.course);

  return {
    props: {
      params,
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
          <CourseSidebarBlock>
            <CourseSidebarBlock.Title>Content</CourseSidebarBlock.Title>
            <CourseSidebarBlock.Action label="Start" Icon={ArrowRightLineIcon} />
            <CourseSidebarBlock.Sections>
              {toc.map((section) => (
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
                          course: props.params.course,
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
