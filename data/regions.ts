import type { FAQ } from "@/lib/schema";

export type Region = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  countries: string;
  keyIssues: string[];
  countryGuidance?: string;
  faqs: FAQ[];
  overview: string[];
};

export const regions: Region[] = [
  {
    slug: "east-africa",
    title: "East Africa",
    metaTitle: "East Africa Expert Witness UK | Kenya, Tanzania, Uganda & Rwanda",
    metaDescription:
      "East Africa expert witnesses for UK immigration tribunals and investment arbitration. Kenya, Tanzania, Uganda, Rwanda, Burundi, Malawi, Zambia, Zimbabwe specialists.",
    h1: "East Africa Expert Witness Services for UK Solicitors",
    countries: "Kenya, Tanzania, Uganda, Rwanda, Burundi, Malawi, Zambia, Zimbabwe",
    keyIssues: [
      "Political persecution and election-related violence",
      "Tribal and ethnic conflict",
      "LGBTQI+ persecution — Uganda Anti-Homosexuality Act 2023",
      "Human trafficking routes through East Africa",
      "Land disputes and forced displacement",
    ],
    overview: [
      "East Africa generates a substantial volume of UK asylum and immigration tribunal work. Kenya, Uganda, Zimbabwe, and Tanzania appear frequently in First-tier Tribunal appeals, while regional experts must address sharply different conditions across English-speaking, Swahili-speaking, and post-conflict jurisdictions.",
      "Investment treaty arbitration in East Africa centres on energy, infrastructure, and mining — particularly in Tanzania, Kenya, and Uganda. Expert witnesses provide country conditions analysis, regulatory framework evidence, and African law expertise for ICSID and UNCITRAL proceedings.",
    ],
    faqs: [
      {
        question: "Which East African countries most commonly appear in UK asylum cases?",
        answer:
          "Kenya, Uganda, Zimbabwe, and Tanzania generate significant UK asylum claims. Uganda in particular has seen increased claims following the passage of the Anti-Homosexuality Act 2023, which criminalises same-sex relations with penalties up to life imprisonment. Expert witnesses provide country conditions evidence tailored to each jurisdiction.",
      },
      {
        question: "What investment disputes involve East Africa?",
        answer:
          "Tanzania, Kenya, and Uganda face active investment arbitration claims in energy, infrastructure, and mining sectors. Expert witnesses provide country conditions, regulatory framework analysis, and African law expert evidence for ICSID and UNCITRAL proceedings.",
      },
    ],
  },
  {
    slug: "west-africa",
    title: "West Africa",
    metaTitle: "West Africa Expert Witness UK | Nigeria, Ghana, Guinea & Sahel",
    metaDescription:
      "West Africa expert witnesses for UK solicitors. Nigeria, Ghana, Guinea, Mali, Senegal, Sierra Leone, Gambia, Burkina Faso, Niger, and Côte d'Ivoire country specialists.",
    h1: "West Africa Expert Witness Services for UK Solicitors",
    countries: "Nigeria, Ghana, Guinea, Mali, Senegal, Sierra Leone, Gambia, Burkina Faso, Niger, Côte d'Ivoire",
    keyIssues: [
      "Boko Haram and ISWAP persecution in the Sahel",
      "Biafra and Igbo political claims",
      "FGM risk — Nigeria and Guinea",
      "LGBTQI+ persecution under national criminal laws",
      "Mining, bauxite, and gold arbitration — Guinea, Mali, Burkina Faso",
    ],
    overview: [
      "West Africa is the most diverse asylum source region on the continent for UK tribunals. Nigeria alone accounts for one of the highest volumes of UK asylum claims from any single African state, spanning Boko Haram violence, LGBTQI+ persecution, FGM risk, and political activism across 36 states.",
      "West Africa is simultaneously the epicentre of African investment treaty arbitration in 2024–2025. Military regimes in Guinea, Mali, Burkina Faso, and Niger have revoked or renegotiated mining licences, generating ICSID claims valued in the billions. Expert witnesses are essential for country conditions and legal framework evidence.",
    ],
    faqs: [
      {
        question: "Why are Nigerian asylum cases so complex?",
        answer:
          "Nigeria is the most populous African country and generates diverse asylum claims — from Boko Haram/ISWAP violence in the north, to LGBTQI+ persecution (Same Sex Marriage Prohibition Act 2014), FGM risk, and political persecution. Expert witnesses provide state-specific analysis covering Nigeria's 36 states and internal relocation options.",
      },
      {
        question: "How significant is investment arbitration in West Africa currently?",
        answer:
          "Extremely significant. Guinea, Mali, Burkina Faso, and Niger have all faced multiple ICSID arbitration claims in 2024–2025 as military regimes revoke or renegotiate mining licences. In Guinea alone, the Axis International ICSID claim is valued at $28.9 billion. Expert witnesses provide essential country conditions and legal framework evidence.",
      },
    ],
  },
  {
    slug: "horn-of-africa",
    title: "Horn of Africa",
    metaTitle: "Horn of Africa Expert Witness UK | Somalia, Eritrea, Ethiopia & Sudan",
    metaDescription:
      "Horn of Africa expert witnesses for UK immigration and arbitration. Somalia, Eritrea, Ethiopia, Sudan, South Sudan, and Djibouti country condition specialists.",
    h1: "Horn of Africa Expert Witness Services for UK Solicitors",
    countries: "Somalia, Eritrea, Ethiopia, Sudan, South Sudan, Djibouti",
    keyIssues: [
      "Somalia clan structure and Al-Shabaab — MOJ country guidance",
      "Eritrea forced military conscription — MA Eritrea guidance",
      "Ethiopian ethnic conflict — Tigray, Oromo, Amhara",
      "Sudan civil war and Darfur atrocities",
      "South Sudan ongoing conflict",
    ],
    countryGuidance:
      "MOJ & Ors (Return to Mogadishu) Somalia CG [2014] UKUT 00442; MA (draft evaders — illegal departure) Eritrea CG [2019] UKUT 272",
    overview: [
      "The Horn of Africa produces some of the most legally complex UK asylum cases, governed by leading country guidance decisions on Somalia and Eritrea. Expert witnesses must address MOJ and MA factors while incorporating developments since those decisions were handed down.",
      "Sudan's civil war since April 2023 has dramatically altered the risk landscape, while Ethiopia's Tigray conflict generated significant new claims. Expert evidence must be current, granular, and tied to specific geographic and ethnic contexts.",
    ],
    faqs: [
      {
        question: "What is the current country guidance on Somalia?",
        answer:
          "MOJ & Ors (Return to Mogadishu) Somalia CG [2014] UKUT 00442 remains the leading guidance. It established a detailed framework for assessing the safety of return to Mogadishu, including clan membership, access to diaspora remittances, and conditions in different areas. Expert witnesses must address MOJ factors while incorporating developments since 2014.",
      },
      {
        question: "What are the key issues in Eritrean asylum claims?",
        answer:
          "Eritrea generates claims based primarily on forced military conscription (national service of indefinite duration), political persecution, and risk on return following unlawful departure. MA (draft evaders) Eritrea CG [2019] UKUT 272 is the leading guidance. Experts provide current analysis of military service conditions, exit procedures, and treatment of returnees.",
      },
    ],
  },
  {
    slug: "southern-africa",
    title: "Southern Africa",
    metaTitle: "Southern Africa Expert Witness UK | Zimbabwe, South Africa & DRC",
    metaDescription:
      "Southern Africa expert witnesses for UK tribunals and arbitration. Zimbabwe, South Africa, DRC, Mozambique, Angola, Namibia, and Botswana specialists.",
    h1: "Southern Africa Expert Witness Services for UK Solicitors",
    countries: "Zimbabwe, South Africa, DRC (Democratic Republic of Congo), Mozambique, Angola, Namibia, Botswana",
    keyIssues: [
      "Zimbabwe political persecution — RN Zimbabwe guidance",
      "DRC ethnic conflict and mining disputes",
      "South Africa commercial arbitration (asylum claims less common)",
      "Mozambique gas sector and Cabo Delgado insurgency",
      "Angola and Namibia political and economic conditions",
    ],
    overview: [
      "Southern Africa combines high-volume Zimbabwe asylum work — governed by RN country guidance — with major investment treaty disputes in the DRC mining sector and Mozambique's LNG industry. Expert witnesses must navigate both tribunal country conditions work and complex ICSID proceedings.",
      "South Africa itself generates fewer asylum claims in UK tribunals but features prominently in commercial litigation requiring African law expert evidence. The region demands experts with country-specific rather than pan-regional credentials.",
    ],
    faqs: [
      {
        question: "What is the country guidance on Zimbabwe?",
        answer:
          "RN and Others (Returnees) Zimbabwe CG [2008] UKAIT 00083 and subsequent cases address the risk on return to Zimbabwe for perceived MDC supporters and others at risk. The political situation has evolved significantly since 2008 — expert witnesses provide current analysis of conditions under ZANU-PF and the post-Mugabe government.",
      },
      {
        question: "What investment disputes involve Southern Africa?",
        answer:
          "DRC faces major ICSID disputes in mining (cobalt, copper, coltan). Mozambique has significant LNG-related disputes following the Cabo Delgado insurgency. Zimbabwe faces ongoing land expropriation-related claims. Expert witnesses provide country conditions and regulatory framework evidence.",
      },
    ],
  },
  {
    slug: "north-africa",
    title: "North Africa",
    metaTitle: "North Africa Expert Witness UK | Egypt, Libya, Morocco & Algeria",
    metaDescription:
      "North Africa expert witnesses for UK immigration and ICSID arbitration. Egypt, Libya, Morocco, Algeria, Tunisia, and Mauritania specialists.",
    h1: "North Africa Expert Witness Services for UK Solicitors",
    countries: "Egypt, Libya, Morocco, Algeria, Tunisia, Mauritania",
    keyIssues: [
      "Egyptian political persecution post-Arab Spring",
      "Libya civil war and militia risk",
      "Moroccan political persecution and Sahrawi claims",
      "LGBTQI+ persecution across North Africa",
      "ICSID disputes — Egypt and Algeria most-litigated African states",
    ],
    overview: [
      "North Africa generates asylum claims from political activists, religious minorities, LGBTQI+ individuals, and those fleeing civil conflict — particularly in Libya. Arabic-language expertise and understanding of post-Arab Spring political dynamics are essential for credible expert reports.",
      "Egypt and Algeria are among the most frequently sued African states at ICSID. Egypt faced a spike in claims following the 2011 uprising; Algeria's disputes concentrate in oil and gas. Libya's fragmented governance creates unique challenges for both asylum and arbitration expert evidence.",
    ],
    faqs: [
      {
        question: "What asylum claims arise from North Africa?",
        answer:
          "Egypt generates claims from political activists, Muslim Brotherhood members, journalists, Coptic Christians, and LGBTQI+ individuals. Libya generates claims based on civil war, militia violence, and arbitrary detention. Morocco generates claims from political activists, Western Sahara (Sahrawi) campaigners, and LGBTQI+ individuals.",
      },
      {
        question: "Why are Egypt and Algeria the most litigated African states at ICSID?",
        answer:
          "Egypt faced a spike in ICSID claims following the Arab Spring political upheaval of 2011. Algeria generates disputes primarily in the oil and gas sector. Expert witnesses provide country conditions, legal system analysis, and sector-specific evidence.",
      },
    ],
  },
];

export function getRegion(slug: string) {
  return regions.find((r) => r.slug === slug);
}
