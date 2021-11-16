import { globalStyles } from 'constants/globalStyles';

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

    return <StoryComponent />;
  },
];
