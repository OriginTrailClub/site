import * as Styles from './OverviewLayoutContent.styles';

export interface OverviewLayoutContentProps {
  children: React.ReactNode,
}

export function OverviewLayoutContent(props: OverviewLayoutContentProps) {
  const { children } = props;

  return (
    <div className={Styles.container()}>
      {children}
    </div>
  );
}