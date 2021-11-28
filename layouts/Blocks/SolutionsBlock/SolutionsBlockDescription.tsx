import * as Styles from './SolutionsBlockDescription.styles';

import { Paragraph, ParagraphProps } from 'components/Typography';

export type SolutionsBlockDescriptionProps = Pick<ParagraphProps, 'children'>;

export function SolutionsBlockDescription(
  props: SolutionsBlockDescriptionProps
) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <Paragraph>{children}</Paragraph>
    </div>
  );
}
