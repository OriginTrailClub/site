import createShevy from 'shevyjs';

export const { h1, h2, h3, h4, h5, h6, content, body } = createShevy({
  baseFontSize: '1rem',
  baseLineHeight: 1.5,
  fontScale: [2.827, 1.999, 1.414, 1, 0.707, 0.5],
  includeMarginBottom: true,
});
