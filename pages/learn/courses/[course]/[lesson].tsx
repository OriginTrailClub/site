import type { NextPage } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from 'next/head';

import { getLessons } from 'helpers/getLessons';
import { getLesson } from 'helpers/getLesson';

import { MDXContent } from 'components/MDXContent';

import { ContentLayout } from 'layouts/ContentLayout/ContentLayout';
import { PageContentBlock } from 'layouts/Blocks/PageContentBlock';

type LessonHeading = {
  label: string;
  slug: string;
};

type Lesson = {
  content: MDXRemoteSerializeResult;
  data: {
    title: string;
  };
  headings: LessonHeading[];
};

interface LessonPageProps {
  lesson: Lesson;
  params: {
    course: string;
    lesson: string;
  };
}

export const getStaticProps = async ({
  params,
}: {
  params: LessonPageProps['params'];
}) => {
  const lesson = await getLesson({
    course: params.course,
    lesson: params.lesson,
  });

  return {
    props: {
      lesson,
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
  const { lesson } = props;
  const { data, content, headings } = lesson;
  const { title } = data;

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <ContentLayout>
        <ContentLayout.Title>{title}</ContentLayout.Title>
        <ContentLayout.Content>
          <MDXContent source={content} />
        </ContentLayout.Content>
        <ContentLayout.Sidebar>
          <PageContentBlock>
            <PageContentBlock.Title>On this page</PageContentBlock.Title>
            <PageContentBlock.Links>
              {headings.map(({ label, slug }) => (
                <PageContentBlock.Link
                  key={slug}
                  label={label}
                  href={`#${slug}`}
                />
              ))}
            </PageContentBlock.Links>
          </PageContentBlock>
        </ContentLayout.Sidebar>
      </ContentLayout>
    </>
  );
};

export default LessonPage;
