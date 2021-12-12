import { css } from 'stitches.config';

import * as Styles from './CompaniesBlockCompany.styles';

export const container = css({
  width: '100%',
  maxWidth: '100%',
  gridArea: 'companies',
});

export const companies = css({
  display: 'flex',
  mt: '$small',
  mb: '$none',
  mx: '-$small',
  p: 0,
  listStyleType: 'none',
  flexDirection: 'row',

  [`& > .${Styles.container()}`]: {
    display: 'none',

    '&:nth-of-type(-n+3)': {
      display: 'flex',
    },
  },

  '@bp1': {
    [`& > .${Styles.container()}`]: {
      '&:nth-of-type(-n+4)': {
        display: 'flex',
      },
    },
  },

  '@bp3': {
    [`& > .${Styles.container()}`]: {
      '&:nth-of-type(-n+5)': {
        display: 'flex',
      },
    },
  },

  '@bp4': {
    [`& > .${Styles.container()}`]: {
      '&:nth-of-type(-n+6)': {
        display: 'flex',
      },
    },
  },
});
