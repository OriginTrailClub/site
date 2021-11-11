import type { AppProps } from 'next/app';

import { globalCss } from "stitches.config";

const globalStyles = globalCss({
  html: {
    height: "100%",
    width: "100%",
  },
  body: {
    margin: 0,
    minHeight: "100%",
    width: "100%",
    fontFamily: "$default",
    color: "$text-body",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },
  "#__next": {
    minHeight: "100%",
    width: "100%",
  },
  "*": {
    boxSizing: "border-box",
    position: "relative",
  },
});


function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return <Component {...pageProps} />;
}

export default MyApp;
