export type Expert = {
  name: string;
  jobTitle: string;
  description: string;
  expertise: string[];
  regions: string[];
};

export const experts: Expert[] = [
  {
    name: "Dr Amara Okafor",
    jobTitle: "Nigeria Country Conditions Expert",
    description:
      "PhD in African Politics (SOAS). Fifteen years of field research across Nigeria. Tribunal-accepted expert on LGBTQ+ persecution under SSMPA, IPOB and Biafra separatist risk, FGM prevalence, and actors of protection analysis. Fluent in English, Hausa, Igbo, and Yoruba.",
    expertise: ["LGBTQ+ asylum", "IPOB/Biafra", "FGM", "State protection", "CPIN analysis"],
    regions: ["South-West", "South-East", "North-Central"],
  },
  {
    name: "Dr Hassan Abubakar",
    jobTitle: "North-East Nigeria & Security Expert",
    description:
      "PhD in Conflict Studies. Specialist in Boko Haram and ISWAP operations in Borno, Adamawa, and Yobe states. Extensive experience with Article 15c subsidiary protection claims and EUAA 2026 North-East guidance. Fluent in English and Hausa.",
    expertise: ["Boko Haram/ISWAP", "Article 15c", "Internal armed conflict", "North-East relocation"],
    regions: ["North-East", "North-West"],
  },
  {
    name: "Advocate Chioma Eze",
    jobTitle: "Trafficking & Gender-Based Violence Expert",
    description:
      "Advocate and researcher specialising in Edo State trafficking routes, juju ritual mechanisms, NRM-linked asylum claims, and VAPP Act enforcement. Experience with daughter-at-risk FGM claims and gender-based violence intersectionality. Fluent in English and Pidgin.",
    expertise: ["Trafficking & juju", "FGM", "NRM claims", "Gender-based violence"],
    regions: ["South-South", "South-East", "Lagos"],
  },
];
