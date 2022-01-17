import * as Styles from './ParticipantsBlockTitle.styles';

import { Heading, HeadingProps } from 'components/Typography';

export type ParticipantsBlockTitleProps = Pick<HeadingProps, 'children'>;

export function ParticipantsBlockTitle(props: ParticipantsBlockTitleProps) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <Heading level={3} style={4}>
        {children}
      </Heading>
    </div>
  );
}
