import * as React from 'react';

import * as Styles from './IntroductionBlockContent.styles';

import { IntroductionBlockDescriptionProps } from './IntroductionBlockDescription';
import { IntroductionBlockTitleProps } from './IntroductionBlockTitle';
import { IntroductionBlockActionsProps } from './IntroductionBlockActions';

type IntroductionBlockContentElements = React.ReactElement<
  | IntroductionBlockDescriptionProps
  | IntroductionBlockTitleProps
  | IntroductionBlockActionsProps
>;

export interface IntroductionBlockContentProps {
  children:
    | IntroductionBlockContentElements
    | IntroductionBlockContentElements[];
}

export function IntroductionBlockContent(props: IntroductionBlockContentProps) {
  const { children } = props;
  return <div className={Styles.container()}>{children}</div>;
}
