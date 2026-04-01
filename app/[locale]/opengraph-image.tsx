import { ImageResponse } from "next/og";

export const alt = "Jamais Plus Édouard — Veille citoyenne sur Édouard Philippe";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#080810",
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Top border accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #ff2233 0%, #ff2233 40%, #00f0ff 70%, transparent 100%)",
          }}
        />

        {/* Grid lines decoration */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(255,34,51,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,34,51,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255,34,51,0.12)",
              border: "1px solid rgba(255,34,51,0.4)",
              color: "#ff2233",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "6px 14px",
              borderRadius: "4px",
            }}
          >
            VEILLE CITOYENNE
          </div>
          <div
            style={{
              backgroundColor: "rgba(0,240,255,0.08)",
              border: "1px solid rgba(0,240,255,0.25)",
              color: "rgba(0,240,255,0.8)",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              padding: "6px 14px",
              borderRadius: "4px",
            }}
          >
            DOCUMENTATION
          </div>
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: "88px",
            fontWeight: 800,
            lineHeight: 1.0,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            marginBottom: "20px",
          }}
        >
          JAMAIS PLUS
          <br />
          <span style={{ color: "#ff2233" }}>ÉDOUARD</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(200,200,220,0.6)",
            fontWeight: 400,
            letterSpacing: "0.02em",
            marginTop: "8px",
            maxWidth: "700px",
            lineHeight: 1.4,
          }}
        >
          Biographie · Controverses · Réseau d&apos;influence · Conflits d&apos;intérêts
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            fontSize: "16px",
            color: "rgba(255,255,255,0.25)",
            fontFamily: "monospace",
            letterSpacing: "0.05em",
          }}
        >
          jamaisplusedouard.fr
        </div>
      </div>
    ),
    { ...size }
  );
}
