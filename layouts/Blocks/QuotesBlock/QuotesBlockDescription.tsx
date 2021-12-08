import * as Styles from './QuotesBlockDescription.styles';

import { Paragraph, ParagraphProps } from 'components/Typography';

export type QuotesBlockDescriptionProps = Pick<ParagraphProps, 'children'>;

export function QuotesBlockDescription(props: QuotesBlockDescriptionProps) {
  const { children } = props;

  return (
    <blockquote className={Styles.container()}>
      <Paragraph variant="intro">{children}</Paragraph>
    </blockquote>
  );
}
