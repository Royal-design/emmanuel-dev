import { ImageResponse } from "next/og";

/* eslint-disable @next/next/no-img-element */

export const runtime = "edge";
export const alt = "Emmanuel Olowookere - Frontend Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#08090f",
          color: "#f8fafc",
          padding: "72px",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#a5b4fc",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            React / Next.js / TypeScript
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1,
            }}
          >
            <span>Emmanuel</span>
            <span>Olowookere</span>
          </div>
          <div
            style={{
              color: "#cbd5e1",
              fontSize: 34,
              lineHeight: 1.35,
              maxWidth: 680,
            }}
          >
            Frontend engineer building fast, accessible web applications and AI
            product interfaces.
          </div>
        </div>
        <div
          style={{
            width: 300,
            height: 300,
            borderRadius: 48,
            overflow: "hidden",
            border: "6px solid #6366f1",
            background: "#111827",
            display: "flex",
          }}
        >
          <img
            src="https://emmanuel-developer.vercel.app/avatar.png"
            alt="Emmanuel Olowookere"
            width={300}
            height={300}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    ),
    size
  );
}
