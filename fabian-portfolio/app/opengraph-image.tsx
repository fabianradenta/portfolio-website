import { ImageResponse } from "next/og";
import { profile, seo } from "@/data/site";

export const alt = seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Text-only OG card. To use a designed image instead, drop
// opengraph-image.(png|jpg) into app/ and delete this file.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08080a",
          color: "#ededef",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", fontSize: 22, color: "#8d8d96", letterSpacing: 4 }}>
          SOFTWARE ENGINEER · AI · MOBILE · WEB · EDGE
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 76, letterSpacing: -2, lineHeight: 1.05 }}>
            {profile.name}
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#8d8d96", maxWidth: 900 }}>
            Building practical systems across AI, mobile, web, and edge computing.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#ff7a45" }}>
          Institut Teknologi Bandung
        </div>
      </div>
    ),
    size,
  );
}
