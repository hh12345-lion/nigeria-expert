export type ProfileGeoBlock =
  | { type: "table"; caption: string; headers: string[]; rows: string[][] }
  | { type: "list"; title: string; items: string[] }
  | { type: "steps"; title: string; steps: string[] };

export const profileGeoContent: Record<string, ProfileGeoBlock[]> = {
  "lgbtq-asylum-nigeria": [
    {
      type: "table",
      caption: "LGBTQ+ Nigeria legal position summary for UK asylum tribunals",
      headers: ["Legal framework", "Position", "State protection"],
      rows: [
        ["SSMPA 2013 (southern states)", "Up to 14 years imprisonment for same-sex conduct", "Generally unavailable (June 2025 SOGIESC CPIN)"],
        ["Sharia law (12 northern states)", "Death penalty for same-sex conduct in applicable states", "Not available where Sharia enforced"],
        ["Non-state persecution", "Family, community, and vigilante violence", "Police often complicit or inactive"],
        ["Internal relocation", "Lagos/Abuja proposed in refusals", "Not viable where persecution is by the state (EUAA 2026)"],
      ],
    },
  ],
  "ipob-biafra": [
    {
      type: "list",
      title: "IPOB risk factors for UK asylum tribunals (April 2026 CPIN)",
      items: [
        "IPOB proscribed as a terrorist organisation in Nigeria since September 2017",
        "Members and supporters face arrest risk in South-East states (Abia, Anambra, Ebonyi, Enugu, Imo)",
        "Diaspora fundraising and activism may be linked to risk on return",
        "MASSOB and other separatist groups assessed under the same CPIN framework",
        "State protection limited for proscribed group members outside formal amnesty processes",
        "Internal relocation to Lagos or Abuja is profile-specific, not automatic",
      ],
    },
  ],
  "trafficking-juju": [
    {
      type: "steps",
      title: "How juju rituals function in Nigerian trafficking networks",
      steps: [
        "Traffickers recruit victims, often from Edo State and Benin City, with promises of work abroad.",
        "Victims are taken to a spiritual practitioner (juju priest) before departure.",
        "Blood, hair, or personal items are used in a binding ritual creating fear of supernatural harm if the victim escapes or reports traffickers.",
        "Debt bondage is layered on top of the ritual obligation, with inflated fees for travel and accommodation.",
        "Victims who disclose face perceived spiritual consequences, affecting credibility assessments in asylum interviews.",
        "Expert evidence explains cultural context, reintegration risk, and inadequate state protection for returned victims.",
      ],
    },
  ],
};

export function getProfileGeoContent(slug: string): ProfileGeoBlock[] {
  return profileGeoContent[slug] ?? [];
}
