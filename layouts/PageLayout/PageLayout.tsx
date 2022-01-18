import { styled } from 'stitches.config';

import { PageLayoutHeader, PageLayoutHeaderProps } from './PageLayoutHeader';
import { PageLayoutContent, PageLayoutContentProps } from './PageLayoutContent';
import { PageLayoutFooter, PageLayoutFooterProps } from './PageLayoutFooter';

type PageLayoutElements = React.ReactElement<
  PageLayoutHeaderProps | PageLayoutContentProps | PageLayoutFooterProps
>;

export interface PageLayoutProps {
  /**
   * React elements which are either PageLayout.Header, PageLayout.Content or PageLayout.Footer
   */
  children: PageLayoutElements | PageLayoutElements[];
}

interface IPageLayoutComposition {
  Header: React.FC<PageLayoutHeaderProps>;
  Content: React.FC<PageLayoutContentProps>;
  Footer: React.FC<PageLayoutFooterProps>;
}

const PageLayoutContainer = styled('div', {
  width: '100%',
  height: '100%',
});

export const PageLayout: React.FC<PageLayoutProps> &
  IPageLayoutComposition = function PageLayout(props) {
  const { children } = props;

  return <PageLayoutContainer>{children}</PageLayoutContainer>;
};

PageLayout.Header = PageLayoutHeader;
PageLayout.Content = PageLayoutContent;
PageLayout.Footer = PageLayoutFooter;
