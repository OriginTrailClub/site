import { css } from 'stitches.config';

export const link = css({
  display: 'flex',
  alignItems: 'flex-start',
  lineHeight: '$body',
  fontSize: '$button',
  fontFamily: '$mono',
  color: '$text-body',
  py: '$small',
  width: '100%',
  fontWeight: '$semi-bold',
  textDecoration: 'none',

  '&:before': {
    zIndex: 1,
    display: 'flex',
    content: '',
    width: '1em',
    height: '1em',
    my: 'calc((32px - 1em - 2px) / 2)',
    ml: 'calc((32px - 1em - 2px) / 2)',
    mr: 'calc(((32px - 1em - 2px) / 2) + $regular)',
    borderWidth: 1,
    flexShrink: 0,
    flexGrow: 0,
    borderStyle: 'solid',
    borderColor: '$gray-200',
    backgroundColor: '$gray-50',
  },

  '&:after': {
    content: '',
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 0,
    width: 1,
    backgroundColor: '$gray-200',
    mx: 'calc((32px - 1px) / 2)',
  },
});

export const container = css({
  display: 'flex',
  alignItems: 'center',
  width: '100%',

  [`&:first-child .${link()}:after`]: {
    top: '50%',
  },
  [`&:last-child .${link()}:after`]: {
    bottom: '50%',
  },
});
