"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import * as d3 from "d3";
import type { PersonneReseau } from "@/lib/seed-data";

type NetworkNode = PersonneReseau & {
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
};

type NetworkLink = {
  source: NetworkNode | string;
  target: NetworkNode | string;
  typeLien: string;
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

const PHILIPPE_NODE: PersonneReseau = {
  nom: "Édouard Philippe",
  slug: "edouard-philippe",
  role: "Candidat à la présidentielle 2027",
  description: "Ancien Premier ministre, maire du Havre, president d'Horizons",
  typeLien: "centre",
  partiPolitique: "Horizons",
};

export default function NetworkGraph({ personnes, activeTypes }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<NetworkNode | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const buildGraph = useCallback(() => {
    if (!svgRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = Math.max(500, Math.min(700, width * 0.6));

    const filtered = personnes.filter((p) => activeTypes.includes(p.typeLien));

    const allNodes: NetworkNode[] = [
      { ...PHILIPPE_NODE },
      ...filtered.map((p) => ({ ...p })),
    ];

    const links: NetworkLink[] = filtered.map((p) => ({
      source: PHILIPPE_NODE.slug,
      target: p.slug,
      typeLien: p.typeLien,
    }));

    // Clear previous
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`);

    // Defs for glow filter
    const defs = svg.append("defs");
    const filter = defs.append("filter").attr("id", "glow");
    filter
      .append("feGaussianBlur")
      .attr("stdDeviation", "3")
      .attr("result", "coloredBlur");
    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "coloredBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    // Zoom container
    const g = svg.append("g");

    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3])
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
            const force = personnes.find(
              (p) => p.slug === (typeof d.target === "string" ? d.target : d.target.slug)
            );
            return force ? 120 : 150;
          })
      )
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(40));

    // Links
    const link = g
      .append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", (d) => TYPE_COLORS[d.typeLien] || "#555")
      .attr("stroke-opacity", 0.3)
      .attr("stroke-width", 1.5)
      .attr("stroke-dasharray", (d) =>
        d.typeLien === "mediatique" ? "4 2" : "none"
      );

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
            d.fx = null;
            d.fy = null;
          }) as any
      );

    // Node circles
    node
      .append("circle")
      .attr("r", (d) => (d.slug === "edouard-philippe" ? 20 : 12))
      .attr("fill", (d) =>
        d.slug === "edouard-philippe"
          ? "#0a0a0f"
          : `${TYPE_COLORS[d.typeLien] || "#555"}15`
      )
      .attr("stroke", (d) =>
        d.slug === "edouard-philippe"
          ? "#00f0ff"
          : TYPE_COLORS[d.typeLien] || "#555"
      )
      .attr("stroke-width", (d) =>
        d.slug === "edouard-philippe" ? 2.5 : 1.5
      )
      .attr("filter", (d) =>
        d.slug === "edouard-philippe" ? "url(#glow)" : "none"
      );

    // Node labels
    node
      .append("text")
      .text((d) =>
        d.slug === "edouard-philippe"
          ? "EP"
          : d.nom.length > 15
            ? d.nom.slice(0, 13) + "..."
            : d.nom
      )
      .attr("text-anchor", "middle")
      .attr("dy", (d) => (d.slug === "edouard-philippe" ? 35 : 25))
      .attr("fill", (d) =>
        d.slug === "edouard-philippe"
          ? "#00f0ff"
          : "#888899"
      )
      .attr("font-size", (d) =>
        d.slug === "edouard-philippe" ? "11px" : "9px"
      )
      .attr("font-family", "var(--font-geist-mono), monospace");

    // Hover events
    node
      .on("mouseenter", (event, d) => {
        const [x, y] = d3.pointer(event, container);
        setHoveredNode(d);
        setTooltipPos({ x, y: y - 10 });

        // Highlight connected links
        link
          .attr("stroke-opacity", (l: any) => {
            const src = typeof l.source === "string" ? l.source : l.source.slug;
            const tgt = typeof l.target === "string" ? l.target : l.target.slug;
            return src === d.slug || tgt === d.slug ? 0.8 : 0.1;
          })
          .attr("stroke-width", (l: any) => {
            const src = typeof l.source === "string" ? l.source : l.source.slug;
            const tgt = typeof l.target === "string" ? l.target : l.target.slug;
            return src === d.slug || tgt === d.slug ? 2.5 : 1;
          });

        node.selectAll("circle").attr("opacity", (n: any) => {
          if (n.slug === d.slug) return 1;
          const isConnected = links.some((l: any) => {
            const src = typeof l.source === "string" ? l.source : l.source.slug;
            const tgt = typeof l.target === "string" ? l.target : l.target.slug;
            return (
              (src === d.slug && tgt === n.slug) ||
              (tgt === d.slug && src === n.slug)
            );
          });
          return isConnected ? 1 : 0.3;
        });
      })
      .on("mouseleave", () => {
        setHoveredNode(null);
        link.attr("stroke-opacity", 0.3).attr("stroke-width", 1.5);
        node.selectAll("circle").attr("opacity", 1);
      })
      .on("click", (_event, d) => {
        if (d.slug !== "edouard-philippe") {
          window.location.href = `/reseau/${d.slug}`;
        }
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

  return (
    <div ref={containerRef} className="relative w-full">
      <svg
        ref={svgRef}
        className="w-full rounded-lg"
        style={{ background: "rgba(10, 10, 15, 0.5)" }}
      />

      {/* Tooltip */}
      {hoveredNode && hoveredNode.slug !== "edouard-philippe" && (
        <div
          className="absolute pointer-events-none z-10 glass rounded-lg p-3 max-w-[250px] border-glow-cyan"
          style={{
            left: tooltipPos.x,
            top: tooltipPos.y,
            transform: "translate(-50%, -100%)",
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{
                backgroundColor: TYPE_COLORS[hoveredNode.typeLien] || "#555",
              }}
            />
            <span className="text-xs font-semibold text-foreground">
              {hoveredNode.nom}
            </span>
          </div>
          <p className="text-[10px] text-muted/70">{hoveredNode.role}</p>
          <p className="text-[10px] text-muted mt-1 line-clamp-3">
            {hoveredNode.description}
          </p>
          <p className="text-[10px] text-cyan mt-1 font-mono">
            Cliquer pour voir la fiche →
          </p>
        </div>
      )}
    </div>
  );
}
