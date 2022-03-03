import * as Styles from './PageContentBlockLink.styles';

export type PageContentBlockLinkProps = {
  href: string;
  label: string;
  isActive?: boolean;
};

export function PageContentBlockLink(props: PageContentBlockLinkProps) {
  const { href, label, isActive = false, ...otherProps } = props;

  return (
    <li className={Styles.container()}>
      <a {...otherProps} href={href} className={Styles.link({ isActive })}>
        {label}
      </a>
    </li>
  );
}
