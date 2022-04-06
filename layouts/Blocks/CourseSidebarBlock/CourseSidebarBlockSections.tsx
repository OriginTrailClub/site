import * as Styles from './CourseSidebarBlockSections.styles';

import { Accordion, AccordionProps } from 'components/Accordion';

export type CourseSidebarBlockSectionsProps = AccordionProps;

export function CourseSidebarBlockSections(
  props: CourseSidebarBlockSectionsProps
) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <Accordion {...props}>{children}</Accordion>
    </div>
  );
}
