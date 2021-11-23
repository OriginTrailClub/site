export interface GridItemProps
  extends Omit<React.HTMLProps<HTMLDivElement>, 'className' | 'style'> {}

export function GridItem(props: GridItemProps) {
  const { children } = props;

  return <div {...props}>{children}</div>;
}
