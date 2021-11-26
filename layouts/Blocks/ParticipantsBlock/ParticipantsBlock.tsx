import * as React from 'react';
import type * as Stitches from '@stitches/react';

import * as Styles from './ParticipantsBlock.styles';

import {
  ParticipantsBlockParticipant,
  ParticipantsBlockParticipantProps,
} from './ParticipantsBlockParticipant';
import {
  ParticipantsBlockTitle,
  ParticipantsBlockTitleProps,
} from './ParticipantsBlockTitle';
import {
  ParticipantsBlockDescription,
  ParticipantsBlockDescriptionProps,
} from './ParticipantsBlockDescription';
import {
  ParticipantsBlockImage,
  ParticipantsBlockImageProps,
} from './ParticipantsBlockImage';

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

interface IgetGridVariablesOptions {
  /**
   * Total item of elements in the grid
   */
  count: number;
  /**
   * Max count of columns before it should overflow verticaly
   */
  maxColumns: number;
}

/* A helper method which determines the rows and columns for a grid layout */
const getGridVariables = (options: IgetGridVariablesOptions): Stitches.CSS => {
  const { count, maxColumns } = options;

  let cssVars = {
    $$columnCount: count,
    $$maxColumnCount: maxColumns,
  } as Stitches.CSS;

  if (maxColumns >= count) {
    // If all elements fit horizontaly we shouldn't squish in any overlapping element
    cssVars['$$minParticipantSize'] = '$$maxParticipantSize';
  }

  return cssVars;
};
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
              ...getGridVariables({
                count: count,
                maxColumns: 1,
              }),
              '@bp2': getGridVariables({
                count: count,
                maxColumns: 2,
              }),
              '@bp3': getGridVariables({
                count: count,
                maxColumns: 3,
              }),
              '@bp4': getGridVariables({
                count: count,
                maxColumns: 4,
              }),
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
