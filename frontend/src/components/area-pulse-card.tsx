import { Activity, Store, CarFront } from "lucide-react";
import type { CommunityUpdate } from "@/lib/mock-data";

type AreaPulseCardProps = { updates: CommunityUpdate[] };

export default function AreaPulseCard({ updates }: AreaPulseCardProps) {
  const vendorNotices = updates.filter((item) => item.isVendor).length;
  const trafficReports = updates.filter((item) => item.category === "Traffic").length;
  const otherUpdates = updates.length - vendorNotices - trafficReports;

  return (
    <section className="pulse-card" aria-label="Area Pulse summary">
      <div className="pulse-top">
        <div className="pulse-label">
          <Activity size={15} />
          Area Pulse
        </div>
        <span className="live-pill"><span className="live-dot" /> Last hour</span>
      </div>
      <div className="pulse-count">{updates.length} updates</div>
      <p className="pulse-description">Here’s what’s happening around your selected area.</p>
      <div className="pulse-stats">
        <div className="pulse-stat">
          <strong>{vendorNotices}</strong>
          <span><Store size={11} style={{ display: "inline", marginRight: 4 }} />Vendor notices</span>
        </div>
        <div className="pulse-stat">
          <strong>{trafficReports}</strong>
          <span><CarFront size={12} style={{ display: "inline", marginRight: 4 }} />Traffic reports</span>
        </div>
        <div className="pulse-stat">
          <strong>{otherUpdates}</strong>
          <span>Other updates</span>
        </div>
      </div>
    </section>
  );
}
