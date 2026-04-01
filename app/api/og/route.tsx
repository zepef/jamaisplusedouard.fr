import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
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
            background:
              "linear-gradient(90deg, #ff2233 0%, #ff2233 40%, #00f0ff 70%, #080810 100%)",
          }}
        />

        {/* Tags */}
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
            display: "flex",
            flexDirection: "column",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              fontSize: "88px",
              fontWeight: 800,
              lineHeight: 1.0,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            JAMAIS PLUS
          </div>
          <div
            style={{
              fontSize: "88px",
              fontWeight: 800,
              lineHeight: 1.0,
              color: "#ff2233",
              letterSpacing: "-0.02em",
            }}
          >
            {"\u00C9DOUARD"}
          </div>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(200,200,220,0.6)",
            fontWeight: 400,
            letterSpacing: "0.02em",
            maxWidth: "700px",
            lineHeight: 1.4,
          }}
        >
          {"Biographie \u00B7 Controverses \u00B7 R\u00E9seau d\u2019influence \u00B7 Conflits d\u2019int\u00E9r\u00EAts"}
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            fontSize: "16px",
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "0.05em",
          }}
        >
          jamaisplusedouard.fr
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=86400, immutable",
      },
    }
  );
}
