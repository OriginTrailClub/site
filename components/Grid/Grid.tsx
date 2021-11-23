import { GridGroup, GridGroupProps } from './GridGroup';
import { GridItem, GridItemProps } from './GridItem';

import * as Styles from './Grid.styles';

type GridElement = React.ReactElement<GridGroupProps | GridItemProps>;

export interface GridProps
  extends Omit<React.HTMLProps<HTMLElement>, 'className' | 'style'> {
  /**
   * React elements which are either or the ElementType Grid.Group, Grid.Item
   */
  children: GridElement | GridElement[];
}

export function Grid(props: GridProps) {
  const { children } = props;

  return (
    <main {...props} className={Styles.container()}>
      {children}
    </main>
  );
}

Grid.Group = GridGroup;
Grid.Item = GridItem;
