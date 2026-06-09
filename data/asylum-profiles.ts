import type { FAQ } from "@/lib/schema";

export type AsylumProfile = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string[];
  faqs: FAQ[];
  relatedCaseTypes: string[];
};

export const asylumProfiles: AsylumProfile[] = [
  {
    slug: "lgbtq-asylum-nigeria",
    title: "LGBTQ+ Asylum Nigeria",
    metaTitle: "LGBTQ+ Asylum Nigeria Expert Witness UK | SSMPA & SOGIESC CPIN",
    metaDescription:
      "LGBTQ+ asylum Nigeria expert witness for UK tribunals. SSMPA 2013, Sharia law, June 2025 SOGIESC CPIN, HJ (Iran) standard, and state protection analysis.",
    h1: "LGBTQ+ Asylum Nigeria Expert Witness UK",
    content: [
      "Nigeria's Same Sex Marriage (Prohibition) Act 2013 (SSMPA) criminalises same-sex relationships with up to 14 years imprisonment in southern states. In 12 northern states, Sharia law applies, carrying the death penalty for same-sex conduct. Social attitudes remain deeply hostile, and LGBTQ+ individuals face violence from family, community members, and vigilante groups as well as from state actors including police and the judicial system.",
      "The June 2025 updated Home Office CPIN on sexual orientation, gender identity and expression, and sex characteristics (SOGIESC) in Nigeria confirms that state protection is generally unavailable for LGBTQ+ individuals. Expert witnesses assess whether the appellant's specific profile creates a real risk that goes beyond the general CPIN position, applying the HJ (Iran) [2010] UKSC 31 standard on sexuality and the well-founded fear test under the Refugee Convention 1951.",
      "The EUAA Country Guidance Nigeria 2026, published March 2026, reinforces that internal relocation to Lagos or Abuja is not viable for LGBTQ+ Nigerians where persecution is by the state, because SSMPA enforcement applies nationwide. Expert reports address criminalisation frameworks, enforcement practice, family and community violence, NGO protection availability, and the impossibility of internal protection for this profile.",
    ],
    faqs: [
      {
        question: "What is the legal position for LGBTQ+ people in Nigeria?",
        answer:
          "Nigeria's Same Sex Marriage (Prohibition) Act 2013 criminalises same-sex relationships with up to 14 years imprisonment in southern states and death penalty under Sharia law in 12 northern states. The June 2025 updated CPIN on SOGIESC confirms that state protection is generally unavailable for LGBTQ+ individuals in Nigeria. Expert witnesses assess the individual appellant's profile against current country conditions and the HJ (Iran) [2010] standard.",
      },
      {
        question: "What does the SOGIESC CPIN on Nigeria say?",
        answer:
          "The June 2025 CPIN on sexual orientation, gender identity and expression, and sex characteristics in Nigeria confirms that LGBTQ+ individuals face serious risk from both state actors (police, judicial system) and non-state actors (family, community, vigilante groups). Expert witnesses provide independent analysis of whether the appellant's specific profile creates a real risk that goes beyond the general CPIN position.",
      },
    ],
    relatedCaseTypes: ["lgbtq-asylum-nigeria", "asylum-appeal-ftt", "upper-tribunal-nigeria"],
  },
  {
    slug: "ipob-biafra",
    title: "IPOB & Biafra Separatists",
    metaTitle: "IPOB & Biafra Expert Witness UK | April 2026 CPIN South-East Nigeria",
    metaDescription:
      "IPOB and Biafra separatist expert witness for UK asylum tribunals. Proscription, arrest risk, UK diaspora activity, and April 2026 CPIN on separatist groups South-East.",
    h1: "IPOB & Biafra Separatist Expert Witness UK",
    content: [
      "The Indigenous People of Biafra (IPOB) was proscribed as a terrorist organisation by the Nigerian government in September 2017. Since proscription, members, supporters, and associates face real risk of arrest and detention by Nigerian security forces, including the Department of State Services (DSS) and the Nigerian Army. The April 2026 updated Home Office CPIN on separatist groups in South-East Nigeria confirms this risk and distinguishes between high-profile and low-profile membership.",
      "UK diaspora IPOB activity creates additional risk on return. The April 2026 CPIN confirms that individuals with no prior IPOB profile in Nigeria have been arrested at airports for expressing IPOB views, including those whose only connection to the movement is through UK-based demonstrations, online activity, or leadership roles. Expert witnesses assess whether the appellant's UK-based activity would bring them to the attention of Nigerian authorities.",
      "Expert reports address the appellant's individual profile against current conditions in South-East Nigeria, including Imo, Anambra, Abia, Enugu, and Ebonyi states. Reports cite the April 2026 CPIN, EUAA 2026 guidance, and field research on enforcement patterns, detention conditions, and the distinction between IPOB, MASSOB, and other separatist groups in the region.",
    ],
    faqs: [
      {
        question: "What risk do IPOB members face on return to Nigeria?",
        answer:
          "Since IPOB's proscription as a terrorist organisation in September 2017, members, supporters, and associates face real risk of arrest and detention by Nigerian security forces. The April 2026 updated CPIN on separatist groups in South-East Nigeria confirms this risk. Expert witnesses assess the individual's profile, including UK diaspora activity, against current conditions on the ground.",
      },
      {
        question: "Does UK-based IPOB activity create a risk on return?",
        answer:
          "Yes. The April 2026 CPIN confirms that individuals with no prior IPOB profile in Nigeria have been arrested at airports for expressing IPOB views. Expert witnesses assess whether the appellant's UK-based activity (demonstrations, online activity, leadership roles) would bring them to the attention of Nigerian authorities.",
      },
    ],
    relatedCaseTypes: ["ipob-biafra-asylum", "asylum-appeal-ftt", "fresh-claims-nigeria"],
  },
  {
    slug: "boko-haram-northeast",
    title: "Boko Haram & ISWAP North-East",
    metaTitle: "Boko Haram & ISWAP Expert Witness UK | North-East Nigeria",
    metaDescription:
      "Boko Haram and ISWAP expert witness for UK asylum tribunals. North-East Nigeria security situation, subsidiary protection Article 15(c), and EUAA 2026 guidance.",
    h1: "Boko Haram & ISWAP Expert Witness UK | North-East Nigeria",
    content: [
      "Boko Haram and its splinter faction Islamic State West Africa Province (ISWAP) maintain operational presence across North-East Nigeria, including Borno, Yobe, and Adamawa states. As of 2025 to 2026, Boko Haram's JAS faction has launched major offensives against ISWAP, recapturing significant territory in the Lake Chad Basin islands. Both factions target groups not compliant with their ideology.",
      "Groups at risk include women in education or employment, LGBTQ+ individuals, Christians in affected areas, and those perceived as government collaborators. Subsidiary protection under Article 15(c) of the Qualification Directive may apply where there is a serious and individual threat by reason of indiscriminate violence. The EUAA 2026 country guidance confirms that state protection is generally unavailable in North-Eastern states where Boko Haram operates.",
      "Expert witnesses provide current, case-specific analysis of the security situation and risk to individuals from affected areas. Reports address territorial control, faction dynamics between JAS and ISWAP, civilian targeting patterns, and the feasibility of internal relocation within or outside the North-East for the specific appellant profile.",
    ],
    faqs: [
      {
        question: "Who is at risk from Boko Haram and ISWAP in Nigeria?",
        answer:
          "Boko Haram and ISWAP target groups not compliant with their ideology, including women in education or work, LGBTQ+ individuals, Christians in affected areas, and those perceived as government collaborators. The EUAA 2026 country guidance confirms that state protection is generally unavailable in North-Eastern states where Boko Haram operates.",
      },
      {
        question: "What is the current security situation in North-East Nigeria?",
        answer:
          "As of 2025 to 2026, Boko Haram's JAS faction has launched major offensives against ISWAP, recapturing significant territory in the Lake Chad Basin islands. Both factions maintain presence in North-East Nigeria. Expert witnesses provide current, case-specific analysis of the security situation and risk to individuals from affected areas.",
      },
    ],
    relatedCaseTypes: ["asylum-appeal-ftt", "upper-tribunal-nigeria", "deportation-removal-nigeria"],
  },
  {
    slug: "fgm-gbv",
    title: "FGM & Gender-Based Violence",
    metaTitle: "FGM Expert Witness UK | Nigeria Gender-Based Violence Asylum",
    metaDescription:
      "FGM and gender-based violence expert witness for UK asylum tribunals. Nigeria prevalence, VAPP Act 2015, daughter-at-risk claims, and state protection analysis.",
    h1: "FGM & Gender-Based Violence Expert Witness UK | Nigeria",
    content: [
      "Nigeria has one of the highest absolute numbers of women and girls who have undergone female genital mutilation (FGM) globally, with significant variation by state and ethnic group. While FGM is prohibited under the Violence Against Persons (Prohibition) Act 2015 (VAPP Act), enforcement is inconsistent and state protection is generally inadequate in areas where FGM is practised.",
      "Expert witnesses provide community-specific and state-specific analysis of FGM risk and state protection availability. In daughter-at-risk claims, the expert assesses prevalence in the specific ethnic group and state, whether the extended family has indicated intent, whether state protection is realistically available, and whether internal relocation would provide sufficient protection.",
      "Gender-based violence intersects with trafficking claims, forced marriage, and honour-based violence in Nigeria. The updated FGM CPIN confirms inconsistent enforcement of the prohibition. Expert reports address intersectionality with other protection grounds and provide the granular, locality-specific analysis tribunals require under Immigration Tribunal Practice Direction paragraph 10.",
    ],
    faqs: [
      {
        question: "How prevalent is FGM in Nigeria and what is the state's response?",
        answer:
          "Nigeria has one of the highest absolute numbers of women and girls who have undergone FGM globally, with significant variation by state and ethnic group. While FGM is prohibited under the Violence Against Persons (Prohibition) Act 2015, enforcement is inconsistent and state protection is generally inadequate in areas where FGM is practised. Expert witnesses provide community-specific, state-specific analysis of risk and state protection availability.",
      },
      {
        question: "What evidence does an expert provide in a daughter-at-risk FGM case?",
        answer:
          "In cases where a mother fears FGM for her daughter, the expert assesses prevalence of FGM in the specific ethnic group and state, whether the extended family has indicated intent, whether state protection is realistically available, and whether internal relocation would provide sufficient protection.",
      },
    ],
    relatedCaseTypes: ["fgm-asylum", "asylum-appeal-ftt", "fresh-claims-nigeria"],
  },
  {
    slug: "trafficking-juju",
    title: "Trafficking & Juju Rituals",
    metaTitle: "Trafficking & Juju Ritual Expert Witness UK | Nigeria",
    metaDescription:
      "Trafficking and juju ritual expert witness for UK asylum tribunals. Edo State routes, NRM, debt bondage, reintegration risk, and state protection for victims.",
    h1: "Trafficking & Juju Ritual Expert Witness UK | Nigeria",
    content: [
      "Juju rituals are used by Nigerian trafficking networks, particularly those operating from Edo State and Benin City, to bind victims to their traffickers through fear of supernatural consequences for non-compliance or disclosure. Research confirms that juju rituals serve as a tool of enslavement but also provide a means of escape where the hold can be broken with appropriate cultural understanding.",
      "Expert witnesses explain the role of juju in the specific trafficking context of the appellant's case, including debt bondage mechanisms, the relationship between traffickers and spiritual practitioners, and how juju control affects credibility assessments and reintegration planning. Reports address trafficking routes, the National Referral Mechanism (NRM) in the UK, and the parallel protection framework in Nigeria.",
      "Returned trafficking victims face multiple risks in Nigeria: retaliation from trafficking networks, stigma and family rejection, and re-trafficking. State protection and reintegration support are often inadequate, particularly in high-trafficking areas such as Edo State. The updated Home Office CPIN on trafficking of women confirms inadequate state protection for victims.",
    ],
    faqs: [
      {
        question: "What is juju and how is it used in Nigerian trafficking?",
        answer:
          "Juju rituals are used by Nigerian trafficking networks, particularly those operating from Edo State, to bind victims to their traffickers through fear of supernatural consequences for non-compliance or disclosure. Research confirms that juju rituals serve as a tool of enslavement but also provide a means of escape where the hold can be broken. Expert witnesses explain the role of juju in the specific trafficking context of the appellant's case.",
      },
      {
        question: "What is the risk for returned trafficking victims in Nigeria?",
        answer:
          "Returned trafficking victims face multiple risks in Nigeria: retaliation from trafficking networks, stigma and family rejection, and re-trafficking. State protection and reintegration support are often inadequate, particularly in high-trafficking areas. Expert witnesses assess the individual risk profile against current conditions and available support.",
      },
    ],
    relatedCaseTypes: ["trafficking-nrm", "asylum-appeal-ftt", "deportation-removal-nigeria"],
  },
  {
    slug: "actors-of-protection",
    title: "Actors of Protection",
    metaTitle: "Actors of Protection Nigeria Expert Witness UK | State Protection Analysis",
    metaDescription:
      "Actors of protection expert witness for Nigeria asylum cases. Nigerian Police Force, EFCC, August 2024 CPIN, geographic variation, and profile-specific analysis.",
    h1: "Actors of Protection in Nigeria: Expert Witness Analysis UK",
    content: [
      "State protection in Nigeria varies significantly by location and appellant profile. The August 2024 updated Home Office CPIN on actors of protection confirms that protection is generally available in Lagos and Abuja for many profiles, but is limited or unavailable for LGBTQ+ individuals, IPOB members, Boko Haram targets in the North-East, and trafficking victims in high-risk areas.",
      "The Nigerian Police Force has significant limitations, including corruption, resource constraints, and in some cases active complicity in harm against certain groups, particularly LGBTQ+ individuals. Expert witnesses assess both the formal existence of protection mechanisms and their practical effectiveness for the specific appellant profile, including the role of the EFCC, DSS, and state-level security agencies.",
      "Geographic variation is critical. An expert report must distinguish between protection availability in Lagos, Abuja, Port Harcourt, and rural areas in the North-East or South-East. Reports address the HJ (Iran) internal protection test, the sufficiency of state protection under UNHCR guidelines, and whether non-state actors of protection (NGOs, family networks) can realistically substitute for ineffective state protection.",
    ],
    faqs: [
      {
        question: "Can the Nigerian state protect asylum seekers who return?",
        answer:
          "State protection in Nigeria varies significantly by location and profile. The August 2024 updated CPIN on actors of protection confirms that protection is generally available in Lagos and Abuja for many profiles, but is limited or unavailable for LGBTQ+ individuals, IPOB members, Boko Haram targets in the North-East, and trafficking victims. Expert witnesses provide profile-specific, state-specific analysis.",
      },
      {
        question: "What role does the Nigerian Police Force play in protection assessments?",
        answer:
          "The Nigerian Police Force has significant limitations, including corruption, resource constraints, and in some cases active complicity in harm against certain groups (particularly LGBTQ+ individuals). Expert witnesses assess both the formal existence of protection mechanisms and their practical effectiveness for the specific appellant profile.",
      },
    ],
    relatedCaseTypes: ["asylum-appeal-ftt", "upper-tribunal-nigeria", "deportation-removal-nigeria"],
  },
  {
    slug: "internal-relocation-lagos",
    title: "Internal Relocation Lagos & Abuja",
    metaTitle: "Internal Relocation Nigeria Expert Witness UK | Lagos & Abuja Analysis",
    metaDescription:
      "Internal relocation expert witness for Nigeria asylum cases. Lagos and Abuja feasibility, profile-specific analysis, unduly harsh test, and EUAA 2026 guidance.",
    h1: "Internal Relocation in Nigeria: Lagos & Abuja Expert Witness Analysis UK",
    content: [
      "Lagos and Abuja are frequently proposed as internal relocation alternatives in Nigerian asylum cases. Whether relocation is viable depends entirely on the appellant's profile. LGBTQ+ Nigerians generally cannot safely relocate because SSMPA enforcement applies nationwide and the EUAA 2026 country guidance confirms that where persecution is by the state, internal protection is not available.",
      "For other profiles, including some Boko Haram targets and political dissidents, internal relocation to Lagos or Abuja may be feasible depending on the individual's circumstances, profile visibility, and the reach of persecutory actors. Expert witnesses provide profile-specific analysis addressing both safety and the unduly harsh test.",
      "Beyond safety, the tribunal must assess whether it would be unduly harsh to expect the appellant to relocate, considering personal circumstances, support networks, language, employment prospects, and access to healthcare and accommodation. Expert witnesses provide analysis of practical conditions in Lagos and Abuja for the specific profile, including cost of living, housing availability, and employment markets.",
    ],
    faqs: [
      {
        question: "Can LGBTQ+ Nigerians internally relocate to Lagos or Abuja?",
        answer:
          "Internal relocation to Lagos or Abuja is not a viable option for LGBTQ+ Nigerians. The EUAA 2026 country guidance confirms that where persecution is by the state (which applies to LGBTQ+ individuals under SSMPA), internal protection is not available because state enforcement of SSMPA applies nationwide. Expert witnesses address this profile-specific analysis directly.",
      },
      {
        question: 'How does the "unduly harsh" test apply to Nigerian internal relocation?',
        answer:
          "Beyond safety, the tribunal must assess whether it would be unduly harsh to expect the appellant to relocate, considering their personal circumstances, support networks, language, employment prospects, and access to healthcare and accommodation. Expert witnesses provide analysis of the practical conditions in Lagos and Abuja for the specific profile.",
      },
    ],
    relatedCaseTypes: ["asylum-appeal-ftt", "upper-tribunal-nigeria", "deportation-removal-nigeria"],
  },
  {
    slug: "political-persecution",
    title: "Political Persecution",
    metaTitle: "Political Persecution Nigeria Expert Witness UK | #EndSARS & Dissent",
    metaDescription:
      "Political persecution expert witness for Nigeria asylum cases. Journalists, human rights defenders, #EndSARS aftermath, regional tensions, and state protection.",
    h1: "Political Persecution in Nigeria: Expert Witness UK",
    content: [
      "Political persecution in Nigeria affects journalists, human rights defenders, political opposition figures, and activists. State violence against protesters, exemplified by the #EndSARS movement and its aftermath, and ongoing suppression of dissent create real risks for those with a political profile. Federal authorities target high-profile opponents while state-level political violence affects those involved in local political tensions.",
      "Expert witnesses assess the individual's specific political activities and profile against current country conditions, including any public statements, social media activity, membership of political organisations, and involvement in protests or human rights work. Reports address both national and regional dimensions of political persecution.",
      "State protection for political dissidents is inconsistent. While high-profile cases may receive international attention, low-profile activists and journalists in states with acute political tensions face significant risk without effective protection. Expert reports cite current CPINs, EUAA guidance, and field research on enforcement patterns against political opponents.",
    ],
    faqs: [
      {
        question: "What political persecution risks exist in Nigeria?",
        answer:
          "Political persecution in Nigeria affects journalists, human rights defenders, political opposition figures, and activists. State violence against protesters, exemplified by the #EndSARS movement, and ongoing suppression of dissent create real risks for those with a political profile. Expert witnesses assess the individual's specific political activities and profile against current country conditions.",
      },
      {
        question: "Is political persecution in Nigeria limited to specific regions?",
        answer:
          "Political persecution in Nigeria has both national and regional dimensions. At the national level, federal authorities target high-profile opponents. At the state level, local political violence and targeted persecution are significant, particularly in states with acute political tensions.",
      },
    ],
    relatedCaseTypes: ["asylum-appeal-ftt", "fresh-claims-nigeria", "deportation-removal-nigeria"],
  },
];

export function getAsylumProfile(slug: string): AsylumProfile | undefined {
  return asylumProfiles.find((p) => p.slug === slug);
}
