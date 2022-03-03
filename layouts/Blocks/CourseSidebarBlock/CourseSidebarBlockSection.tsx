import React from 'react';

import * as Styles from './CourseSidebarBlockSection.styles';

import { Accordion } from 'components/Accordion';

export interface CourseSidebarBlockSectionProps {
  title: string;
  value: string;
  icon: string;
  children: React.ReactNode;
}

export function CourseSidebarBlockSection(
  props: CourseSidebarBlockSectionProps
) {
  const { title, children, icon, value } = props;

  return (
    <Accordion.Item value={value}>
      <Accordion.Header title={title} icon={icon} />
      <Accordion.Content>
        <ol className={Styles.lessons()}>{children}</ol>
      </Accordion.Content>
    </Accordion.Item>
  );
}
