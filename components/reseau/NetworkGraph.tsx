"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import * as d3 from "d3";
import type { PersonneReseau, Centroide } from "@/lib/seed-data";

type NetworkNode = PersonneReseau & {
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
  isCentroide?: boolean;
  centroideId?: Centroide;
};

type NetworkLink = {
  source: NetworkNode | string;
  target: NetworkNode | string;
  typeLien: string;
  isCentroideLink?: boolean;
};

type Props = {
  personnes: PersonneReseau[];
  activeTypes: string[];
};

const TYPE_COLORS: Record<string, string> = {
  politique: "#00f0ff",
  financier: "#ff3333",
  professionnel: "#ff00aa",
  mediatique: "#eab308",
  familial: "#39ff14",
};

const CENTROIDE_COLORS: Record<Centroide, string> = {
  juppe: "#ffffff",
  philippe: "#00f0ff",
  raffarin: "#ff8800",
  villepin: "#cc44ff",
};

const CENTROIDE_LABELS: Record<Centroide, string> = {
  juppe: "AJ",
  philippe: "EP",
  raffarin: "JPR",
  villepin: "DDV",
};

// Losange : Juppé (haut/parrain), Philippe (droite), Villepin (gauche), Raffarin (bas/plaque tournante)
const CENTROIDES: { id: Centroide; node: PersonneReseau }[] = [
  {
    id: "juppe",
    node: {
      nom: "Alain Juppé",
      slug: "alain-juppe",
      role: "Le parrain — Conseil constitutionnel — YL FAF 1982",
      description:
        "Parrain de tout l'écosystème. La « Juppéie » forme l'épine dorsale d'Horizons. Neutralisé au CC mais pouvoir résiduel triple : institutionnel, symbolique, réticulaire.",
      typeLien: "centre",
      partiPolitique: "CC (ex-UMP/LR)",
    },
  },
  {
    id: "philippe",
    node: {
      nom: "Édouard Philippe",
      slug: "edouard-philippe",
      role: "Candidat 2027 — héritier opérationnel — réseau institutionnel (FCF, FAF)",
      description:
        "Premier ministre 2017–2020, maire du Havre, président d'Horizons. Héritier opérationnel de la Juppéie. Réseau chinois institutionnel via la FCF.",
      typeLien: "centre",
      partiPolitique: "Horizons",
    },
  },
  {
    id: "villepin",
    node: {
      nom: "Dominique de Villepin",
      slug: "dominique-de-villepin",
      role: "Candidat probable 2027 — réseau privé multipolaire",
      description:
        "Premier ministre 2005–2007. Réseau chinois privé et opaque. Activités en Chine, Qatar, Russie, Golfe. Concurrent direct de Philippe.",
      typeLien: "centre",
    },
  },
  {
    id: "raffarin",
    node: {
      nom: "Jean-Pierre Raffarin",
      slug: "jean-pierre-raffarin",
      role: "Plaque tournante — relie Philippe et Villepin vers la Chine",
      description:
        "Premier ministre 2002–2005, co-parrain FCF, membre Horizons, représentant officiel pour la Chine. Alerté par la DGSI. Médaille de l'Amitié de Xi Jinping.",
      typeLien: "centre",
      partiPolitique: "Horizons",
    },
  },
];

// Liens inter-centroïdes : pas tous reliés — seulement les connexions documentées
const CENTROIDE_LINKS: [Centroide, Centroide][] = [
  ["juppe", "philippe"], // Filiation directe : mentor → héritier
  ["juppe", "villepin"], // Groupe J (1979), dircab Quai d'Orsay (1993)
  ["juppe", "raffarin"], // Chiraquisme commun, co-parrainage
  ["philippe", "raffarin"], // Horizons, FCF, réseau sino-français
  ["raffarin", "villepin"], // Parcours miroirs post-Matignon vers la Chine
  // philippe-villepin : PAS de lien direct documenté
];

