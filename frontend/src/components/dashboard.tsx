"use client";

import { useMemo, useState } from "react";
import { Bell, ChevronDown, MapPin, Sparkles } from "lucide-react";
import AppSidebar from "@/components/app-sidebar";
import MobileNavigation from "@/components/mobile-navigation";
import AreaPulseCard from "@/components/area-pulse-card";
import CategoryFilters, { type FilterCategory } from "@/components/category-filters";
import SearchBar from "@/components/search-bar";
import UpdateFeed from "@/components/update-feed";
import { locations, updates } from "@/lib/mock-data";

export default function Dashboard() {
  const [location, setLocation] = useState<(typeof locations)[number]>("Odeda");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<FilterCategory>("All");

  const areaUpdates = useMemo(
    () => updates.filter((item) => item.area === location),
    [location],
  );

  const visibleUpdates = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return areaUpdates
      .filter((item) => category === "All" || item.category === category)
      .filter((item) => {
        if (!normalizedQuery) return true;
        return [
          item.title,
          item.description,
          item.location,
          item.author,
          item.category,
        ].some((value) => value.toLowerCase().includes(normalizedQuery));
      })
      .sort((a, b) => a.minutesAgo - b.minutesAgo);
  }, [areaUpdates, category, query]);

  return (
    <div className="app-shell">
      <AppSidebar />
      <div className="main-area">
        <header className="topbar">
          <div className="topbar-left">
            <div>
              <div className="topbar-title">Your local dashboard</div>
              <div className="topbar-subtitle">A clearer picture of what’s happening nearby</div>
            </div>
          </div>
          <div className="topbar-actions">
            <button className="icon-button" type="button" aria-label="Notifications">
              <Bell size={17} />
              <span className="notification-dot" />
            </button>
            <div className="avatar" aria-label="Guest profile">G</div>
          </div>
        </header>

        <main className="content">
          <div className="welcome-row">
            <div>
              <div className="eyebrow">YOUR AREA, RIGHT NOW</div>
              <h1 className="page-heading">Know before you go.</h1>
              <p className="page-intro">The local picture, powered by people who are already there.</p>
            </div>
            <label className="location-select">
              <MapPin size={15} color="#3568ed" />
              <select
                aria-label="Choose your area"
                value={location}
                onChange={(event) => setLocation(event.target.value as (typeof locations)[number])}
              >
                {locations.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
              <ChevronDown size={13} color="#8b96aa" />
            </label>
          </div>

          <SearchBar value={query} onChange={setQuery} />
          <AreaPulseCard updates={areaUpdates} />

          <section aria-labelledby="updates-heading">
            <div className="section-head">
              <div>
                <h2 className="section-title" id="updates-heading">Community updates</h2>
                <div className="section-caption">The latest signals from around {location}</div>
              </div>
              <span style={{ color: "#8c98aa", fontSize: 10, fontWeight: 700 }}>
                {visibleUpdates.length} SHOWING
              </span>
            </div>
            <CategoryFilters selected={category} onSelect={setCategory} />
            <UpdateFeed updates={visibleUpdates} />
          </section>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7, marginTop: 25, color: "#a0aaba", fontSize: 10 }}>
            <Sparkles size={12} /> Sample community activity for the prototype
          </div>
        </main>
      </div>
      <MobileNavigation />
    </div>
  );
}
