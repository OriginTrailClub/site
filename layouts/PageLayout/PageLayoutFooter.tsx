import { Footer } from 'components/Footer';

export interface PageLayoutFooterProps {}

export function PageLayoutFooter(props: PageLayoutFooterProps) {
  return (
    <Footer>
      <Footer.ProjectInfo />
      <Footer.Disclaimer />
    </Footer>
  );
}
