import { ImageResponse } from "next/og";

export const alt = "NigeriaExpert - Nigeria Expert Witness Services UK";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          backgroundColor: "#FFF8F1",
          padding: 72,
          borderLeft: "16px solid #C1124D",
        }}
      >
        <div
          style={{
            fontSize: 22,
            color: "#A34A24",
            marginBottom: 16,
          }}
        >
          UK Tribunals · Country evidence
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#1A1210",
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          NigeriaExpert
        </div>
        <p
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "#5C534C",
            maxWidth: 760,
            lineHeight: 1.35,
          }}
        >
          Nigeria country expert reports for asylum &amp; immigration appeals
        </p>
      </div>
    ),
    { ...size },
  );
}
