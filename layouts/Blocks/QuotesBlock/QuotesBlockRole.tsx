import * as Styles from './QuotesBlockRole.styles';

export interface QuotesBlockRoleProps {
  label: string;
}

export function QuotesBlockRole(props: QuotesBlockRoleProps) {
  const { label } = props;

  return <label className={Styles.container()}>{label}</label>;
}
