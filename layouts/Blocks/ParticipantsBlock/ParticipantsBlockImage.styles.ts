import { css } from 'stitches.config';

export const container = css({
  backgroundColor: '$gray-50',
  marginBottom: '$regular',
});

export const aspectRatioBox = css({
  height: 0,
  width: '100%',
  overflow: 'hidden',
  paddingTop: '100%' /* 100% = 1/1 asepct ratio */,
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
