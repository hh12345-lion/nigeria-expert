export type GeoTable = {
  caption: string;
  headers: string[];
  rows: string[][];
  source?: string;
};

export const homepageAsylumStats: GeoTable = {
  caption: "Selected African nationalities in UK asylum applications (illustrative trends for solicitors)",
  headers: ["Nationality", "Common UK claim grounds", "Leading country guidance / notes"],
  rows: [
    ["Nigeria", "Boko Haram, LGBTQI+ (SSMPA), FGM, political activism", "State-specific analysis; internal relocation often disputed"],
    ["Somalia", "Clan risk, Al-Shabaab, Mogadishu return", "MOJ & Ors [2014] UKUT 00442"],
    ["Eritrea", "Indefinite national service, illegal departure", "MA (draft evaders) [2019] UKUT 272"],
    ["Sudan", "Civil war, Darfur, RSF atrocities", "Rapidly evolving - current expert evidence essential"],
    ["Uganda", "Anti-Homosexuality Act 2023, political opposition", "Nationwide LGBTQI+ criminalisation"],
    ["Zimbabwe", "ZANU-PF persecution, LGBTQI+", "RN [2008] - updated analysis required"],
  ],
  source: "Home Office immigration statistics; Upper Tribunal country guidance. Expert reports should cite primary COI.",
};

export const lgbtqiCriminalisationTable: GeoTable = {
  caption: "Criminalisation of same-sex conduct - selected African states (UK asylum relevance)",
  headers: ["Country", "Legal position", "UK claim volume"],
  rows: [
    ["Uganda", "Anti-Homosexuality Act 2023 - up to life imprisonment; death penalty for aggravated offences", "Very high (post-2023)"],
    ["Nigeria", "SSMPA 2014 - up to 14 years; nationwide application", "High"],
    ["Ghana", "Human Sexual Rights Bill 2024 (pending enactment)", "Rising"],
    ["Kenya", "Penal Code criminalisation", "Moderate"],
    ["Tanzania", "Criminalisation; periodic enforcement surges", "Moderate"],
    ["Cameroon", "Criminalisation; enforcement against LGBTQI+ individuals", "Moderate"],
  ],
  source: "ILGA World State-Sponsored Homophobia reports; national legislation. See country-specific expert reports for enforcement practice.",
};

export const fgmPrevalenceTable: GeoTable = {
  caption: "FGM prevalence - highest-volume African countries in UK tribunals",
  headers: ["Country", "Approx. prevalence (women 15–49)", "Expert evidence focus"],
  rows: [
    ["Somalia", "~98%", "Type III; daughters at risk; IDP contexts"],
    ["Guinea", "~95%", "Near-universal; internal relocation rarely viable"],
    ["Mali", "~89%", "Ethnic/regional variation"],
    ["Sierra Leone", "~83%", "Secret society contexts"],
    ["Gambia", "~75%", "Tourism and diaspora links to UK claims"],
    ["Nigeria", "Varies by state (Edo, Imo, Ekiti high)", "State-specific analysis required"],
  ],
  source: "UNICEF global databases; DHS surveys. Expert witnesses cite latest prevalence for relevant ethnic group.",
};

export const mojFrameworkTable: GeoTable = {
  caption: "MOJ & Ors (Return to Mogadishu) Somalia CG [2014] - framework factors",
  headers: ["Factor", "Tribunal consideration", "Expert witness role"],
  rows: [
    ["Clan membership", "Majority vs minority clan in return area", "Verify clan claims; geographic risk mapping"],
    ["Diaspora remittances", "Financial support for survival in Mogadishu", "Assess realistic access for claimant"],
    ["Integration capacity", "Ability to enter civil society safely", "Current Al-Shabaab and militia conditions"],
    ["Internal relocation", "Viability outside Mogadishu", "Area-specific conditions since 2014"],
  ],
  source: "MOJ & Ors (Return to Mogadishu) Somalia CG [2014] UKUT 00442",
};

export const westAfricaIcsidTable: GeoTable = {
  caption: "West Africa - selected ICSID mining disputes (2024–2025)",
  headers: ["State", "Sector", "Context for expert evidence"],
  rows: [
    ["Guinea", "Bauxite", "Axis International claim (~$28.9bn); licence revocations under military junta"],
    ["Mali", "Gold", "Military regime mining contract renegotiations"],
    ["Burkina Faso", "Gold", "Multiple investor-state claims following policy shifts"],
    ["Niger", "Uranium / mining", "Post-coup regulatory changes"],
  ],
  source: "ICSID caseload; Global Arbitration Review. Country conditions and African law experts support FET/expropriation analysis.",
};

export const cpinRebuttalSteps: { step: number; title: string; description: string }[] = [
  { step: 1, title: "Identify contested CPIN propositions", description: "Map Home Office refusal letter and CPIN paragraphs relied upon to specific factual findings." },
  { step: 2, title: "Source audit", description: "Compare CPIN citations to current UNHCR, Amnesty, and field research - note dated or selective sources." },
  { step: 3, title: "Country-specific counter-evidence", description: "Instruct expert to address state, region, and profile-specific conditions (not generic country summaries)." },
  { step: 4, title: "Country guidance alignment", description: "State whether case departs from CG or requires updated analysis post-CG (e.g. Sudan 2023, Uganda 2023)." },
  { step: 5, title: "Structured rebuttal report", description: "OSCOLA-cited expert report responding point-by-point to CPIN propositions." },
];
