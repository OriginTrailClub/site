export interface GridItemProps
  extends Omit<React.HTMLProps<HTMLElement>, 'className' | 'style'> {}

export function GridItem(props: GridItemProps) {
  const { children } = props;

  return <article {...props}>{children}</article>;
}
