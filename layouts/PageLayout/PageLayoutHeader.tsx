import * as React from 'react';

import { Header, HeaderProps } from 'components/Header';

export type PageLayoutHeaderProps = Pick<HeaderProps, 'CallToAction'>;

export function PageLayoutHeader(props: PageLayoutHeaderProps) {
  return <Header {...props} />;
}
