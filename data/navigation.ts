import { caseTypes } from "./case-types";
import { countries } from "./countries";
import { expertiseAreas } from "./expertise-areas";
import { regions } from "./regions";
import { services } from "./services";

export const servicesNavLinks = services.map((s) => ({
  label: s.navLabel,
  href: `/services/${s.id}`,
}));

export const regionsNavLinks = regions.map((r) => ({
  label: r.title,
  href: `/regions/${r.slug}`,
}));

export const countriesNavLinks = countries.map((c) => ({
  label: c.name,
  href: `/countries/${c.slug}`,
}));

export const expertiseAreasNavLinks = expertiseAreas.map((e) => ({
  label: e.title,
  href: `/expertise-areas/${e.slug}`,
}));

export const caseTypesNavLinks = caseTypes.map((c) => ({
  label: c.title,
  href: `/case-types/${c.slug}`,
}));

export const resourcesNavLinks = [
  { label: "Solicitor Guides", href: "/guides" },
  { label: "How to Instruct", href: "/how-to-instruct" },
  { label: "Qualifications", href: "/qualifications" },
] as const;

export const mobileNavGroups = [
  {
    title: "Services",
    links: [{ label: "All Services", href: "/services" }, ...servicesNavLinks],
  },
  {
    title: "Regions",
    links: [{ label: "All Regions", href: "/regions" }, ...regionsNavLinks],
  },
  {
    title: "Countries",
    links: [{ label: "All Countries", href: "/countries" }, ...countriesNavLinks],
  },
  {
    title: "Expertise Areas",
    links: [{ label: "All Expertise Areas", href: "/expertise-areas" }, ...expertiseAreasNavLinks],
  },
  {
    title: "Case Types",
    links: [{ label: "All Case Types", href: "/case-types" }, ...caseTypesNavLinks],
  },
  {
    title: "Resources",
    links: [...resourcesNavLinks],
  },
] as const;
