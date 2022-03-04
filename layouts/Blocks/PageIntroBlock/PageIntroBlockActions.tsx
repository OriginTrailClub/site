import * as React from 'react';

import { PageIntroBlockActionProps } from './PageIntroBlockAction';
import * as Styles from './PageIntroBlockActions.styles';

type PageIntroBlockActionsElements =
  React.ReactElement<PageIntroBlockActionProps>;

export interface PageIntroBlockActionsProps {
  children: PageIntroBlockActionsElements | PageIntroBlockActionsElements[];
}

export function PageIntroBlockActions(props: PageIntroBlockActionsProps) {
  const { children } = props;
  return <div className={Styles.container()}>{children}</div>;
}
