import * as Styles from './Link.styles';

export type LinkProps = {
  children: React.ReactNode;
  target: string;
  rel: string;
  href: string;
};

export function Link(props: LinkProps) {
  const { children, href, target, rel } = props;

  return (
    <a href={href} target={href} rel={rel} className={Styles.container()}>
      {children}
    </a>
  );
}
