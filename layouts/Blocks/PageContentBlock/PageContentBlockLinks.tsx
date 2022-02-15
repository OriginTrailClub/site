import * as Styles from './PageContentBlockLinks.styles';

export type PageContentBlockLinksProps = {
  children: React.ReactNode;
};

export function PageContentBlockLinks(props: PageContentBlockLinksProps) {
  const { children } = props;

  return <ul className={Styles.container()}>{children}</ul>;
}
