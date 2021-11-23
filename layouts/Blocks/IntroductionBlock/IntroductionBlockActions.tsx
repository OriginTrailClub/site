import * as React from 'react';

import { IntroductionBlockActionProps } from './IntroductionBlockAction';
import * as Styles from './IntroductionBlockActions.styles';

type IntroductionBlockActionsElements = React.ReactElement<IntroductionBlockActionProps>;

export interface IntroductionBlockActionsProps {
  children:
    | IntroductionBlockActionsElements
    | IntroductionBlockActionsElements[];
}

export function IntroductionBlockActions(props: IntroductionBlockActionsProps) {
  const { children } = props;
  return <div className={Styles.container()}>{children}</div>;
}
