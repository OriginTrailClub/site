import * as CourseSidebarBlockChapterStyles from './CourseSidebarBlockChapter.styles';

import { css } from 'stitches.config';

export const link = css({
  display: 'flex',
  lineHeight: '$body',
  fontSize: '$button',
  fontFamily: '$mono',
  color: '$text-body',
  fontWeight: '$semi-bold',
  textDecoration: 'none',
  alignItems: 'center',
  mx: '-$regular',
  px: '$regular',
  py: '$xx-small',
  width: 'calc(100% + $space$regular * 2)',

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

  '&:hover, &:focus': {
    color: '$indigo-600',

    '&:before': {
      backgroundColor: '$indigo-50',
      borderColor: '$indigo-200',
    },
  },

  '@bp1': {
    py: '$x-small',
  },

  '@bp3': {
    py: '$small',
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

export const chapters = css({
  display: 'flex',
  flexDirection: 'column',

  p: 0,
  m: 0,

  listStyle: 'none',
});

export const container = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  [`&:first-child .${link()}:after`]: {
    top: '50%',
  },
  [`&:last-child .${link()}:after`]: {
    bottom: '50%',
  },

  [`&:last-child .${chapters()} .${CourseSidebarBlockChapterStyles.container()}:last-child:after`]: {
    bottom: '50%',
  },

  variants: {
    hasChapters: {
      true: {
        [`&:last-child .${link()}:after`]: {
          bottom: '0%',
        },      
      }
    }
  }
});
