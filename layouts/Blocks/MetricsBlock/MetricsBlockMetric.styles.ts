import { relative } from 'path/posix';
import { css } from 'stitches.config';

export const metric = css({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row-reverse',
  borderStyle: 'solid',
  borderWidth: 0,
  borderColor: '$indigo-100',
  borderTopWidth: 1,
  py: '$small',
  width: '100%',

  '&:last-of-type': {
    borderBottomWidth: 1,
  },

  '@bp2': {
    py: '$none',
    flexDirection: 'column',
    borderTopWidth: 0,

    '&:last-of-type': {
      borderBottomWidth: 0,
    },
  },
});

export const info = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  mr: '$regular',

  '@bp2': {
    width: '100%',
    p: '$small',
    alignItems: 'center',
    mr: '$none',

    '&:before': {
      content: '',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: -1,
      width: 1,
      backgroundColor: '$indigo-200',
    },

    '&:after': {
      content: '',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: -1,
      width: 1,
      backgroundColor: '$indigo-200',
    },
  },
});

export const value = css({
  fontSize: '$header-2',
  lineHeight: '$none',
  color: '$indigo-600',
  fontWeight: '$bold',
  fontFamily: '$mono',
});

export const label = css({
  fontSize: '$cell',
  lineHeight: '$none',
  color: '$text-subtle',
  fontFamily: '$mono',
  mt: '$small',
});

export const icon = css({
  maxWidth: 72,
  width: '100%',

  '@bp2': {
    mb: '$regular',
    maxWidth: 140,
  },
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
  position: 'relative',
  width: '100%',
  height: '100%',
});
