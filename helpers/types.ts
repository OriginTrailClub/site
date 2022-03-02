import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Course = {
  slug: string;
  banner: string;
  subject: string;
  author: string;
  description: string;
};

export type Courses = Course[];

export type CourseMeta = Pick<Course, 'slug' | 'subject'>;

export type CourseLesson = {
  title: string;
  slug: string;
};

export type CourseLessonsSection = {
  title: string;
  lessons: CourseLesson[];
};

export type CourseLessons = CourseLessonsSection[];

export type CourseContent = MDXRemoteSerializeResult;

export type CourseLessonMeta = {
    title: string;
    slug: string;
}

export type CourseLessonContent = MDXRemoteSerializeResult;

export type CourseLessonHeading = {
    label: string;
    slug: string;  
}

export type CourseLessonHeadings = CourseLessonHeading[];
