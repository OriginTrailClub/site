import * as Styles from './CourseSidebarBlock.styles';

import { CourseSidebarBlockSections } from './CourseSidebarBlockSections';
import { CourseSidebarBlockSection } from './CourseSidebarBlockSection';
import { CourseSidebarBlockLesson } from './CourseSidebarBlockLesson';
import { CourseSidebarBlockAction } from './CourseSidebarBlockAction';
import { CourseSidebarBlockTitle } from './CourseSidebarBlockTitle';

export interface CourseSidebarBlockProps {
  children: React.ReactNode;
}

export function CourseSidebarBlock(props: CourseSidebarBlockProps) {
  const { children } = props;

  return <nav className={Styles.container()}>{children}</nav>;
}

CourseSidebarBlock.Title = CourseSidebarBlockTitle;
CourseSidebarBlock.Action = CourseSidebarBlockAction;
CourseSidebarBlock.Sections = CourseSidebarBlockSections;
CourseSidebarBlock.Section = CourseSidebarBlockSection;
CourseSidebarBlock.Lesson = CourseSidebarBlockLesson;
