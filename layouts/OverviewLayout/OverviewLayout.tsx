import { styled } from 'stitches.config';

import Head from 'next/head';

import {
  OverviewLayoutHeader,
  OverviewLayoutHeaderProps,
} from './OverviewLayoutHeader';
import {
  OverviewLayoutContent,
  OverviewLayoutContentProps,
} from './OverviewLayoutContent';
import {
  OverviewLayoutFooter,
  OverviewLayoutFooterProps,
} from './OverviewLayoutFooter';

type OverviewLayoutElements = React.ReactElement<
  | OverviewLayoutHeaderProps
  | OverviewLayoutContentProps
  | OverviewLayoutFooterProps
>;

export interface OverviewLayoutProps {
  /**
   * React elements which are either OverviewLayout.Header, OverviewLayout.Content or OverviewLayout.Footer
   */
  children: OverviewLayoutElements | OverviewLayoutElements[];
  /**
   * Page title
   */
  title: string;
  /**
   * Page description
   */
  description: string;
}

interface IOverviewLayoutComposition {
  Header: React.FC<OverviewLayoutHeaderProps>;
  Content: React.FC<OverviewLayoutContentProps>;
  Footer: React.FC<OverviewLayoutFooterProps>;
}

const OverviewLayoutContainer = styled('div', {
  width: '100%',
  height: '100%',
});

export const OverviewLayout: React.FC<OverviewLayoutProps> &
  IOverviewLayoutComposition = function OverviewLayout(props) {
  const { children, title, description } = props;

  return (
    <OverviewLayoutContainer>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {children}
    </OverviewLayoutContainer>
  );
};

OverviewLayout.Header = OverviewLayoutHeader;
OverviewLayout.Content = OverviewLayoutContent;
OverviewLayout.Footer = OverviewLayoutFooter;
