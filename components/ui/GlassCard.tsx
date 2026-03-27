import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "cyan" | "magenta" | "red" | "none";
};

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glow = "none",
}: GlassCardProps) {
  const glowStyles = {
    cyan: "border-glow-cyan",
    magenta: "shadow-[0_0_15px_rgba(255,0,170,0.1)]",
    red: "shadow-[0_0_15px_rgba(255,51,51,0.1)]",
    none: "",
  };

  return (
    <div
      className={`glass rounded-lg p-6 ${hover ? "" : "hover:bg-glass hover:border-glass-border hover:shadow-none"} ${glowStyles[glow]} ${className}`}
    >
      {children}
    </div>
  );
}
