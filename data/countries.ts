import type { FAQ } from "@/lib/schema";

export type Country = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  regionSlug: string;
  overview: string[];
  keyIssues: { title: string; description: string }[];
  countryGuidance?: string;
  investmentContext?: string;
  faqs: FAQ[];
};

export const countries: Country[] = [
  {
    slug: "nigeria",
    name: "Nigeria",
    metaTitle: "Nigeria Expert Witness UK | Asylum, LGBTQI+ & Boko Haram Evidence",
    metaDescription:
      "Nigeria expert witness for UK immigration tribunals. Boko Haram, LGBTQI+ SSMPA, FGM, Biafra/IPOB, and state-specific country condition reports.",
    h1: "Nigeria Expert Witness UK",
    regionSlug: "west-africa",
    overview: [
      "Nigeria is the most populous country in Africa and one of the highest-volume sources of UK asylum claims from the continent. The diversity of persecution grounds — from Boko Haram violence in the north-east to nationwide LGBTQI+ criminalisation — requires state-specific expert analysis rather than generic country reports.",
      "UK tribunals frequently raise internal relocation to Lagos or Abuja in Nigerian cases. Expert witnesses assess whether relocation is genuinely available, considering the nature of the threat, social networks, and whether risks apply nationwide under legislation such as the Same Sex Marriage Prohibition Act 2014.",
    ],
    keyIssues: [
      { title: "Boko Haram and ISWAP", description: "Violence in Borno, Adamawa, and Yobe states; non-state actor persecution and state protection failures." },
      { title: "LGBTQI+ persecution", description: "Same Sex Marriage Prohibition Act 2014 — up to 14 years imprisonment; nationwide application." },
      { title: "FGM risk", description: "Significant prevalence in Edo, Imo, and Ekiti states; risk to daughters and re-infibulation." },
      { title: "Biafra and IPOB", description: "Political persecution of separatist activists and perceived supporters in the south-east." },
      { title: "Delta militancy", description: "Oil region violence and targeting of activists and community leaders." },
    ],
    faqs: [
      {
        question: "What are the main grounds for Nigerian asylum claims in the UK?",
        answer:
          "Nigerian claims arise from: Boko Haram/ISWAP violence in Borno, Adamawa and Yobe states; LGBTQI+ persecution under the Same Sex Marriage Prohibition Act 2014; FGM risk for women and girls; Biafran/IPOB political activism; and Delta region militancy. Expert witnesses provide state-specific analysis — conditions in Lagos differ markedly from Borno State.",
      },
      {
        question: "Is internal relocation to Lagos a viable option in Nigerian cases?",
        answer:
          "The Home Office frequently raises internal relocation to Lagos or Abuja. Expert witnesses assess whether relocation is genuinely available — considering the nature of the threat (state vs non-state), social networks required to access housing and employment, and whether the risk is nationwide (as with LGBTQI+ persecution under national legislation).",
      },
    ],
  },
  {
    slug: "somalia",
    name: "Somalia",
    metaTitle: "Somalia Expert Witness UK | MOJ Country Guidance & Clan Evidence",
    metaDescription:
      "Somalia expert witness for UK tribunals. MOJ country guidance, clan structure, Al-Shabaab, Mogadishu conditions, and Somaliland/Puntland analysis.",
    h1: "Somalia Expert Witness UK",
    regionSlug: "horn-of-africa",
    countryGuidance: "MOJ & Ors (Return to Mogadishu) CG [2014] UKUT 00442",
    overview: [
      "Somalia remains one of the most legally complex asylum jurisdictions in UK tribunals, governed by the leading MOJ country guidance on return to Mogadishu. Expert witnesses must address clan membership, diaspora remittances, Al-Shabaab control, and conditions in IDP camps.",
      "Claims vary significantly between south-central Somalia, Mogadishu, and the relatively more stable regions of Somaliland and Puntland. Expert evidence must be geographically precise and grounded in documented clan structures.",
    ],
    keyIssues: [
      { title: "Al-Shabaab", description: "Control of territory, targeting of civilians, and government counter-insurgency." },
      { title: "Clan structure", description: "Majority and minority clan risks; verification of clan claims against documented structures." },
      { title: "Mogadishu conditions", description: "MOJ framework for assessing return safety including remittances and integration." },
      { title: "Humanitarian crisis", description: "Famine, displacement, and IDP camp conditions." },
      { title: "Regional variation", description: "South-central Somalia vs Somaliland and Puntland — materially different risk profiles." },
    ],
    faqs: [
      {
        question: "What does the MOJ country guidance say about return to Mogadishu?",
        answer:
          "MOJ established that return to Mogadishu depends on individual circumstances including clan membership, access to financial support (diaspora remittances), and the ability to integrate into civil society. It is not automatically unsafe to return — but expert witnesses must analyse each case against MOJ's detailed framework.",
      },
      {
        question: "How do Somalia expert witnesses address clan evidence?",
        answer:
          "Clan membership is central to many Somali asylum claims — minority clans face specific risks from majority clan violence and Al-Shabaab targeting. Expert witnesses verify clan claims against documented clan structures and geographic distributions, providing evidence on whether specific clans face real risk in specific locations.",
      },
    ],
  },
  {
    slug: "eritrea",
    name: "Eritrea",
    metaTitle: "Eritrea Expert Witness UK | National Service & MA Country Guidance",
    metaDescription:
      "Eritrea expert witness for UK asylum appeals. Indefinite military conscription, MA country guidance, religious persecution, and treatment of returnees.",
    h1: "Eritrea Expert Witness UK",
    regionSlug: "horn-of-africa",
    countryGuidance: "MA (draft evaders) Eritrea CG [2019] UKUT 272",
    overview: [
      "Eritrea generates UK asylum claims primarily based on indefinite national military service, political persecution, and risk on return following unlawful departure. MA country guidance [2019] established the framework for assessing draft evader and illegal departure claims.",
      "Religious persecution claims arise from Eritrea's recognition of only four faith groups. Members of unrecognised religions — including Jehovah's Witnesses and Pentecostal Christians — face detention and persecution documented by expert witnesses.",
    ],
    keyIssues: [
      { title: "Indefinite national service", description: "Military draft with no fixed end date; desertion and evasion punished severely." },
      { title: "Illegal departure", description: "Exit without permission; treatment of returnees under MA guidance framework." },
      { title: "Political persecution", description: "Opposition activists, journalists, and perceived government critics." },
      { title: "Religious persecution", description: "Unrecognised faith groups including Jehovah's Witnesses and Evangelical Christians." },
      { title: "Treatment of returnees", description: "Detention, torture, and indefinite national service upon forced return." },
    ],
    faqs: [
      {
        question: "What is the national service issue in Eritrean asylum claims?",
        answer:
          "Eritrea operates an indefinite national service system — the military draft has no fixed end date and may last decades. Persons who evade, desert, or depart Eritrea without official permission face severe punishment on return. MA CG [2019] established the framework for assessing these claims. Expert witnesses provide current analysis of enforcement practices and treatment of returnees.",
      },
      {
        question: "Can Eritreans claim asylum based on religion?",
        answer:
          "Yes. The Eritrean government only recognises four religious groups (Sunni Islam, Eritrean Orthodox, Roman Catholic, Evangelical Lutheran). Members of unrecognised religions — including Jehovah's Witnesses, Pentecostal Christians, and others — face detention and persecution. Expert witnesses document conditions for specific religious communities.",
      },
    ],
  },
  {
    slug: "ethiopia",
    name: "Ethiopia",
    metaTitle: "Ethiopia Expert Witness UK | Tigray, Oromo & Ethnic Conflict Evidence",
    metaDescription:
      "Ethiopia expert witness for UK immigration tribunals. Tigray conflict, Oromo persecution, ethnic federalism, and political opposition cases.",
    h1: "Ethiopia Expert Witness UK",
    regionSlug: "horn-of-africa",
    overview: [
      "Ethiopia's ethnic federal system and recent conflicts — particularly the Tigray war (2020–2022) — have generated significant UK asylum claims. Expert witnesses must assess current conditions following the November 2022 ceasefire and ongoing tensions in Oromia and Amhara regions.",
      "Claims span Tigrayan persecution, Oromo Liberation Front activism, political opposition, and ethnic violence across multiple regions. Granular, ethnicity-specific analysis is essential for credible tribunal evidence.",
    ],
    keyIssues: [
      { title: "Tigray conflict aftermath", description: "Post-ceasefire conditions, accountability, and ongoing risk to ethnic Tigrayans." },
      { title: "Oromo persecution", description: "OLF activism and perceived support; violence in Oromia region." },
      { title: "Amhara tensions", description: "Inter-ethnic violence and government response in Amhara region." },
      { title: "Ethnic federalism", description: "Systemic ethnic targeting across regional states." },
      { title: "Political opposition", description: "Persecution of activists, journalists, and opposition party members." },
    ],
    faqs: [
      {
        question: "What are the main Ethiopian asylum grounds in UK tribunals?",
        answer:
          "Ethiopian claims arise from: Tigray conflict — persecution of Tigrayans and Amhara in conflict zones; Oromo Liberation Front (OLF) activism or perceived support; political opposition persecution; and ethnic violence in Oromia, Amhara, and other regions.",
      },
      {
        question: "How has the Tigray conflict affected Ethiopian asylum claims?",
        answer:
          "The Tigray conflict (2020–2022) generated significant new claims. Expert witnesses assess current conditions in Tigray following the November 2022 ceasefire — including return feasibility, ongoing accountability concerns, and whether ethnic Tigrayans face ongoing risk in other regions.",
      },
    ],
  },
  {
    slug: "sudan",
    name: "Sudan",
    metaTitle: "Sudan Expert Witness UK | Civil War, Darfur & RSF Atrocities",
    metaDescription:
      "Sudan expert witness for UK asylum cases. April 2023 civil war, Darfur genocide, RSF atrocities, and state-specific country condition reports.",
    h1: "Sudan Expert Witness UK",
    regionSlug: "horn-of-africa",
    overview: [
      "Sudan's civil war since April 2023 between the Sudanese Armed Forces and Rapid Support Forces has caused over 8 million internally displaced persons and revived genocide-level atrocities in Darfur. Expert witnesses must provide current, state-specific analysis — earlier country guidance may no longer reflect conditions.",
      "Claims arise from civil war violence, Darfur ethnic targeting, Khartoum urban conflict, and border region instability. The dramatically changed situation since 2023 demands experts with up-to-date field knowledge.",
    ],
    keyIssues: [
      { title: "Civil war (2023–ongoing)", description: "SAF vs RSF conflict; urban warfare in Khartoum and regional capitals." },
      { title: "Darfur atrocities", description: "RSF campaign reviving genocide-level violence against Darfuri communities." },
      { title: "Mass displacement", description: "Over 8 million IDPs; humanitarian catastrophe and access constraints." },
      { title: "Khartoum conditions", description: "Urban warfare, looting, and breakdown of basic services." },
      { title: "Border regions", description: "South Sudan border instability and cross-border ethnic targeting." },
    ],
    faqs: [
      {
        question: "What is the current situation in Sudan for asylum purposes?",
        answer:
          "Sudan entered civil war in April 2023 between the Sudanese Armed Forces (SAF) and the Rapid Support Forces (RSF). The conflict has caused massive displacement — over 8 million internally displaced — and serious atrocities, particularly in Darfur. Expert witnesses provide current analysis of conditions in specific states and the viability of return.",
      },
      {
        question: "Can Sudanese asylum seekers rely on Darfur claims post-2023?",
        answer:
          "The RSF's campaign in Darfur in 2023–2024 has revived genocide-level atrocities. Expert witnesses assess the current risk in specific Darfuri communities and whether country guidance from earlier periods remains reliable given the dramatically changed situation.",
      },
    ],
  },
  {
    slug: "zimbabwe",
    name: "Zimbabwe",
    metaTitle: "Zimbabwe Expert Witness UK | RN Country Guidance & Political Persecution",
    metaDescription:
      "Zimbabwe expert witness for UK tribunals. RN country guidance, ZANU-PF persecution, MDC/CCC supporters, LGBTQI+, and post-Mugabe conditions.",
    h1: "Zimbabwe Expert Witness UK",
    regionSlug: "southern-africa",
    countryGuidance: "RN and Others (Returnees) Zimbabwe CG [2008] UKAIT 00083",
    overview: [
      "Zimbabwe remains a significant source of UK asylum claims, governed by RN country guidance from 2008. Expert witnesses must address whether RN reflects current conditions under Mnangagwa's ZANU-PF government and provide updated political risk analysis.",
      "Claims include political persecution of MDC/CCC supporters, journalist targeting, LGBTQI+ criminalisation, and economic persecution. Expert reports must bridge the gap between dated guidance and present-day Zimbabwe.",
    ],
    keyIssues: [
      { title: "ZANU-PF political persecution", description: "Targeting of opposition supporters, activists, and perceived MDC/CCC members." },
      { title: "RN country guidance", description: "Whether 2008 guidance reflects post-Mugabe and Mnangagwa-era conditions." },
      { title: "Journalist persecution", description: "Media freedom restrictions and targeting of independent journalists." },
      { title: "LGBTQI+ persecution", description: "Criminalisation of same-sex conduct; state and community violence." },
      { title: "Economic persecution", description: "Hyperinflation, unemployment, and denial of livelihood." },
    ],
    faqs: [
      {
        question: "Is Zimbabwe country guidance still current?",
        answer:
          "RN [2008] was decided under Mugabe's government. Zimbabwe's political landscape has changed since 2017 — Mnangagwa's ZANU-PF continues to persecute MDC/CCC supporters, but conditions differ in some respects. Expert witnesses address whether RN guidance reflects current conditions and provide updated analysis of political risk.",
      },
      {
        question: "What are LGBTQI+ risks in Zimbabwe?",
        answer:
          "Same-sex conduct is criminalised in Zimbabwe and LGBTQI+ individuals face persecution from state authorities and communities. Expert witnesses assess current enforcement patterns, risk of detection, and whether internal relocation provides safety.",
      },
    ],
  },
  {
    slug: "democratic-republic-of-congo",
    name: "Democratic Republic of the Congo",
    metaTitle: "DRC Expert Witness UK | Eastern Conflict & Mining Arbitration",
    metaDescription:
      "DRC expert witness for UK asylum and ICSID arbitration. M23 conflict, Kasai violence, ethnic persecution, and mining sector disputes.",
    h1: "DRC Expert Witness UK",
    regionSlug: "southern-africa",
    investmentContext:
      "DRC is a major source of ICSID arbitration in mining — cobalt, copper, and coltan. Expert witnesses provide country conditions, regulatory framework, and African law evidence.",
    overview: [
      "The Democratic Republic of the Congo generates asylum claims from armed conflict in eastern provinces, Kasai violence, and political persecution in Kinshasa. Expert witnesses must address province-specific conditions — North Kivu, South Kivu, and Ituri face materially different risks from the capital.",
      "Simultaneously, DRC is among Africa's most active ICSID jurisdictions in the mining sector. Country conditions experts support fair and equitable treatment and expropriation analysis in billion-dollar mining disputes.",
    ],
    keyIssues: [
      { title: "Eastern DRC conflict", description: "M23, FDLR, and armed group violence in North Kivu, South Kivu, and Ituri." },
      { title: "Kasai violence", description: "Targeting of Tshiluba speakers and Kamuina Nsapu militia atrocities." },
      { title: "Ethnic persecution", description: "Inter-communal violence and government-aligned militia targeting." },
      { title: "Political persecution", description: "Opposition activists and human rights defenders in Kinshasa." },
      { title: "Mining arbitration", description: "ICSID claims in cobalt, copper, and coltan sectors." },
    ],
    faqs: [
      {
        question: "What are the main asylum grounds from the DRC?",
        answer:
          "DRC claims arise from: M23 and armed group violence in eastern provinces (North Kivu, South Kivu, Ituri); political persecution in Kinshasa; Kasai violence against Tshiluba speakers; and ethnic targeting across multiple provinces.",
      },
      {
        question: "What investment disputes involve DRC?",
        answer:
          "DRC is a major source of ICSID arbitration claims in the mining sector — cobalt, copper, and coltan. Expert witnesses provide country conditions, regulatory framework, and African law evidence for mining disputes.",
      },
    ],
  },
  {
    slug: "ghana",
    name: "Ghana",
    metaTitle: "Ghana Expert Witness UK | LGBTQI+ Legislation & Asylum Evidence",
    metaDescription:
      "Ghana expert witness for UK immigration tribunals. LGBTQI+ Human Sexual Rights Bill, political disputes, and energy arbitration.",
    h1: "Ghana Expert Witness UK",
    regionSlug: "west-africa",
    overview: [
      "Ghana has seen a sharp increase in LGBTQI+ asylum claims following parliamentary passage of the Human Sexual Rights and Family Values Bill in 2024, which would criminalise same-sex conduct and LGBTQI+ advocacy with severe penalties if enacted.",
      "Expert witnesses assess both current enforcement and legislative trajectory, alongside political and tribal disputes and obeah/juju-related trafficking claims that arise in UK tribunals.",
    ],
    keyIssues: [
      { title: "LGBTQI+ persecution", description: "Human Sexual Rights and Family Values Bill 2024 — pending criminalisation with severe penalties." },
      { title: "Political disputes", description: "Election-related violence and opposition targeting." },
      { title: "Tribal conflicts", description: "Inter-communal violence in specific regions." },
      { title: "Trafficking", description: "Obeah and juju-related exploitation claims." },
      { title: "Energy arbitration", description: "Offshore petroleum ICSID and commercial disputes." },
    ],
    faqs: [
      {
        question: "Has Ghana's LGBTQI+ situation changed recently?",
        answer:
          "Ghana's parliament passed the Human Sexual Rights and Family Values Bill in 2024, which if enacted would criminalise same-sex conduct and LGBTQI+ advocacy with severe penalties. Expert witnesses assess both the current enforcement position and the trajectory of LGBTQI+ persecution in Ghana.",
      },
      {
        question: "Are there investment arbitration cases involving Ghana?",
        answer:
          "Ghana has faced arbitration claims in the oil and gas sector (offshore petroleum). Expert witnesses provide country conditions and regulatory framework evidence for Ghanaian energy disputes.",
      },
    ],
  },
  {
    slug: "kenya",
    name: "Kenya",
    metaTitle: "Kenya Expert Witness UK | Political Persecution & LGBTQI+ Asylum",
    metaDescription:
      "Kenya expert witness for UK tribunals. Election violence, LGBTQI+ criminalisation, Al-Shabaab, and Somali-Kenyan refugee issues.",
    h1: "Kenya Expert Witness UK",
    regionSlug: "east-africa",
    overview: [
      "Kenya generates UK asylum claims from election-related political violence, LGBTQI+ persecution under criminalising legislation, and Al-Shabaab threats in coastal and north-eastern regions. Kenya is not on the UK's designated safe countries list — cases are assessed individually.",
      "Expert witnesses provide case-specific evidence on state protection availability, internal relocation, and the particular threat faced by each claimant.",
    ],
    keyIssues: [
      { title: "Election-related violence", description: "2007, 2017, and 2022 election cycles; targeting of political activists." },
      { title: "LGBTQI+ persecution", description: "Homosexuality remains criminalised under the Penal Code." },
      { title: "Al-Shabaab", description: "Cross-border attacks in coastal and north-eastern Kenya." },
      { title: "Somali-Kenyan issues", description: "Discrimination and security targeting of ethnic Somali Kenyans." },
      { title: "State protection", description: "Case-specific analysis of government capacity and willingness to protect." },
    ],
    faqs: [
      {
        question: "What asylum claims arise from Kenya?",
        answer:
          "Kenyan claims include: political persecution tied to election violence (particularly 2007, 2017, and 2022 cycles); LGBTQI+ persecution (homosexuality remains criminalised); and Al-Shabaab threats in coastal and northeastern Kenya.",
      },
      {
        question: "Is Kenya treated as a safe country by the Home Office?",
        answer:
          "Kenya is not on the UK's designated safe countries list. The Home Office assesses cases individually. Expert witnesses provide case-specific evidence on whether state protection is available for the particular threat faced.",
      },
    ],
  },
  {
    slug: "uganda",
    name: "Uganda",
    metaTitle: "Uganda Expert Witness UK | Anti-Homosexuality Act 2023 Evidence",
    metaDescription:
      "Uganda expert witness for UK tribunals. Anti-Homosexuality Act 2023, Bobi Wine/NUP persecution, and Museveni government country reports.",
    h1: "Uganda Expert Witness UK",
    regionSlug: "east-africa",
    overview: [
      "Uganda has seen a dramatic increase in LGBTQI+ asylum claims following the Anti-Homosexuality Act 2023, which criminalises same-sex conduct with penalties up to life imprisonment and imposes the death penalty for aggravated homosexuality. The Act's nationwide application makes internal relocation rarely viable.",
      "Political opposition claims from People Power/NUP supporters document abduction, torture, and enforced disappearance. Expert witnesses assess risk by level of political involvement and public profile.",
    ],
    keyIssues: [
      { title: "Anti-Homosexuality Act 2023", description: "Life imprisonment for same-sex conduct; death penalty for aggravated homosexuality." },
      { title: "Political opposition", description: "Bobi Wine/NUP supporters — abduction, torture, enforced disappearance." },
      { title: "Museveni government", description: "Long-standing authoritarian rule and suppression of dissent." },
      { title: "LRA-affected regions", description: "Northern Uganda — legacy conflict and ongoing insecurity." },
      { title: "Internal relocation", description: "Rarely viable for LGBTQI+ claims given nationwide criminalisation." },
    ],
    faqs: [
      {
        question: "What is the Anti-Homosexuality Act 2023 and its impact on asylum claims?",
        answer:
          "Uganda's Anti-Homosexuality Act 2023 criminalises same-sex conduct with penalties up to life imprisonment and imposes the death penalty for aggravated homosexuality. It has significantly expanded LGBTQI+ asylum claims from Uganda. Expert witnesses provide evidence on enforcement, community attitudes, state protection, and internal relocation — all critical given the Act's nationwide application.",
      },
      {
        question: "Can Ugandan political opposition supporters claim asylum?",
        answer:
          "Yes. Supporters of People Power/NUP (Bobi Wine's movement) have faced documented persecution including abduction, torture, and enforced disappearance. Expert witnesses assess risk for specific levels of political involvement and profile.",
      },
    ],
  },
  {
    slug: "guinea",
    name: "Guinea",
    metaTitle: "Guinea Expert Witness UK | Mining Arbitration & FGM Evidence",
    metaDescription:
      "Guinea expert witness for UK asylum and ICSID arbitration. Bauxite mining disputes, FGM prevalence, post-2021 coup, and LGBTQI+ persecution.",
    h1: "Guinea Expert Witness UK",
    regionSlug: "west-africa",
    investmentContext:
      "Guinea is among the most active ICSID jurisdictions in 2025. The Axis International claim is valued at $28.9 billion following military junta mining licence revocations.",
    overview: [
      "Guinea occupies a unique position in UK legal work — simultaneously a major asylum source for FGM and LGBTQI+ claims and the epicentre of African investment treaty arbitration following the 2021 military coup and aggressive mining licence revocations.",
      "Expert witnesses must combine country conditions expertise for asylum with regulatory and Guinean law knowledge for ICSID proceedings worth tens of billions of dollars.",
    ],
    keyIssues: [
      { title: "Mining arbitration", description: "Bauxite sector ICSID claims including Axis International v Guinea ($28.9bn)." },
      { title: "Post-2021 coup", description: "Military junta political persecution and human rights deterioration." },
      { title: "FGM", description: "Among world's highest prevalence rates — over 95% of women and girls." },
      { title: "LGBTQI+ persecution", description: "Criminalisation and community violence." },
      { title: "Licence revocations", description: "2025 mining licence cancellations generating multiple ICSID claims." },
    ],
    faqs: [
      {
        question: "Why is Guinea significant for investment arbitration expert witnesses?",
        answer:
          "Guinea has become one of the most active sites of ICSID arbitration following the military junta's aggressive revocation of mining licences in 2025. The Axis International claim alone is valued at $28.9 billion. Expert witnesses provide country conditions, regulatory framework, and Guinean law evidence for multiple active and pending claims.",
      },
      {
        question: "What FGM evidence is needed in Guinean asylum cases?",
        answer:
          "Guinea has among the world's highest FGM prevalence rates (over 95% of women and girls). Expert witnesses assess: whether FGM has already occurred; risk to daughters; state protection adequacy; and whether internal relocation can provide protection — given the near-universal prevalence across ethnic groups and regions.",
      },
    ],
  },
  {
    slug: "libya",
    name: "Libya",
    metaTitle: "Libya Expert Witness UK | Civil War, Militias & Oil Arbitration",
    metaDescription:
      "Libya expert witness for UK asylum and ICSID arbitration. Civil war, militia violence, migrant detention, and oil sector investment disputes.",
    h1: "Libya Expert Witness UK",
    regionSlug: "north-africa",
    investmentContext:
      "Libya generates significant ICSID and commercial arbitration in oil and gas. Political fragmentation complicates state contract enforcement analysis.",
    overview: [
      "Libya has no functioning central government, divided between rival administrations in Tripoli and the east. Asylum claims arise from civil war violence, militia persecution, arbitrary detention, and for sub-Saharan Africans — racist violence and slavery-like conditions in detention centres.",
      "Expert witnesses must identify which authority controls the claimant's area of origin and what protection, if any, is available. Oil sector arbitration requires analysis of regulatory authority across fragmented governance.",
    ],
    keyIssues: [
      { title: "Civil war and militias", description: "Rival administrations; militia control of territory and resources." },
      { title: "Arbitrary detention", description: "Militia-run detention centres; torture and extortion." },
      { title: "Migrant abuse", description: "Sub-Saharan Africans face racist violence and slavery-like conditions." },
      { title: "Political persecution", description: "Targeting of activists, journalists, and former regime affiliates." },
      { title: "Oil arbitration", description: "ICSID and commercial disputes in fragmented regulatory environment." },
    ],
    faqs: [
      {
        question: "What is the asylum situation from Libya?",
        answer:
          "Libya has no functioning central government and is divided between rival administrations. Asylum claims arise from civil war violence, militia persecution, arbitrary detention, and for sub-Saharan Africans — racist violence and slavery-like conditions. Expert witnesses assess which authority controls the claimant's area of origin and what protection is available.",
      },
      {
        question: "Are there investment disputes involving Libya?",
        answer:
          "Libya generates significant ICSID and commercial arbitration disputes in the oil and gas sector. The political fragmentation makes state contract enforcement complex. Expert witnesses provide evidence on regulatory authority, applicable law, and country conditions.",
      },
    ],
  },
];

export function getCountry(slug: string) {
  return countries.find((c) => c.slug === slug);
}
