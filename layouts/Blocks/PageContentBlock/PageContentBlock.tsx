import * as Styles from './PageContentBlock.styles';

import { PageContentBlockTitle } from './PageContentBlockTitle';
import { PageContentBlockLinks } from './PageContentBlockLinks';
import { PageContentBlockLink } from './PageContentBlockLink';

export type PageContentBlockProps = {
  children: React.ReactNode;
};

export function PageContentBlock(props: PageContentBlockProps) {
  const { children } = props;

  return <nav className={Styles.container()}>{children}</nav>;
}

PageContentBlock.Link = PageContentBlockLink;
PageContentBlock.Links = PageContentBlockLinks;
PageContentBlock.Title = PageContentBlockTitle;
