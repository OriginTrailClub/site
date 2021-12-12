import { FooterDisclaimer, FooterDisclaimerProps } from './FooterDisclaimer';
import { FooterProjectInfo, FooterProjectInfoProps } from './FooterProjectInfo';

/*

<Footer>
  <Footer.ProjectInfo />
  <Footer.Disclaimer />
</Footer>

*/

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

// export function Footer() {
//   return (
//       <aside className={Styles.container()}>
//         <div className={Styles.contents()}>
//         </div>
//       </aside>
//       <div className={Styles.delimiter()}
//       <footer {...props}>
//         <div>

//         </div>
//         <div />

//         Made with () by the community
//       </footer>
//     </div>
//   );
// }
