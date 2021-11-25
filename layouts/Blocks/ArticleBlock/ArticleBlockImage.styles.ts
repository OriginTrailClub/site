import { css } from 'stitches.config';

export const container = css({
  gridArea: 'image',
});

export const aspectRatioBox = css({
  height: 0,
  width: '100%',
  overflow: 'hidden',
  paddingTop: 'calc(100% / 3 * 2)' /* 100% = 3/2 asepct ratio */,
  position: 'relative',
});

export const aspectRatioBoxInside = css({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});
