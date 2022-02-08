import * as Styles from './CourseSidebar.styles';

import { CourseSidebarSections } from './CourseSidebarSections';
import { CourseSidebarSection } from './CourseSidebarSection';
import { CourseSidebarLesson } from './CourseSidebarLesson';
import { CourseSidebarAction } from './CourseSidebarAction';
import { CourseSidebarTitle } from './CourseSidebarTitle';

export interface CourseSidebarProps {
  children: React.ReactNode;
}

export function CourseSidebar(props: CourseSidebarProps) {
  const { children } = props;

  return <nav className={Styles.container()}>{children}</nav>;
}

CourseSidebar.Title = CourseSidebarTitle;
CourseSidebar.Action = CourseSidebarAction;
CourseSidebar.Sections = CourseSidebarSections;
CourseSidebar.Section = CourseSidebarSection;
CourseSidebar.Lesson = CourseSidebarLesson;
