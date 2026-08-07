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
          backgroundColor: "#0C1428",
          padding: 72,
          backgroundImage:
            "repeating-linear-gradient(-18deg, transparent, transparent 18px, rgba(255,255,255,0.04) 18px, rgba(255,255,255,0.04) 19px)",
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: "#D96A1F",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          UK Tribunals · Country Evidence
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 500,
            color: "#F4F6FA",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          NigeriaExpert
        </div>
        <p
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "rgba(244,246,250,0.7)",
            maxWidth: 720,
            lineHeight: 1.35,
          }}
        >
          Nigeria country expert witnesses for asylum &amp; immigration appeals
        </p>
      </div>
    ),
    { ...size },
  );
}
