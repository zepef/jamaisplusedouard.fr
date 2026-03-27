type TagProps = {
  label: string;
  variant?: "actualite" | "controverse" | "biographie" | "reseau" | "default";
};

const variantStyles = {
  actualite: "tag-actualite",
  controverse: "tag-controverse",
  biographie: "tag-biographie",
  reseau: "text-magenta border-magenta/30 bg-magenta/8",
  default: "text-muted border-glass-border bg-glass",
};

export default function Tag({ label, variant = "default" }: TagProps) {
  return <span className={`tag ${variantStyles[variant]}`}>{label}</span>;
}
