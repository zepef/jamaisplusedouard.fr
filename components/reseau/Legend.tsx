"use client";

type LegendProps = {
  types: { type: string; count: number }[];
  activeTypes: string[];
  onToggle: (type: string) => void;
};

const TYPE_COLORS: Record<string, string> = {
  politique: "#00f0ff",
  financier: "#ff3333",
  professionnel: "#ff00aa",
  mediatique: "#eab308",
  familial: "#39ff14",
};

export default function Legend({ types, activeTypes, onToggle }: LegendProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {types.map(({ type, count }) => {
        const isActive = activeTypes.includes(type);
        const color = TYPE_COLORS[type] || "#555";

        return (
          <button
            key={type}
            onClick={() => onToggle(type)}
            className={`flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-mono transition-all cursor-pointer border ${
              isActive
                ? "border-opacity-40 bg-opacity-10"
                : "border-glass-border bg-glass opacity-40"
            }`}
            style={{
              borderColor: isActive ? `${color}66` : undefined,
              backgroundColor: isActive ? `${color}15` : undefined,
              color: isActive ? color : "#888899",
            }}
          >
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{
                backgroundColor: isActive ? color : "#555",
              }}
            />
            <span className="capitalize">{type}</span>
            <span className="text-muted/50">({count})</span>
          </button>
        );
      })}
    </div>
  );
}
