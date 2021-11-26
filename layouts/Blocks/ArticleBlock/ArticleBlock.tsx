import * as React from 'react';

import * as Styles from './ArticleBlock.styles';

import { ArticleBlockTitle, ArticleBlockTitleProps } from './ArticleBlockTitle';
import {
  ArticleBlockSubtitle,
  ArticleBlockSubtitleProps,
} from './ArticleBlockSubtitle';
import {
  ArticleBlockDescription,
  ArticleBlockDescriptionProps,
} from './ArticleBlockDescription';

import {
  ArticleBlockAction,
  ArticleBlockActionProps,
} from './ArticleBlockAction';
import { ArticleBlockImage, ArticleBlockImageProps } from './ArticleBlockImage';
import { ArticleBlockContent, ArticleBlockContentProps } from './ArticleBlockContent';

type ArticleBlockElements = React.ReactElement<
  | ArticleBlockContentProps
  | ArticleBlockImageProps
>;

export interface ArticleBlockProps {
  children: ArticleBlockElements | ArticleBlockElements[];
}

interface IOverviewLayoutComposition {
  Title: React.FC<ArticleBlockTitleProps>;
  Subtitle: React.FC<ArticleBlockSubtitleProps>;
  Description: React.FC<ArticleBlockDescriptionProps>;
  Action: React.FC<ArticleBlockActionProps>;
  Image: React.FC<ArticleBlockImageProps>;
  Content: React.FC<ArticleBlockContentProps>;
}

export const ArticleBlock: React.FC<ArticleBlockProps> &
  IOverviewLayoutComposition = function ArticleBlock(props) {
  const { children } = props;

  return (
    <article className={Styles.container()}>
      <div className={Styles.contents()}>{children}</div>
    </article>
  );
};

ArticleBlock.Subtitle = ArticleBlockSubtitle;
ArticleBlock.Title = ArticleBlockTitle;
ArticleBlock.Description = ArticleBlockDescription;
ArticleBlock.Action = ArticleBlockAction;
ArticleBlock.Image = ArticleBlockImage;
ArticleBlock.Content = ArticleBlockContent;
