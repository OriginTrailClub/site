import * as React from 'react';

import * as Styles from './Link.styles';

export type LinkProps = {
  children: React.ReactNode;
  target: string;
  rel: string;
  href: string;
};

export const Link = React.forwardRef(function Link(
  props: LinkProps,
  ref: React.Ref<HTMLAnchorElement>
) {
  const { children, href, target, rel } = props;

  return (
    <a
      href={href}
      target={href}
      rel={rel}
      className={Styles.container()}
      ref={ref}
    >
      {children}
    </a>
  );
});
