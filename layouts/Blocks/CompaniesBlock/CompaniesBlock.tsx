import * as Styles from './CompaniesBlock.styles';

import {
  CompaniesBlockCompanies,
  CompaniesBlockCompaniesProps,
} from './CompaniesBlockCompanies';
import {
  CompaniesBlockCompany,
  CompaniesBlockCompanyProps,
} from './CompaniesBlockCompany';
import {
  CompaniesBlockTitle,
  CompaniesBlockTitleProps,
} from './CompaniesBlockTitle';
import {
  CompaniesBlockCallToAction,
  CompaniesBlockCallToActionProps,
} from './CompaniesBlockCallToAction';

interface ICompaniesBlockComposition {
  Companies: React.FC<CompaniesBlockCompaniesProps>;
  Company: React.FC<CompaniesBlockCompanyProps>;
  Title: React.FC<CompaniesBlockTitleProps>;
  CallToAction: React.FC<CompaniesBlockCallToActionProps>;
}

type CompaniesBlockElements = React.ReactElement<
  | CompaniesBlockTitleProps
  | CompaniesBlockCallToActionProps
  | CompaniesBlockCompaniesProps
>;

interface CompaniesBlockProps {
  children: CompaniesBlockElements[];
}

export const CompaniesBlock: React.FC<CompaniesBlockProps> &
  ICompaniesBlockComposition = function CompaniesBlock(props) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      <div className={Styles.contents()}>{children}</div>
    </div>
  );
};

CompaniesBlock.Companies = CompaniesBlockCompanies;
CompaniesBlock.Company = CompaniesBlockCompany;
CompaniesBlock.Title = CompaniesBlockTitle;
CompaniesBlock.CallToAction = CompaniesBlockCallToAction;
