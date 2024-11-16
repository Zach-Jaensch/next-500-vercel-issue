import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";

export type PageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout: (page: ReactElement<P>) => ReactNode;
};

/**
 * Appends the provided `getLayout` function to the provided `Page` component.
 *
 * Note that this function mutates the provided `Page` component.
 */
export function PageWithLayout<P = object, IP = P>(
  Page: NextPage<P, IP> & { bind: (context: unknown) => NextPage<P, IP> },
  getLayout: (page: ReactElement<P>) => ReactNode,
): PageWithLayout<P, IP> {
  return Object.assign(Page, { getLayout });
}
