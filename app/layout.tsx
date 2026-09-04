import type { Metadata } from "next";
import { Source_Serif_4, Syne } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentProvider } from "@/components/cookies";
import { ConsentDefaultsScript } from "@/components/cookies/ConsentDefaultsScript";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nigeria Expert Witness UK | Tribunal Country Reports",
    template: "%s",
  },
  description:
    "UK-only Nigeria expert witness service for immigration solicitors and Legal Aid practitioners. Country condition reports for FTT and Upper Tribunal asylum appeals.",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-GB": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    siteName: "NigeriaExpert",
    locale: "en_GB",
    type: "website",
    images: [`${SITE_URL}/opengraph-image`],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${syne.variable} ${sourceSerif.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <ConsentDefaultsScript />
        <CookieConsentProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
