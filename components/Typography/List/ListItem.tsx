import * as Styles from './ListItem.styles';

export type ListItemProps = {
  children: React.ReactNode;
};

export function ListItem(props: ListItemProps) {
  const { children } = props;

  return (
    <li className={Styles.container()}>
      <span className={Styles.content()}>{children}</span>
    </li>
  );
}
