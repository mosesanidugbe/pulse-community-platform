import {
  Bookmark,
  Compass,
  Home,
  MapPin,
  Radio,
  Settings2,
  type LucideIcon,
} from "lucide-react";

const items: { label: string; icon: LucideIcon; active?: boolean }[] = [
  { label: "Home", icon: Home, active: true },
  { label: "Explore", icon: Compass },
  { label: "Nearby", icon: MapPin },
  { label: "Updates", icon: Radio },
  { label: "Saved", icon: Bookmark },
];

export default function AppSidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark"><Radio size={20} strokeWidth={2.5} /></div>
        <div>
          <div className="brand-name">PULSE</div>
          <div className="brand-caption">YOUR AREA, IN SYNC</div>
        </div>
      </div>
      <div className="nav-label">WORKSPACE</div>
      <nav className="nav-list" aria-label="Main navigation">
        {items.map(({ label, icon: Icon, active }) => (
          <button
            className={`nav-item ${active ? "active" : ""}`}
            disabled={!active}
            key={label}
            type="button"
            aria-current={active ? "page" : undefined}
            title={active ? "Home" : `${label} will be available in a later stage`}
          >
            <Icon size={17} />
            <span>{label}</span>
            {!active && <span className="soon">SOON</span>}
          </button>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, color: "#73809a", fontSize: 11, fontWeight: 700 }}>
          <Settings2 size={14} /> Built for your neighbourhood
        </div>
        <p className="sidebar-note">Useful local signals, shared by the people who know the area best.</p>
      </div>
    </aside>
  );
}