function getCentroideForNode(
  p: PersonneReseau
): Centroide | Centroide[] | null {
  if (p.rattachement) return p.rattachement;
  // Default heuristic
  if (p.sousReseaux?.includes("villepin")) return "villepin";
  if (p.sousReseaux?.includes("chiraquien") && !p.sousReseaux?.includes("young-leaders") && !p.sousReseaux?.includes("matignon"))
    return "juppe";
  if (
    p.sousReseaux?.includes("sino-francais") &&
    !p.sousReseaux?.includes("young-leaders") &&
    !p.sousReseaux?.includes("matignon") &&
    !p.sousReseaux?.includes("le-havre")
  )
    return "raffarin";
  return "philippe";
}

export default function NetworkGraph({ personnes, activeTypes }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<NetworkNode | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const buildGraph = useCallback(() => {
    if (!svgRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = Math.max(600, Math.min(900, width * 0.75));

    const filtered = personnes.filter(
      (p) =>
        activeTypes.includes(p.typeLien) &&
        !CENTROIDES.some((c) => c.node.slug === p.slug)
    );

    // Losange layout: Juppé (top), Philippe (right), Villepin (left), Raffarin (bottom)
    const cx = width / 2;
    const cy = height / 2;
    const rx = Math.min(width, height) * 0.28;
    const ry = Math.min(width, height) * 0.3;

    const centroidePositions: Record<Centroide, { x: number; y: number }> = {
      juppe: { x: cx, y: cy - ry },           // Top
      philippe: { x: cx + rx, y: cy },         // Right
      villepin: { x: cx - rx, y: cy },         // Left
      raffarin: { x: cx, y: cy + ry },         // Bottom
    };

    const centroideNodes: NetworkNode[] = CENTROIDES.map((c) => ({
      ...c.node,
      isCentroide: true,
      centroideId: c.id,
      x: centroidePositions[c.id].x,
      y: centroidePositions[c.id].y,
      fx: centroidePositions[c.id].x,
      fy: centroidePositions[c.id].y,
    }));

    const satelliteNodes: NetworkNode[] = filtered.map((p) => ({ ...p }));
    const allNodes: NetworkNode[] = [...centroideNodes, ...satelliteNodes];

    // Build links
    const links: NetworkLink[] = [];

    // Inter-centroïde links
    for (const [a, b] of CENTROIDE_LINKS) {
      const slugA = CENTROIDES.find((c) => c.id === a)!.node.slug;
      const slugB = CENTROIDES.find((c) => c.id === b)!.node.slug;
      links.push({
        source: slugA,
        target: slugB,
        typeLien: "chiraquien",
        isCentroideLink: true,
      });
    }

    // Satellite → centroïde links
    for (const p of filtered) {
      const rattachement = getCentroideForNode(p);
      const targets = Array.isArray(rattachement)
        ? rattachement
        : rattachement
          ? [rattachement]
          : ["philippe" as Centroide];

      for (const target of targets) {
        const centroide = CENTROIDES.find((c) => c.id === target);
        if (centroide) {
          links.push({
            source: centroide.node.slug,
            target: p.slug,
            typeLien: p.typeLien,
          });
        }
      }
    }

    // Clear previous
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`);

    // Defs
    const defs = svg.append("defs");

    const glowFilter = defs.append("filter").attr("id", "glow");
    glowFilter.append("feGaussianBlur").attr("stdDeviation", "3").attr("result", "coloredBlur");
    const feMerge = glowFilter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "coloredBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    const strongGlow = defs.append("filter").attr("id", "strong-glow");
    strongGlow.append("feGaussianBlur").attr("stdDeviation", "5").attr("result", "coloredBlur");
    const feMerge2 = strongGlow.append("feMerge");
    feMerge2.append("feMergeNode").attr("in", "coloredBlur");
    feMerge2.append("feMergeNode").attr("in", "SourceGraphic");

    // Zoom container
    const g = svg.append("g");

    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.2, 4])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);

    // Simulation
    const simulation = d3
      .forceSimulation(allNodes as d3.SimulationNodeDatum[])
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d: any) => d.slug)
          .distance((d: any) => {
            if (d.isCentroideLink) return rx * 1.8;
            const target = typeof d.target === "string" ? d.target : d.target.slug;
            const p = filtered.find((f) => f.slug === target);
            const rattachement = p ? getCentroideForNode(p) : null;
            const isMulti = Array.isArray(rattachement);
            return isMulti ? 80 : 120;
          })
      )
      .force("charge", d3.forceManyBody().strength(-180))
      .force("center", d3.forceCenter(cx, cy).strength(0.03))
      .force("collision", d3.forceCollide().radius(30));

    // Links
    const link = g
      .append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", (d) => {
        if (d.isCentroideLink) return "#ffffff";
        return TYPE_COLORS[d.typeLien] || "#555";
      })
      .attr("stroke-opacity", (d) => (d.isCentroideLink ? 0.12 : 0.22))
      .attr("stroke-width", (d) => (d.isCentroideLink ? 1.8 : 1))
      .attr("stroke-dasharray", (d) => {
        if (d.isCentroideLink) return "8 4";
        if (d.typeLien === "mediatique") return "4 2";
        return "none";
      })
      .attr("filter", (d) => (d.isCentroideLink ? "url(#strong-glow)" : "none"));

    // Nodes
    const node = g
      .append("g")
      .selectAll("g")
      .data(allNodes)
      .join("g")
      .attr("cursor", "pointer")
      .call(
        d3
          .drag<SVGGElement, NetworkNode>()
          .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on("drag", (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            if (d.isCentroide) {
              const pos = centroidePositions[d.centroideId!];
              d.fx = pos.x;
              d.fy = pos.y;
            } else {
              d.fx = null;
              d.fy = null;
            }
          }) as any
      );

    // Node circles
    node
      .append("circle")
      .attr("r", (d) => (d.isCentroide ? 24 : 9))
      .attr("fill", (d) => {
        if (d.isCentroide) return "#0a0a0f";
        return `${TYPE_COLORS[d.typeLien] || "#555"}15`;
      })
      .attr("stroke", (d) => {
        if (d.isCentroide) return CENTROIDE_COLORS[d.centroideId!];
        return TYPE_COLORS[d.typeLien] || "#555";
      })
      .attr("stroke-width", (d) => (d.isCentroide ? 2.5 : 1))
      .attr("filter", (d) => (d.isCentroide ? "url(#glow)" : "none"));

    // Centroïde inner label
    node
      .filter((d) => !!d.isCentroide)
      .append("text")
      .text((d) => CENTROIDE_LABELS[d.centroideId!])
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("fill", (d) => CENTROIDE_COLORS[d.centroideId!])
      .attr("font-size", "9px")
      .attr("font-weight", "bold")
      .attr("font-family", "var(--font-geist-mono), monospace");

    // Node labels (below)
    node
      .append("text")
      .text((d) => {
        if (d.isCentroide) return d.nom;
        return d.nom.length > 18 ? d.nom.slice(0, 16) + "..." : d.nom;
      })
      .attr("text-anchor", "middle")
      .attr("dy", (d) => (d.isCentroide ? 40 : 20))
      .attr("fill", (d) => {
        if (d.isCentroide) return CENTROIDE_COLORS[d.centroideId!];
        return "#888899";
      })
      .attr("font-size", (d) => (d.isCentroide ? "11px" : "8px"))
      .attr("font-weight", (d) => (d.isCentroide ? "600" : "normal"))
      .attr("font-family", "var(--font-geist-mono), monospace");

    // Hover events
    node
      .on("mouseenter", (event, d) => {
        const [x, y] = d3.pointer(event, container);
        setHoveredNode(d);
        setTooltipPos({ x, y: y - 10 });

        link
          .attr("stroke-opacity", (l: any) => {
            const src = typeof l.source === "string" ? l.source : l.source.slug;
            const tgt = typeof l.target === "string" ? l.target : l.target.slug;
            return src === d.slug || tgt === d.slug ? 0.8 : 0.06;
          })
          .attr("stroke-width", (l: any) => {
            const src = typeof l.source === "string" ? l.source : l.source.slug;
            const tgt = typeof l.target === "string" ? l.target : l.target.slug;
            if (src === d.slug || tgt === d.slug) return l.isCentroideLink ? 3 : 2.5;
            return l.isCentroideLink ? 0.5 : 0.5;
          });

        node.selectAll("circle").attr("opacity", (n: any) => {
          if (n.slug === d.slug) return 1;
          if (n.isCentroide) return 0.5;
          const isConnected = links.some((l: any) => {
            const src = typeof l.source === "string" ? l.source : l.source.slug;
            const tgt = typeof l.target === "string" ? l.target : l.target.slug;
            return (src === d.slug && tgt === n.slug) || (tgt === d.slug && src === n.slug);
          });
          return isConnected ? 1 : 0.15;
        });
      })
      .on("mouseleave", () => {
        setHoveredNode(null);
        link
          .attr("stroke-opacity", (d: any) => (d.isCentroideLink ? 0.12 : 0.22))
          .attr("stroke-width", (d: any) => (d.isCentroideLink ? 1.8 : 1));
        node.selectAll("circle").attr("opacity", 1);
      })
      .on("click", (_event, d) => {
        if (d.slug === "edouard-philippe") return;
        window.location.href = `/reseau/${d.slug}`;
      });

    // Tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });

    return () => {
      simulation.stop();
    };
  }, [personnes, activeTypes]);

  useEffect(() => {
    const cleanup = buildGraph();
    const handleResize = () => buildGraph();
    window.addEventListener("resize", handleResize);
    return () => {
      cleanup?.();
      window.removeEventListener("resize", handleResize);
    };
  }, [buildGraph]);

  const tooltipColor = hoveredNode?.isCentroide
    ? CENTROIDE_COLORS[hoveredNode.centroideId!]
    : TYPE_COLORS[hoveredNode?.typeLien || ""] || "#555";

  return (
    <div ref={containerRef} className="relative w-full">
      <svg
        ref={svgRef}
        className="w-full rounded-lg"
        style={{ background: "rgba(10, 10, 15, 0.5)" }}
      />

      {/* Centroïde legend */}
      <div className="absolute top-3 right-3 flex flex-col gap-1.5 glass rounded-md p-2">
        {CENTROIDES.map((c) => (
          <div key={c.id} className="flex items-center gap-1.5 text-[9px] font-mono">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full border"
              style={{
                backgroundColor: `${CENTROIDE_COLORS[c.id]}20`,
                borderColor: CENTROIDE_COLORS[c.id],
              }}
            />
            <span style={{ color: CENTROIDE_COLORS[c.id] }} className="font-bold">
              {CENTROIDE_LABELS[c.id]}
            </span>
            <span className="text-muted/60">{c.node.nom}</span>
          </div>
        ))}
        <div className="border-t border-glass-border mt-1 pt-1">
          <div className="flex items-center gap-1.5 text-[8px] text-muted/40">
            <span className="inline-block w-4 border-t border-dashed border-white/30" />
            <span>lien documenté</span>
          </div>
          <div className="flex items-center gap-1.5 text-[8px] text-muted/40 mt-0.5">
            <span className="text-[10px]">⊘</span>
            <span>Philippe–Villepin : aucun lien direct</span>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      {hoveredNode && (
        <div
          className="absolute pointer-events-none z-10 glass rounded-lg p-3 max-w-[300px] border"
          style={{
            left: tooltipPos.x,
            top: tooltipPos.y,
            transform: "translate(-50%, -100%)",
            borderColor: `${tooltipColor}40`,
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: tooltipColor }}
            />
            <span className="text-xs font-semibold text-foreground">
              {hoveredNode.nom}
            </span>
          </div>
          <p className="text-[10px] text-muted/70">{hoveredNode.role}</p>
          {hoveredNode.description && (
            <p className="text-[10px] text-muted mt-1 line-clamp-3">
              {hoveredNode.description}
            </p>
          )}
          {!hoveredNode.isCentroide && (
            <p className="text-[10px] mt-1 font-mono" style={{ color: tooltipColor }}>
              Cliquer pour voir la fiche →
            </p>
          )}
        </div>
      )}
    </div>
  );
}
