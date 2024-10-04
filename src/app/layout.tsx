import type { Metadata } from "next";
import "./globals.css";
import { getLocale } from "@/i18n/server";
import { LocaleProvider } from "@/hooks/useLocaleProvider";

import ReactQueryProvider from "@/providers/ReactQueryProvider";
import Switcher from "@/components/switcher/Switcher";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "Next.js",
  description: "Test",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = getLocale();
  return (
    <html lang={locale}>
      <body>
        <ReactQueryProvider>
          <LocaleProvider value={locale}>
            <Header/>
            {children}
          </LocaleProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
export default RootLayout;
