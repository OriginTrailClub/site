import { globalCss } from 'stitches.config';

interface IgenerateFontSizeClampOptions {
  /**
   * base font size in px, used to calculate relative units with, only
   * override when it is not the browser default (16px).
   *
   * @default 16
   */
  baseFontSize?: number;
  /**
   * Size in pixels at which the maxFontSize should be reached
   */
  maxWidthPx: number;
  /**
   * Size in pixels at which the minFontSize should be reached
   */
  minWidthPx: number;
  /**
   * Amount with which the baseFontSize should be increased, which is visible when the minWidthPx is reached
   */
  minFontSize: number;
  /**
   * Amount with which the baseFontSize should be increased, which is visible when the maxWidthPx is reached
   */
  maxFontSize: number;
}

/* Helper function to generate linear scaled font sizes based on constraints */
function generateFontSizeClamp(options: IgenerateFontSizeClampOptions) {
  const {
    minWidthPx,
    maxWidthPx,
    minFontSize,
    maxFontSize,
    baseFontSize = 16,
  } = options;

  const minWidthRem = minWidthPx / baseFontSize;
  const maxWidthRem = maxWidthPx / baseFontSize;

  const slope = (maxFontSize - minFontSize) / (maxWidthRem - minWidthRem);
  const yAxisIntersection = -minWidthRem * slope + minFontSize;

  return `clamp(${minFontSize}rem, ${yAxisIntersection}rem + ${
    slope * 100
  }vw, ${maxFontSize}rem)`;
}

export const globalStyles = globalCss({
  html: {
    height: '100%',
    width: '100%',
    scrollBehavior: 'smooth',

    fontSize: generateFontSizeClamp({
      minWidthPx: 320,
      maxWidthPx: 1234,
      minFontSize: 0.9,
      maxFontSize: 1.2,
    }),
  },
  body: {
    m: 0,
    minHeight: '100%',
    width: '100%',
    fontFamily: '$default',
    color: '$text-body',
    fontSize: '$body-default',
    lineHeight: '$body',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTextSizeAdjust: '100%',
  },
  '#__next': {
    minHeight: '100%',
    width: '100%',
  },
  '*': {
    boxSizing: 'border-box',
    position: 'relative',
  },

  '@media screen and (prefers-reduced-motion: reduce)': {
    html: {
      scrollBehavior: 'auto'
    }
  }  
});
