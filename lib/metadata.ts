import type { Metadata } from "next";
import { SITE_URL } from "./constants";
import { trimDescription, trimTitle } from "./seo/meta-limits";

const OG_IMAGE_ALT = "NigeriaExpert - Nigeria Expert Witness Services UK";

export const OPEN_GRAPH_IMAGE = {
  url: `${SITE_URL}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: OG_IMAGE_ALT,
} as const;

export function createMetadata({
  title,
  description,
  path = "",
  noindex = false,
  follow = true,
}: {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
  follow?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const pageTitle = trimTitle(title);
  const pageDescription = trimDescription(description);

  return {
    title: { absolute: pageTitle },
    description: pageDescription,
    alternates: {
      canonical: url,
      languages: {
        "en-GB": url,
        "x-default": url,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: "NigeriaExpert",
      locale: "en_GB",
      type: "website",
      images: [OPEN_GRAPH_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [OPEN_GRAPH_IMAGE.url],
    },
    robots: noindex
      ? { index: false, follow, googleBot: { index: false, follow } }
      : { index: true, follow: true },
  };
}
