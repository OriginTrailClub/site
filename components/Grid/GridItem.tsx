import * as Styles from './GridItem.styles';

export interface GridItemProps
  extends Omit<React.HTMLProps<HTMLDivElement>, 'className' | 'style'> {}

export function GridItem(props: GridItemProps) {
  const { children } = props;

  return (
    <div className={Styles.container()} {...props}>
      {children}
    </div>
  );
}
