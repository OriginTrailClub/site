import * as Styles from './CourseSidebarSections.styles';

import { Accordion } from 'components/Accordion';

export interface CourseSidebarSectionsProps {
  children: React.ReactNode;
}

export function CourseSidebarSections(props: CourseSidebarSectionsProps) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <Accordion>{children}</Accordion>
    </div>
  );
}
