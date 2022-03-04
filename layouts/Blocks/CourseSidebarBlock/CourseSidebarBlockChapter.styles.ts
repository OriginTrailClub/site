import { css } from 'stitches.config';

export const link = css({
  display: 'flex',
  lineHeight: '$body',
  fontSize: '$caption',
  fontFamily: '$mono',
  color: '$text-subtle',
  fontWeight: '$medium',
  textDecoration: 'none',
  alignItems: 'center',

  mx: '-$regular',
  px: '$regular',

  py: '$x-small',

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

  '&:hover, &:focus': {
    color: '$indigo-600',

    '&:before': {
      backgroundColor: '$indigo-50',
      borderColor: '$indigo-200',
    },
  },

  variants: {
    isActive: {
      true: {
        color: '$indigo-600',

        '&:before': {
          backgroundColor: '$indigo-50',
          borderColor: '$indigo-200',
        },    
      },
      false: {}
    }
  },
});

export const container = css({
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
