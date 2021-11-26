import * as React from 'react';

import * as Styles from './ParticipantsBlock.styles';

import { ParticipantsBlockParticipant, ParticipantsBlockParticipantProps } from './ParticipantsBlockParticipant';
import { ParticipantsBlockTitle, ParticipantsBlockTitleProps } from './ParticipantsBlockTitle';
import {
  ParticipantsBlockDescription,
  ParticipantsBlockDescriptionProps,
} from './ParticipantsBlockDescription';
import { ParticipantsBlockImage, ParticipantsBlockImageProps } from './ParticipantsBlockImage';

type ParticipantsBlockElements = React.ReactElement<ParticipantsBlockParticipantProps>;

export interface ParticipantsBlockProps {
  children: ParticipantsBlockElements | ParticipantsBlockElements[];
}

interface IOverviewLayoutComposition {
  Participant: React.FC<ParticipantsBlockParticipantProps>;
  Image: React.FC<ParticipantsBlockImageProps>;
  Title: React.FC<ParticipantsBlockTitleProps>;
  Description: React.FC<ParticipantsBlockDescriptionProps>;
}

export const ParticipantsBlock: React.FC<ParticipantsBlockProps> &
  IOverviewLayoutComposition = function ParticipantsBlock(props) {
  const { children } = props;

  const count = React.Children.count(children);

  return (
    <div className={Styles.container()}>
      <div className={Styles.contents()}>
        <div
          className={Styles.participants({
            css: {
              $$columnCount: count,
            },
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

ParticipantsBlock.Participant = ParticipantsBlockParticipant;
ParticipantsBlock.Title = ParticipantsBlockTitle;
ParticipantsBlock.Description = ParticipantsBlockDescription;
ParticipantsBlock.Image = ParticipantsBlockImage;
