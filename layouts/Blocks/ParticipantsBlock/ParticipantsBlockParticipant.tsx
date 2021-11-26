import * as Styles from './ParticipantsBlockParticipant.styles';

import { ParticipantsBlockTitleProps } from './ParticipantsBlockTitle';
import { ParticipantsBlockDescriptionProps } from './ParticipantsBlockDescription';
import { ParticipantsBlockImageProps } from './ParticipantsBlockImage';

type ParticipantsBlockCaseElements = React.ReactElement<
  ParticipantsBlockTitleProps | ParticipantsBlockDescriptionProps | ParticipantsBlockImageProps
>;

export interface ParticipantsBlockParticipantProps {
  children: ParticipantsBlockCaseElements | ParticipantsBlockCaseElements[];
}

export function ParticipantsBlockParticipant(props: ParticipantsBlockParticipantProps) {
  const { children } = props;

  return (
    <article className={Styles.container()}>
      <div className={Styles.contents()}>{children}</div>
    </article>
  );
}
