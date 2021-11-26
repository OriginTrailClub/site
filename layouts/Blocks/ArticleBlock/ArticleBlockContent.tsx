import * as React from 'react';

import * as Styles from './ArticleBlockContent.styles';

import { ArticleBlockTitleProps } from './ArticleBlockTitle';
import {
  ArticleBlockSubtitleProps,
} from './ArticleBlockSubtitle';
import {
  ArticleBlockDescriptionProps,
} from './ArticleBlockDescription';

import {
  ArticleBlockActionProps,
} from './ArticleBlockAction';

type ArticleBlockElements = React.ReactElement<
  | ArticleBlockSubtitleProps
  | ArticleBlockTitleProps
  | ArticleBlockDescriptionProps
  | ArticleBlockActionProps
>;

export interface ArticleBlockContentProps {
  children: ArticleBlockElements | ArticleBlockElements[];
}

export const ArticleBlockContent = function ArticleBlockContent(props: ArticleBlockContentProps) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      {children}
    </div>
  );
};