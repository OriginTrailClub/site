import { css } from 'stitches.config';

export const container = css({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  px: '$regular',
});

export const contents = css({
  maxWidth: 1234,
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr max-content',
  gridTemplateRows: 'max-content 1fr',
  gridTemplateAreas: `
        "title     cta"
        "companies companies"
    `,
});
