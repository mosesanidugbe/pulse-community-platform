"use client";

import type { UpdateCategory } from "@/lib/mock-data";

export type FilterCategory = "All" | UpdateCategory;

const categories: FilterCategory[] = [
  "All",
  "Traffic",
  "Safety",
  "Events",
  "Shops",
  "Services",
  "Community",
];

type CategoryFiltersProps = {
  selected: FilterCategory;
  onSelect: (category: FilterCategory) => void;
};

export default function CategoryFilters({
  selected,
  onSelect,
}: CategoryFiltersProps) {
  return (
    <div className="filter-row" aria-label="Filter updates by category">
      {categories.map((category) => (
        <button
          className={`filter-chip ${selected === category ? "selected" : ""}`}
          key={category}
          onClick={() => onSelect(category)}
          type="button"
          aria-pressed={selected === category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
