import React from "react";
import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../styles/createEmotionCache";
import { EmotionCache } from "@emotion/cache";
import { AppType } from "next/dist/shared/lib/utils";

import "/styles/globals.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface PropTypes {
  emotionCache?: EmotionCache;
  Component: AppType;
  pageProps: any;
}

function App(props: PropTypes) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>kaspar poland</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default App;
