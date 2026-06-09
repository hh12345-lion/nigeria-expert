import type { FAQ } from "@/lib/schema";

export type ServicePhase = {
  phase: string;
  whatWeDo: string;
  deliverable: string;
};

export type Service = {
  id: string;
  title: string;
  navLabel: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  content: string[];
  relatedHref: string;
  methodology: ServicePhase[];
  faqs: FAQ[];
};

export const services: Service[] = [
  {
    id: "country-condition-reports",
    title: "Country Condition Reports (General Nigeria)",
    navLabel: "Country Condition Reports",
    description:
      "Comprehensive Nigeria country condition reports for asylum appeals, covering state protection, internal relocation, and profile-specific risk analysis.",
    metaTitle: "Nigeria Country Condition Reports UK | Asylum Expert Evidence",
    metaDescription:
      "CPR Part 35 Nigeria country condition reports for UK asylum and immigration tribunals. State protection, internal relocation, and profile-specific analysis.",
    content: [
      "Nigeria country condition reports provide the independent, authoritative evidence UK immigration tribunals require to assess risk on return, state protection, and internal relocation for Nigerian asylum claimants.",
      "Reports address the specific factual matrix of each case, citing Home Office CPINs, EUAA Country Guidance Nigeria 2026, UNHCR sources, and field research. All reports comply with Immigration Tribunal Practice Direction paragraph 10.",
    ],
    relatedHref: "/asylum-profiles/actors-of-protection",
    methodology: [
      { phase: "Case scoping", whatWeDo: "Identify asylum profile, relevant CPINs, and claim grounds", deliverable: "Scope confirmation and expert match" },
      { phase: "Research", whatWeDo: "Field research, Home Office COI, UNHCR, and primary sources", deliverable: "Source bibliography" },
      { phase: "Report drafting", whatWeDo: "OSCOLA-cited report addressing the specific claim matrix", deliverable: "Practice Direction compliant expert report" },
    ],
    faqs: [
      {
        question: "What should a Nigeria country condition report include?",
        answer:
          "Reports address profile-specific risk, state protection analysis, internal relocation feasibility, and consistency with current CPINs and EUAA 2026 guidance, with OSCOLA-cited sources and field research.",
      },
      {
        question: "How long does a standard Nigeria country condition report take?",
        answer: "Typically 2 to 3 weeks from instruction. Urgent turnaround (5 business days) may be available subject to expert availability.",
      },
      {
        question: "Are Nigeria country condition reports Legal Aid compatible?",
        answer: "Yes. Most reports in asylum proceedings are Legal Aid funded. LAA prior authority is required before instruction.",
      },
    ],
  },
  {
    id: "lgbtq-asylum",
    title: "LGBTQ+ Asylum Reports",
    navLabel: "LGBTQ+ Asylum Reports",
    description:
      "Specialist reports on SSMPA 2013, Sharia law in northern states, June 2025 SOGIESC CPIN, social attitudes, and state protection.",
    metaTitle: "LGBTQ+ Nigeria Asylum Expert Reports UK | SSMPA & SOGIESC CPIN",
    metaDescription:
      "LGBTQ+ Nigeria asylum expert reports for UK tribunals. SSMPA 2013, June 2025 SOGIESC CPIN, HJ (Iran) standard, and internal relocation analysis.",
    content: [
      "LGBTQ+ asylum claims from Nigeria require specialist expert evidence on SSMPA 2013, Sharia law enforcement in northern states, social attitudes, and the June 2025 updated SOGIESC CPIN.",
      "Expert reports assess whether the appellant's specific profile creates a real risk beyond the general CPIN position, consistent with the HJ (Iran) [2010] standard.",
    ],
    relatedHref: "/asylum-profiles/lgbtq-asylum-nigeria",
    methodology: [
      { phase: "Legal framework", whatWeDo: "Analyse SSMPA, Sharia law, and enforcement practice", deliverable: "Legislative analysis section" },
      { phase: "Risk assessment", whatWeDo: "Community violence, state protection, NGO availability", deliverable: "Risk on return analysis" },
      { phase: "Report", whatWeDo: "HJ (Iran) consistent country conditions report", deliverable: "Tribunal-ready expert report" },
    ],
    faqs: [
      {
        question: "How do LGBTQ+ expert reports approach sexuality?",
        answer:
          "Experts provide country conditions context only. They do not determine the claimant's sexuality. Reports address criminalisation, enforcement, and risk on return under the HJ (Iran) standard.",
      },
      {
        question: "What does the June 2025 SOGIESC CPIN say?",
        answer:
          "The CPIN confirms that LGBTQ+ individuals face serious risk from state and non-state actors, and that state protection is generally unavailable in Nigeria.",
      },
      {
        question: "Can LGBTQ+ Nigerians internally relocate?",
        answer:
          "No. The EUAA 2026 guidance confirms internal protection is not available where persecution is by the state, because SSMPA enforcement applies nationwide.",
      },
    ],
  },
  {
    id: "ipob-biafra-risk",
    title: "IPOB/Biafra Risk Assessment",
    navLabel: "IPOB/Biafra Risk Assessment",
    description:
      "Profile-specific risk assessment for IPOB members, supporters, and associates, including UK diaspora activity under the April 2026 CPIN.",
    metaTitle: "IPOB Biafra Risk Assessment Expert Reports UK | April 2026 CPIN",
    metaDescription:
      "IPOB and Biafra risk assessment expert reports for UK tribunals. Proscription, arrest risk, UK diaspora activity, and April 2026 CPIN South-East Nigeria.",
    content: [
      "IPOB was proscribed as a terrorist organisation in September 2017. The April 2026 updated CPIN on separatist groups in South-East Nigeria confirms arrest and detention risk for members, supporters, and associates.",
      "Expert reports assess the individual's profile, including UK diaspora activity, against current enforcement patterns in Imo, Anambra, Abia, Enugu, and Ebonyi states.",
    ],
    relatedHref: "/asylum-profiles/ipob-biafra",
    methodology: [
      { phase: "Profile analysis", whatWeDo: "Assess IPOB connection, visibility, and UK activity", deliverable: "Profile risk summary" },
      { phase: "Country research", whatWeDo: "Current CPIN, enforcement patterns, airport interceptions", deliverable: "Country conditions analysis" },
      { phase: "Report", whatWeDo: "Profile-specific risk on return assessment", deliverable: "Tribunal-ready expert report" },
    ],
    faqs: [
      {
        question: "What risk do IPOB members face on return to Nigeria?",
        answer:
          "Since proscription in September 2017, members, supporters, and associates face real risk of arrest and detention. The April 2026 CPIN confirms this risk for both high-profile and low-profile individuals.",
      },
      {
        question: "Does UK-based IPOB activity create a risk on return?",
        answer:
          "Yes. The April 2026 CPIN confirms individuals with no prior IPOB profile in Nigeria have been arrested at airports for expressing IPOB views.",
      },
      {
        question: "How do experts distinguish IPOB from other separatist groups?",
        answer:
          "Reports address IPOB specifically, distinguishing it from MASSOB and other South-East separatist movements, with profile-specific analysis.",
      },
    ],
  },
  {
    id: "fgm-expert-reports",
    title: "FGM Expert Reports",
    navLabel: "FGM Expert Reports",
    description:
      "FGM prevalence analysis by state and ethnic group, VAPP Act 2015 enforcement, daughter-at-risk claims, and state protection assessment.",
    metaTitle: "FGM Nigeria Expert Reports UK | Gender-Based Violence Evidence",
    metaDescription:
      "FGM Nigeria expert reports for UK asylum tribunals. Prevalence by state and ethnic group, VAPP Act, daughter-at-risk claims, and state protection.",
    content: [
      "Nigeria has one of the highest absolute numbers of FGM cases globally. Expert reports provide community-specific and state-specific prevalence analysis, not national generalisations.",
      "Reports address VAPP Act 2015 enforcement, daughter-at-risk claims, and whether state protection is realistically available in the appellant's specific locality.",
    ],
    relatedHref: "/asylum-profiles/fgm-gbv",
    methodology: [
      { phase: "Prevalence analysis", whatWeDo: "State, ethnic, and regional FGM data", deliverable: "Prevalence profile" },
      { phase: "Risk assessment", whatWeDo: "Ongoing risk, daughters at risk, state protection", deliverable: "Risk analysis" },
      { phase: "Report", whatWeDo: "Tailored FGM expert report", deliverable: "Practice Direction compliant report" },
    ],
    faqs: [
      {
        question: "What FGM evidence do expert reports address?",
        answer:
          "Prevalence by state and ethnic group, VAPP Act enforcement, daughter-at-risk analysis, state protection availability, and internal relocation feasibility.",
      },
      {
        question: "Can a claim succeed if FGM has already occurred?",
        answer: "Yes. Claims can succeed where prospective risk exists, including daughters at risk or ongoing gender-based violence.",
      },
      {
        question: "How prevalent is FGM in Nigeria?",
        answer:
          "Nigeria has among the highest absolute numbers globally, with significant variation by state and ethnic group. Reports provide locality-specific analysis.",
      },
    ],
  },
  {
    id: "trafficking-juju-reports",
    title: "Trafficking & Juju Reports",
    navLabel: "Trafficking & Juju Reports",
    description:
      "Expert evidence on juju ritual control in trafficking networks, Edo State routes, NRM context, and reintegration risk.",
    metaTitle: "Trafficking & Juju Nigeria Expert Reports UK | NRM Evidence",
    metaDescription:
      "Trafficking and juju ritual expert reports for UK tribunals. Edo State routes, NRM context, reintegration risk, and state protection for victims.",
    content: [
      "Trafficking cases from Nigeria frequently involve juju ritual control, particularly from Edo State and Benin City networks. Expert witnesses explain the cultural and psychological mechanism tribunals need to assess credibility.",
      "Reports address re-trafficking risk, stigma, family rejection, and inadequate state protection for returned victims in high-trafficking areas.",
    ],
    relatedHref: "/asylum-profiles/trafficking-juju",
    methodology: [
      { phase: "Context analysis", whatWeDo: "Juju mechanism, trafficking route, network structure", deliverable: "Trafficking context summary" },
      { phase: "Risk assessment", whatWeDo: "Re-trafficking, stigma, state protection on return", deliverable: "Return risk analysis" },
      { phase: "Report", whatWeDo: "Cultural context and country conditions report", deliverable: "Tribunal-ready expert report" },
    ],
    faqs: [
      {
        question: "What is juju and how is it used in Nigerian trafficking?",
        answer:
          "Juju rituals bind victims through fear of supernatural consequences. Experts explain this mechanism and its effect on credibility assessments without sensationalising the practice.",
      },
      {
        question: "What is the re-trafficking risk for returned victims?",
        answer:
          "Returned victims face retaliation from networks, stigma, family rejection, and re-trafficking. State protection is often inadequate in high-trafficking areas such as Edo State.",
      },
      {
        question: "How do juju reports support NRM cases?",
        answer:
          "Expert reports complement NRM decisions by addressing country conditions on return and explaining why victims may fear disclosure due to juju control.",
      },
    ],
  },
  {
    id: "cpin-challenge",
    title: "CPIN Challenge Reports",
    navLabel: "CPIN Challenge Reports",
    description:
      "Independent analysis challenging Home Office CPIN findings with field research and profile-specific assessment beyond generic CPIN positions.",
    metaTitle: "Nigeria CPIN Challenge Expert Reports UK | Independent Analysis",
    metaDescription:
      "Challenge Home Office Nigeria CPIN findings with independent expert reports. Field research, updated evidence, and profile-specific analysis for UK tribunals.",
    content: [
      "CPIN challenge reports provide independent analysis where the Home Office CPIN position does not reflect the appellant's specific profile or where country conditions have materially changed.",
      "Common challenge areas include actors of protection (August 2024 CPIN), internal relocation to Lagos/Abuja, SOGIESC (June 2025 CPIN), and separatist groups (April 2026 CPIN).",
    ],
    relatedHref: "/cpin-country-guidance",
    methodology: [
      { phase: "CPIN review", whatWeDo: "Identify relevant CPIN findings and gaps", deliverable: "CPIN analysis memo" },
      { phase: "Independent research", whatWeDo: "Field research, NGO reports, updated country evidence", deliverable: "Challenge evidence base" },
      { phase: "Report", whatWeDo: "Profile-specific analysis beyond CPIN generalisations", deliverable: "CPIN challenge expert report" },
    ],
    faqs: [
      {
        question: "When should solicitors instruct a CPIN challenge report?",
        answer:
          "When the appellant's profile differs from the general CPIN position, when CPINs are outdated, or when field research contradicts Home Office findings on state protection or internal relocation.",
      },
      {
        question: "Can experts simply reproduce CPIN content?",
        answer:
          "No. Reports that reproduce CPIN without independent analysis fail the standard in the Adam Pipe October 2025 guide. Challenge reports must provide independent, sourced analysis.",
      },
      {
        question: "Which Nigeria CPINs are most frequently challenged?",
        answer:
          "Actors of protection (August 2024), SOGIESC (June 2025), separatist groups South-East (April 2026), and internal relocation findings.",
      },
    ],
  },
  {
    id: "internal-relocation-analysis",
    title: "Internal Relocation Analysis",
    navLabel: "Internal Relocation Analysis",
    description:
      "Profile-specific analysis of internal relocation to Lagos, Abuja, and other cities, addressing safety and the unduly harsh test.",
    metaTitle: "Nigeria Internal Relocation Expert Analysis UK | Lagos & Abuja",
    metaDescription:
      "Internal relocation expert analysis for Nigeria asylum cases. Lagos and Abuja feasibility, unduly harsh test, and EUAA 2026 guidance.",
    content: [
      "Internal relocation to Lagos or Abuja is frequently proposed in Nigerian asylum cases. Whether relocation is viable depends entirely on the appellant's profile and personal circumstances.",
      "Expert reports address both safety and the unduly harsh test, considering support networks, employment prospects, accommodation, and healthcare access in the proposed relocation city.",
    ],
    relatedHref: "/asylum-profiles/internal-relocation-lagos",
    methodology: [
      { phase: "Profile assessment", whatWeDo: "Identify persecutory actors and national reach", deliverable: "Profile relocation summary" },
      { phase: "City analysis", whatWeDo: "Lagos/Abuja conditions, cost of living, protection availability", deliverable: "City-specific analysis" },
      { phase: "Report", whatWeDo: "Safety and unduly harsh test conclusion", deliverable: "Internal relocation expert report" },
    ],
    faqs: [
      {
        question: "Can LGBTQ+ Nigerians internally relocate to Lagos or Abuja?",
        answer:
          "No. Where persecution is by the state under SSMPA, internal protection is not available because enforcement applies nationwide per EUAA 2026 guidance.",
      },
      {
        question: "How does the unduly harsh test apply?",
        answer:
          "Beyond safety, tribunals assess whether relocation would be unduly harsh considering personal circumstances, support networks, language, employment, and accommodation.",
      },
      {
        question: "For which profiles might internal relocation be viable?",
        answer:
          "For some Boko Haram targets and certain political dissidents, relocation to Lagos or Abuja may be feasible depending on profile visibility and persecutory reach.",
      },
    ],
  },
  {
    id: "oral-evidence",
    title: "Expert Witness Oral Evidence",
    navLabel: "Oral Evidence",
    description:
      "Tribunal attendance and oral evidence for country guidance cases, Upper Tribunal proceedings, and directed expert attendance.",
    metaTitle: "Nigeria Expert Witness Oral Evidence UK | Tribunal Attendance",
    metaDescription:
      "Nigeria expert witness oral evidence and tribunal attendance for country guidance cases, Upper Tribunal proceedings, and directed expert evidence.",
    content: [
      "Oral evidence is most common in Upper Tribunal country guidance cases or where the tribunal directs expert attendance. NigeriaExpert experts are experienced in giving evidence and cross-examination on Nigeria country conditions.",
      "Experts prepare for oral evidence by reviewing the report, letter of instruction, tribunal bundle, and anticipated cross-examination on methodology and sources.",
    ],
    relatedHref: "/case-types/upper-tribunal-nigeria",
    methodology: [
      { phase: "Preparation", whatWeDo: "Review report, bundle, and anticipated questions", deliverable: "Oral evidence preparation" },
      { phase: "Tribunal attendance", whatWeDo: "Give evidence and respond to cross-examination", deliverable: "Oral evidence at hearing" },
      { phase: "Follow-up", whatWeDo: "Written answers if directed post-hearing", deliverable: "Supplementary written responses" },
    ],
    faqs: [
      {
        question: "When is oral evidence required for Nigeria cases?",
        answer:
          "Most commonly in Upper Tribunal country guidance cases or where the tribunal directs. First-tier Tribunal cases may also require oral evidence on complex country guidance points.",
      },
      {
        question: "How should solicitors prepare experts for oral evidence?",
        answer:
          "Provide the full tribunal bundle, grounds of appeal, Home Office decision, and any country guidance decisions. Confirm hearing date and format (in person or video) well in advance.",
      },
      {
        question: "Is there an additional fee for tribunal attendance?",
        answer: "Yes. Oral evidence fees are quoted separately based on hearing duration, preparation time, and travel if required.",
      },
    ],
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
