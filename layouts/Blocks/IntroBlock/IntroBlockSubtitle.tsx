import { Subtitle, SubtitleProps } from 'components/Typography';

import * as Styles from './IntroBlockSubtitle.styles';

export type IntroBlockSubtitleProps = Pick<SubtitleProps, 'children'>;

export function IntroBlockSubtitle(props: IntroBlockSubtitleProps) {
  return (
    <div className={Styles.container()}>
      <Subtitle {...props} />
    </div>
  );
}
