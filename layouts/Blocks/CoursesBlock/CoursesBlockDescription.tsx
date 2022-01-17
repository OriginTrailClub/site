import * as Styles from './CoursesBlockDescription.styles';

import { Paragraph, ParagraphProps } from 'components/Typography';

export type CoursesBlockDescriptionProps = Pick<ParagraphProps, 'children'>;

export function CoursesBlockDescription(props: CoursesBlockDescriptionProps) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <Paragraph>{children}</Paragraph>
    </div>
  );
}
