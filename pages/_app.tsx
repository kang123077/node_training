import '../styles/global.css'

import React from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import { useState } from "react";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
