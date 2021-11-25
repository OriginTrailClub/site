import { Paragraph, ParagraphProps } from 'components/Typography';

import * as Styles from './ArticleBlockDescription.styles';

export type ArticleBlockDescriptionProps = Pick<ParagraphProps, 'children'>;

export function ArticleBlockDescription(props: ArticleBlockDescriptionProps) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <Paragraph variant="default">{children}</Paragraph>
    </div>
  );
}
