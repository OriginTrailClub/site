import * as Styles from './CoursesBlock.styles';

import { CoursesBlockTitle, CoursesBlockTitleProps } from './CoursesBlockTitle';
import {
  CoursesBlockCourses,
  CoursesBlockCoursesProps,
} from './CoursesBlockCourses';
import {
  CoursesBlockCourse,
  CoursesBlockCourseProps,
} from './CoursesBlockCourse';
import {
  CoursesBlockSubject,
  CoursesBlockSubjectProps,
} from './CoursesBlockSubject';
import {
  CoursesBlockAuthor,
  CoursesBlockAuthorProps,
} from './CoursesBlockAuthor';
import { CoursesBlockImage, CoursesBlockImageProps } from './CoursesBlockImage';
import {
  CoursesBlockContent,
  CoursesBlockContentProps,
} from './CoursesBlockContent';
import {
  CoursesBlockDescription,
  CoursesBlockDescriptionProps,
} from './CoursesBlockDescription';

interface ICoursesBlockComposition {
  Title: React.FC<CoursesBlockTitleProps>;
  Courses: React.FC<CoursesBlockCoursesProps>;
  Course: React.FC<CoursesBlockCourseProps>;
  Image: React.FC<CoursesBlockImageProps>;
  Content: React.FC<CoursesBlockContentProps>;
  Subject: React.FC<CoursesBlockSubjectProps>;
  Author: React.FC<CoursesBlockAuthorProps>;
  Description: React.FC<CoursesBlockDescriptionProps>;
}

type CoursesBlockElements = React.ReactElement<
  CoursesBlockTitleProps | CoursesBlockCoursesProps
>;

interface CoursesBlockProps {
  children: CoursesBlockElements[];
}

export const CoursesBlock: React.FC<CoursesBlockProps> &
  ICoursesBlockComposition = function CoursesBlock(props) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <div className={Styles.contents()}>{children}</div>
    </div>
  );
};

CoursesBlock.Title = CoursesBlockTitle;
CoursesBlock.Courses = CoursesBlockCourses;
CoursesBlock.Course = CoursesBlockCourse;
CoursesBlock.Image = CoursesBlockImage;
CoursesBlock.Content = CoursesBlockContent;
CoursesBlock.Subject = CoursesBlockSubject;
CoursesBlock.Author = CoursesBlockAuthor;
CoursesBlock.Description = CoursesBlockDescription;
