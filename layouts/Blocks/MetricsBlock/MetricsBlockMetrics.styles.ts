import { css } from 'stitches.config';

export const metrics = css({
  m: '$none',
  p: '$none',
  listStyleType: 'none',
  width: '100%',
  gridArea: 'metrics',

  display: 'grid',
  gridAutoRows: '1fr',
  gridAutoFlow: 'row',

  '@bp2': {
    display: 'grid',
    gridAutoColumns: '1fr',
    gridAutoFlow: 'column',
    gridColumnGap: '1px',
    px: 1,
  },
});
