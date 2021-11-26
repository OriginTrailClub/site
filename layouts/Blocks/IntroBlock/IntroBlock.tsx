import * as React from 'react';

import * as Styles from './IntroBlock.styles';

import { IntroBlockTitle, IntroBlockTitleProps } from './IntroBlockTitle';
import {
  IntroBlockDescription,
  IntroBlockDescriptionProps,
} from './IntroBlockDescription';
import {
  IntroBlockSubtitle,
  IntroBlockSubtitleProps,
} from './IntroBlockSubtitle';
import { IntroBlockAction, IntroBlockActionProps } from './IntroBlockAction';

type IntroBlockElements = React.ReactElement<
  IntroBlockTitleProps | IntroBlockDescriptionProps
>;

export interface IntroBlockProps {
  children: IntroBlockElements | IntroBlockElements[];

  align?: 'left' | 'center';
}

interface IIntroBlockComposition {
  Title: React.FC<IntroBlockTitleProps>;
  Description: React.FC<IntroBlockDescriptionProps>;
  Subtitle: React.FC<IntroBlockSubtitleProps>;
  Action: React.FC<IntroBlockActionProps>;
}

export const IntroBlock: React.FC<IntroBlockProps> &
  IIntroBlockComposition = function IntroBlock(props) {
  const { children, align = 'center' } = props;

  return (
    <div
      className={Styles.container({
        align,
      })}
    >
      <div className={Styles.inner()}>
        <div className={Styles.contents()}>{children}</div>
      </div>
    </div>
  );
};

IntroBlock.Title = IntroBlockTitle;
IntroBlock.Description = IntroBlockDescription;
IntroBlock.Subtitle = IntroBlockSubtitle;
IntroBlock.Action = IntroBlockAction;
