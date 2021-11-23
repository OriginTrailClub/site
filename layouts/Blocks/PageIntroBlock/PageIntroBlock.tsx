import * as React from 'react';

import * as Styles from './PageIntroBlock.styles';

import {
  PageIntroBlockTitle,
  PageIntroBlockTitleProps,
} from './PageIntroBlockTitle';
import {
  PageIntroBlockDescription,
  PageIntroBlockDescriptionProps,
} from './PageIntroBlockDescription';
import {
  PageIntroBlockContent,
  PageIntroBlockContentProps,
} from './PageIntroBlockContent';
import {
  PageIntroBlockActions,
  PageIntroBlockActionsProps,
} from './PageIntroBlockActions';
import {
  PageIntroBlockAction,
  PageIntroBlockActionProps,
} from './PageIntroBlockAction';
import {
  PageIntroBlockImage,
  PageIntroBlockImageProps,
} from './PageIntroBlockImage';

type PageIntroBlockElements = React.ReactElement<
  PageIntroBlockContentProps | PageIntroBlockImageProps
>;

export interface PageIntroBlockProps {
  children: PageIntroBlockElements | PageIntroBlockElements[];
}

interface IOverviewLayoutComposition {
  Content: React.FC<PageIntroBlockContentProps>;
  Title: React.FC<PageIntroBlockTitleProps>;
  Description: React.FC<PageIntroBlockDescriptionProps>;
  Actions: React.FC<PageIntroBlockActionsProps>;
  Action: React.FC<PageIntroBlockActionProps>;
  Image: React.FC<PageIntroBlockImageProps>;
}

export const PageIntroBlock: React.FC<PageIntroBlockProps> &
  IOverviewLayoutComposition = function PageIntroBlock(props) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <div className={Styles.contents()}>{children}</div>
    </div>
  );
};

PageIntroBlock.Title = PageIntroBlockTitle;
PageIntroBlock.Description = PageIntroBlockDescription;
PageIntroBlock.Content = PageIntroBlockContent;
PageIntroBlock.Actions = PageIntroBlockActions;
PageIntroBlock.Action = PageIntroBlockAction;
PageIntroBlock.Image = PageIntroBlockImage;
