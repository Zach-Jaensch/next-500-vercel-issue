import "#/styles/globals.css";
import { PageWithLayout } from "#/utils/page-with-layout";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement } from "react";

interface AppPropsWithLayout extends AppProps {
  Component: NextPage | PageWithLayout;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    "getLayout" in Component
      ? Component.getLayout
      : (page: ReactElement) => page;

  return <> {getLayout(<Component {...pageProps} />)}</>;
}
