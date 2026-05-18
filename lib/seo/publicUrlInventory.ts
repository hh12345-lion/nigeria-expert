import { SITE_URL } from "../constants";
import { regions } from "../../data/regions";
import { countries } from "../../data/countries";
import { expertiseAreas } from "../../data/expertise-areas";
import { caseTypes } from "../../data/case-types";
import { guides } from "../../data/guides";
import { services } from "../../data/services";

export type PublicUrlEntry = {
  path: string;
  priority: number;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
};

/** First-class static routes (indexable). Excludes contact, thank-you, privacy, terms. */
export const APP_STATIC_PATHS: PublicUrlEntry[] = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/services", priority: 0.95, changefreq: "monthly" },
  { path: "/regions", priority: 0.93, changefreq: "monthly" },
  { path: "/countries", priority: 0.93, changefreq: "monthly" },
  { path: "/expertise-areas", priority: 0.92, changefreq: "monthly" },
  { path: "/case-types", priority: 0.9, changefreq: "monthly" },
  { path: "/what-is-an-africa-expert-witness", priority: 0.88, changefreq: "monthly" },
  { path: "/qualifications", priority: 0.88, changefreq: "monthly" },
  { path: "/how-to-instruct", priority: 0.88, changefreq: "monthly" },
  { path: "/faq", priority: 0.87, changefreq: "monthly" },
  { path: "/guides", priority: 0.87, changefreq: "monthly" },
  { path: "/experts", priority: 0.8, changefreq: "monthly" },
  { path: "/glossary", priority: 0.75, changefreq: "monthly" },
  { path: "/cookie-policy", priority: 0.5, changefreq: "yearly" },
];

/** Paths that exist but must not appear in the sitemap */
export const NON_INDEXABLE_PATHS = ["/contact", "/thank-you", "/privacy", "/terms"] as const;

/** Paths disallowed in robots.txt */
export const ROBOTS_DISALLOW_PATHS = ["/thank-you", "/api/"] as const;

function dynamicEntries(): PublicUrlEntry[] {
  return [
    ...regions.map((r) => ({
      path: `/regions/${r.slug}`,
      priority: 0.88,
      changefreq: "monthly" as const,
    })),
    ...countries.map((c) => ({
      path: `/countries/${c.slug}`,
      priority: 0.88,
      changefreq: "monthly" as const,
    })),
    ...expertiseAreas.map((e) => ({
      path: `/expertise-areas/${e.slug}`,
      priority: 0.86,
      changefreq: "monthly" as const,
    })),
    ...caseTypes.map((c) => ({
      path: `/case-types/${c.slug}`,
      priority: 0.86,
      changefreq: "monthly" as const,
    })),
    ...guides.map((g) => ({
      path: `/guides/${g.slug}`,
      priority: 0.8,
      changefreq: "monthly" as const,
    })),
    ...services.map((s) => ({
      path: `/services/${s.id}`,
      priority: 0.9,
      changefreq: "monthly" as const,
    })),
  ];
}

export type PublicUrlInventory = {
  /** Canonical site origin (no trailing slash) */
  siteUrl: string;
  /** Pathname entries for sitemap (deduplicated, sorted) */
  entries: PublicUrlEntry[];
  allPaths: string[];
  allUrls: string[];
};

/**
 * Assembles every indexable public URL for sitemap generation and verification.
 * Keeps the inventory aligned with `data/*.ts` slugs and SEO-ARCHITECTURE.md priorities.
 */
export function buildPublicUrlInventory(siteUrl: string = SITE_URL): PublicUrlInventory {
  const origin = siteUrl.replace(/\/$/, "");
  const merged = [...APP_STATIC_PATHS, ...dynamicEntries()];

  const byPath = new Map<string, PublicUrlEntry>();
  for (const entry of merged) {
    const path = entry.path.startsWith("/") ? entry.path : `/${entry.path}`;
    if (NON_INDEXABLE_PATHS.includes(path as (typeof NON_INDEXABLE_PATHS)[number])) continue;
    byPath.set(path, { ...entry, path });
  }

  const entries = [...byPath.values()].sort((a, b) => a.path.localeCompare(b.path));
  const allPaths = entries.map((e) => e.path);
  const allUrls = allPaths.map((p) => (p === "/" ? origin : `${origin}${p}`));

  return { siteUrl: origin, entries, allPaths, allUrls };
}
