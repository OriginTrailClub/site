import * as React from 'react';

import { Header, HeaderProps } from 'components/Header';

export type OverviewLayoutHeaderProps = Pick<HeaderProps, 'CallToAction'>;

export function OverviewLayoutHeader(props: OverviewLayoutHeaderProps) {
  return <Header {...props} />;
}
