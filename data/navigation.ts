export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Regions", href: "/regions" },
  { label: "Countries", href: "/countries" },
  { label: "Expertise Areas", href: "/expertise-areas" },
  { label: "Case Types", href: "/case-types" },
  { label: "Guides", href: "/guides" },
  { label: "How to Instruct", href: "/how-to-instruct" },
  { label: "Qualifications", href: "/qualifications" },
  { label: "Fees", href: "/fees" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const mobileNavGroups = [
  {
    title: "Find an Expert",
    links: [
      { label: "Regions", href: "/regions" },
      { label: "Countries", href: "/countries" },
      { label: "Expertise Areas", href: "/expertise-areas" },
    ],
  },
  {
    title: "Case Types",
    links: [{ label: "All Case Types", href: "/case-types" }],
  },
  {
    title: "Resources",
    links: [
      { label: "Solicitor Guides", href: "/guides" },
      { label: "Glossary", href: "/glossary" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "About",
    links: [{ label: "Qualifications", href: "/qualifications" }],
  },
  {
    title: "Process",
    links: [
      { label: "How to Instruct", href: "/how-to-instruct" },
      { label: "Fees", href: "/fees" },
    ],
  },
] as const;
