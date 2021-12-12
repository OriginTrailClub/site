import { Footer } from 'components/Footer';

export interface OverviewLayoutFooterProps {}

export function OverviewLayoutFooter(props: OverviewLayoutFooterProps) {
  return (
    <Footer>
      <Footer.ProjectInfo />
      <Footer.Disclaimer />
    </Footer>
  );
}
