import { globalCss } from 'stitches.config';

const globalStyles = globalCss({
  html: {
    height: '100%',
    width: '100%',
  },
  body: {
    margin: 0,
    minHeight: '100%',
    width: '100%',
    fontFamily: '$default',
    color: '$text-body',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
  '#__next': {
    minHeight: '100%',
    width: '100%',
  },
  '*': {
    boxSizing: 'border-box',
    position: 'relative',
  },
});


export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (StoryComponent) => {
    globalStyles();

    return (<StoryComponent />);
  },
]