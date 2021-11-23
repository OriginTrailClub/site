import * as React from 'react';

import * as Styles from './PageIntroBlockContent.styles';

import { PageIntroBlockDescriptionProps } from './PageIntroBlockDescription';
import { PageIntroBlockTitleProps } from './PageIntroBlockTitle';
import { PageIntroBlockActionsProps } from './PageIntroBlockActions';

type PageIntroBlockContentElements = React.ReactElement<
  | PageIntroBlockDescriptionProps
  | PageIntroBlockTitleProps
  | PageIntroBlockActionsProps
>;

export interface PageIntroBlockContentProps {
  children: PageIntroBlockContentElements | PageIntroBlockContentElements[];
}

export function PageIntroBlockContent(props: PageIntroBlockContentProps) {
  const { children } = props;

  return <div className={Styles.container()}>{children}</div>;
}
