/** Google / Ahrefs-friendly limits (character-based). */
export const TITLE_MAX = 60;
export const DESCRIPTION_MAX = 160;
export const DESCRIPTION_MIN = 70;

export function trimTitle(title: string, max = TITLE_MAX): string {
  const t = title.trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 24 ? cut.slice(0, lastSpace) : cut).trim() + "…";
}

export function trimDescription(description: string, max = DESCRIPTION_MAX): string {
  const d = description.trim();
  if (d.length <= max) return d;
  const cut = d.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trim() + "…";
}
