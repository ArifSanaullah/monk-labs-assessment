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
  return <>{children}</>;
}
