import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Head from "next/head";
import classNames from "classnames";
import { RTKProvider } from "@/lib/Providers/RTKProvider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Fit Grocer",
  description: "Elevate your taste, order with haste!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={classNames(poppins.className, "bg-gray-40")}>
        <RTKProvider>
          <main className="flex flex-col">{children}</main>
        </RTKProvider>
      </body>
    </html>
  );
}
