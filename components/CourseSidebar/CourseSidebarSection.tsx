import React from 'react';

import * as Styles from './CourseSidebarSection.styles';

import { Accordion } from 'components/Accordion';

export interface CourseSidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

export function CourseSidebarSection(props: CourseSidebarSectionProps) {
  const { title, children, icon } = props;

  return (
    <Accordion.Item value="">
      <Accordion.Header title={title} icon={icon} />
      <Accordion.Content>
        <ol className={Styles.lessons()}>{children}</ol>
      </Accordion.Content>
    </Accordion.Item>
  );
}
