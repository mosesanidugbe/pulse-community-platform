"use client";

import { Search } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="search-wrap">
      <Search size={18} color="#98a5b9" />
      <input
        aria-label="Search local updates"
        placeholder="Search updates, places, services..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <span className="search-hint">SEARCH</span>
    </label>
  );
}
