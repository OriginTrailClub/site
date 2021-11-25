import { css } from 'stitches.config';

export const container = css({
  gridArea: 'image',
});

export const aspectRatioBox = css({
  height: 0,
  width: '100%',
  overflow: 'hidden',
  paddingTop: '75%' /* 100% = 3/2 asepct ratio */,
  position: 'relative',

  '@bp3': {
    paddingTop: '%' /* 100% = 2/1 asepct ratio */,
  },
  '@bp4': {
    paddingTop: '60%' /* 75% = 3/2 asepct ratio */,
  },
});

export const aspectRatioBoxInside = css({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});
