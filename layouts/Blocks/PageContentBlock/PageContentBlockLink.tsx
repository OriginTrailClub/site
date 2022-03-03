import * as Styles from './PageContentBlockLink.styles';

export type PageContentBlockLinkProps = {
  href: string;
  label: string;
};

export function PageContentBlockLink(props: PageContentBlockLinkProps) {
  const { href, label, ...otherProps } = props;

  return (
    <li className={Styles.container()}>
      <a {...otherProps} href={href} className={Styles.link()}>
        {label}
      </a>
    </li>
  );
}
