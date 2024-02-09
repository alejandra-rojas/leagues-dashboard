import { Analytics } from "@vercel/analytics/react";
import {
  Inter,
  Noto_Sans,
  Open_Sans,
  Barlow_Semi_Condensed,
} from "next/font/google";
import "./globals.scss";
import TanstackProvider from "./components/providers/Tanstackprovider";
import SmoothScroll from "./components/providers/SmoothScroll";

export const dynamic = "force-dynamic";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "700", "900"],
  variable: "--font-noto",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});

const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "900"],
  variable: "--font-barlow",
});

export const metadata = {
  title: "Highbury Fields Tennis Leagues",
  description: "Competitive Tennis Leagues at Highbury Fields Tennis Club ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto.variable}>
        <TanstackProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </TanstackProvider>
        <Analytics />
      </body>
    </html>
  );
}

//<body className={openSans.className}>
