import { css } from 'stitches.config';

export const container = css({
  gridArea: 'image',
  p: '$small',
  width: '100%',

  '&:before': {
    content: '',
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    transform: 'scale(1.4)',
    pt: '100%',
    borderRadius: 9999,
    backgroundColor: '$indigo-100',
    zIndex: -1,
  },
  '&:after': {
    content: '',
    position: 'absolute',
    right: '$space$x-small',
    left: 0,
    bottom: 0,
    ml: 'calc(-$x-small - 1px)',
    mb: 'calc(-$x-small - 1px)',
    width: 'calc(100% + $space$x-small * 2)',
    transform: 'scale(1.4)',
    pt: 'calc(100% + $space$x-small * 2)',
    borderRadius: 9999,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '$indigo-200',
    zIndex: -1,
  },

  '@bp4': {
    gridArea: 'image',
  },
});

export const aspectRatioBox = css({
  height: 0,
  width: '100%',
  overflow: 'hidden',
  pt: '200%' /* 200% = 1/2 asepct ratio */,
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
});
