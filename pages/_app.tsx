import "../styles/global.css";

import React,{ Suspense } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import { useState } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Modal from "../component/modal";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <RecoilRoot>
        <Modal children={null} />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default MyApp;
