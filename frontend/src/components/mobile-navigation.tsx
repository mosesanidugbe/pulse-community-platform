"use client";

import { Bookmark, Compass, Home, MapPin, Radio } from "lucide-react";

const items = [
  { label: "Home", icon: Home, active: true },
  { label: "Explore", icon: Compass },
  { label: "Nearby", icon: MapPin },
  { label: "Updates", icon: Radio },
  { label: "Saved", icon: Bookmark },
];

export default function MobileNavigation() {
  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      {items.map(({ label, icon: Icon, active }) => (
        <button
          className={`mobile-nav-item ${active ? "active" : ""}`}
          disabled={!active}
          key={label}
          type="button"
          aria-current={active ? "page" : undefined}
          title={active ? "Home" : `${label} will be available in a later stage`}
        >
          <Icon size={19} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}
