import * as Styles from './Footer.styles';

export interface FooterProps
  extends Omit<React.HTMLProps<HTMLElement>, 'className' | 'style'> {}

export function Footer(props: FooterProps) {
  return (
    <footer {...props} className={Styles.container()}>
      footer
    </footer>
  );
}
