import * as Styles from './CompaniesBlockCompanies.styles';

import { CompaniesBlockCompanyProps } from './CompaniesBlockCompany';

type CompaniesBlockCompaniesElements = React.ReactElement<CompaniesBlockCompanyProps>;

export interface CompaniesBlockCompaniesProps {
  children: CompaniesBlockCompaniesElements[];
}

export function CompaniesBlockCompanies(props: CompaniesBlockCompaniesProps) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <ul className={Styles.companies()}>{children}</ul>
    </div>
  );
}
