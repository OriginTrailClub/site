import { Subtitle, SubtitleProps } from 'components/Typography';

import * as Styles from './ArticleBlockSubtitle.styles';

export type ArticleBlockSubtitleProps = Pick<SubtitleProps, 'children'>;

export function ArticleBlockSubtitle(props: SubtitleProps) {
  const { children } = props;
  return (
    <div className={Styles.container()}>
      <Subtitle {...props} />
    </div>
  );
}
