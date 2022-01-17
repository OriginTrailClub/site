import { css } from 'stitches.config';

export const container = css({
  display: 'flex',
  alignItems: 'center',
});

export const aspectRatioBox = css({
  height: 0,
  width: '100%',
  overflow: 'hidden',
  pt: 'calc(100% / 16 * 10)' /* 100% = 3/2 asepct ratio */,
  position: 'relative',
});

export const aspectRatioBoxInside = css({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

export const image = css({
  position: 'relative',
  width: '100%',
  height: '100%',
});
