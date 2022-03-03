import * as React from 'react';

import * as Styles from './PageContentBlockLink.styles';

export type PageContentBlockLinkProps = {
  href: string;
  label: string;
  isActive?: boolean;
};

export const PageContentBlockLink = React.forwardRef(function PageContentBlockLink(
  props: PageContentBlockLinkProps,
  ref: React.Ref<HTMLAnchorElement>
) {
  const { href, label, isActive = false, ...otherProps } = props;

  return (
    <li className={Styles.container()}>
      <a {...otherProps} href={href} ref={ref} className={Styles.link({ isActive })}>
        {label}
      </a>
    </li>
  );
});
