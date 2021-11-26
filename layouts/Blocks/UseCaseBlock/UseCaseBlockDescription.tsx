import * as Styles from './UseCaseBlockDescription.styles';

import { Paragraph, ParagraphProps } from 'components/Typography';

export type UseCaseBlockDescriptionProps = Pick<ParagraphProps, 'children'>;

export function UseCaseBlockDescription(props: UseCaseBlockDescriptionProps) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <Paragraph>{children}</Paragraph>
    </div>
  );
}
