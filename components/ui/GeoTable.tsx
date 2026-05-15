import type { GeoTable as GeoTableData } from "@/data/geo-tables";
import { ResponsiveTableWrap } from "./ResponsiveTableWrap";

export function GeoTable({ table }: { table: GeoTableData }) {
  return (
    <figure className="my-8 min-w-0">
      <ResponsiveTableWrap>
        <table className="w-full min-w-[520px] border-collapse text-left text-sm">
          <caption className="mb-3 px-3 pt-3 text-left text-base font-semibold text-[#0D3B2E] sm:px-0 sm:pt-0">
            {table.caption}
          </caption>
          <thead>
            <tr className="border-b-2 border-[#0D3B2E] bg-[#F7F9F7]">
              {table.headers.map((h) => (
                <th key={h} scope="col" className="whitespace-nowrap p-3 font-semibold text-[#0D3B2E]">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i} className="border-b border-[#D1E3D8]">
                {row.map((cell, j) => (
                  <td key={j} className="p-3 text-[#374151]">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </ResponsiveTableWrap>
      {table.source && (
        <figcaption className="mt-2 text-xs text-[#374151]/80">Source: {table.source}</figcaption>
      )}
    </figure>
  );
}
