import * as Styles from './PageContentBlockLink.styles';

export type PageContentBlockLinkProps = {
  href: string;
  label: string;
};

export function PageContentBlockLink(props: PageContentBlockLinkProps) {
  const { href, label } = props;

  return (
    <li className={Styles.container()}>
      <a {...props} href={href} className={Styles.link()}>
        {label}
      </a>
    </li>
  );
}
