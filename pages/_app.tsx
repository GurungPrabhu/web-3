import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Web3ReactProvider } from "@web3-react/core";
import { ComponentContextProvider, getLibrary } from "@components";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ComponentContextProvider>
          <Component {...pageProps} />
        </ComponentContextProvider>
      </Web3ReactProvider>
    </div>
  );
}

export default MyApp;
