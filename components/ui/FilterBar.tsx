"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";

type FilterBarProps = {
  filters: string[];
  paramName?: string;
  activeColor?: string;
};

export default function FilterBar({
  filters,
  paramName = "filtre",
  activeColor = "tag-actualite",
}: FilterBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeFilter = searchParams.get(paramName) || "Tous";

  const handleFilter = useCallback(
    (filter: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (filter === "Tous") {
        params.delete(paramName);
      } else {
        params.set(paramName, filter);
      }
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams, paramName]
  );

  return (
    <div className="flex flex-wrap gap-2">
      {["Tous", ...filters].map((filter) => {
        const isActive =
          filter === activeFilter ||
          (filter === "Tous" && !searchParams.has(paramName));
        return (
          <button
            key={filter}
            onClick={() => handleFilter(filter)}
            className={`tag cursor-pointer transition-colors ${
              isActive
                ? activeColor
                : "text-muted border-glass-border bg-glass hover:border-cyan/30"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
