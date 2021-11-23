import * as React from 'react';

import * as Styles from './IntroductionBlock.styles';

import {
  IntroductionBlockTitle,
  IntroductionBlockTitleProps,
} from './IntroductionBlockTitle';
import {
  IntroductionBlockDescription,
  IntroductionBlockDescriptionProps,
} from './IntroductionBlockDescription';
import {
  IntroductionBlockContent,
  IntroductionBlockContentProps,
} from './IntroductionBlockContent';
import {
  IntroductionBlockActions,
  IntroductionBlockActionsProps,
} from './IntroductionBlockActions';
import {
  IntroductionBlockAction,
  IntroductionBlockActionProps,
} from './IntroductionBlockAction';
import {
  IntroductionBlockImage,
  IntroductionBlockImageProps,
} from './IntroductionBlockImage';

type IntroductionBlockElements = React.ReactElement<
  IntroductionBlockContentProps | IntroductionBlockImageProps
>;

export interface IntroductionBlockProps {
  children: IntroductionBlockElements | IntroductionBlockElements[];
}

interface IOverviewLayoutComposition {
  Content: React.FC<IntroductionBlockContentProps>;
  Title: React.FC<IntroductionBlockTitleProps>;
  Description: React.FC<IntroductionBlockDescriptionProps>;
  Actions: React.FC<IntroductionBlockActionsProps>;
  Action: React.FC<IntroductionBlockActionProps>;
  Image: React.FC<IntroductionBlockImageProps>;
}

export const IntroductionBlock: React.FC<IntroductionBlockProps> &
  IOverviewLayoutComposition = function IntroductionBlock(props) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <div className={Styles.contents()}>{children}</div>
    </div>
  );
};

IntroductionBlock.Title = IntroductionBlockTitle;
IntroductionBlock.Description = IntroductionBlockDescription;
IntroductionBlock.Content = IntroductionBlockContent;
IntroductionBlock.Actions = IntroductionBlockActions;
IntroductionBlock.Action = IntroductionBlockAction;
IntroductionBlock.Image = IntroductionBlockImage;
