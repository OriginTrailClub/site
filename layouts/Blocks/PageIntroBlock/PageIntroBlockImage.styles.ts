import { css } from 'stitches.config';

export const container = css({
  width: '100%',
  maxWidth: 'calc(calc(1234px - $space$x-large) / 2)',
  m: '0 auto',
});

export const aspectRatioBox = css({
  height: 0,
  width: '100%',
  overflow: 'hidden',
  pt: '100%' /* 100% = 1/1 asepct ratio */,
  position: 'relative',
  gridArea: 'image',
});

export const aspectRatioBoxInside = css({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

export const image = css({
  width: '100%',
  height: '100%',
  position: 'relative',
})