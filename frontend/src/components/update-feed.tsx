import {
  AlertTriangle,
  CalendarDays,
  CarFront,
  MessageCircle,
  ShieldAlert,
  ShoppingBag,
  Store,
  MapPin,
  Wrench,
} from "lucide-react";
import type { CommunityUpdate } from "@/lib/mock-data";

const categoryIcon = {
  Traffic: CarFront,
  Safety: ShieldAlert,
  Events: CalendarDays,
  Shops: ShoppingBag,
  Services: Wrench,
  Community: MessageCircle,
};

const categoryClass = {
  Traffic: "traffic",
  Safety: "safety",
  Events: "events",
  Shops: "shops",
  Services: "services",
  Community: "community",
};

type UpdateFeedProps = { updates: CommunityUpdate[] };

export default function UpdateFeed({ updates }: UpdateFeedProps) {
  if (updates.length === 0) {
    return (
      <div className="empty-state">
        <AlertTriangle size={20} style={{ margin: "0 auto 10px" }} />
        No updates match that search. Try another keyword or category.
      </div>
    );
  }

  return (
    <div className="feed-list">
      {updates.map((update) => {
        const Icon = categoryIcon[update.category];
        return (
          <article className="feed-card" key={update.id}>
            <div className={`feed-icon ${categoryClass[update.category]}`}>
              <Icon size={18} />
            </div>
            <div className="feed-main">
              <div className="feed-meta">
                <span className="feed-category">{update.category}</span>
                <span className="feed-dot" />
                <span className="feed-time">{update.timeLabel}</span>
                {update.isVendor && (
                  <span className="vendor-tag"><Store size={11} /> Local business</span>
                )}
              </div>
              <h3 className="feed-title">{update.title}</h3>
              <p className="feed-description">{update.description}</p>
              <div className="feed-footer">
                <MapPin size={11} />
                <span>{update.location}</span>
                <span>·</span>
                <span>{update.author}</span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
