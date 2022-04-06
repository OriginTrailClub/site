import { FooterDisclaimer, FooterDisclaimerProps } from './FooterDisclaimer';
import { FooterProjectInfo, FooterProjectInfoProps } from './FooterProjectInfo';

type FooterElements = React.ReactElement<
  FooterDisclaimerProps | FooterProjectInfoProps
>;

export interface FooterProps {
  children: FooterElements[];
}

export function Footer(props: FooterProps) {
  const { children } = props;

  return <>{children}</>;
}

Footer.Disclaimer = FooterDisclaimer;
Footer.ProjectInfo = FooterProjectInfo;
