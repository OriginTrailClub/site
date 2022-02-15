import * as Styles from './CourseSidebarBlockSections.styles';

import { Accordion } from 'components/Accordion';

export interface CourseSidebarBlockSectionsProps {
  children: React.ReactNode;
}

export function CourseSidebarBlockSections(props: CourseSidebarBlockSectionsProps) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <Accordion>{children}</Accordion>
    </div>
  );
}
