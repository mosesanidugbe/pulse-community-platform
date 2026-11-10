export type UpdateCategory =
  | "Traffic"
  | "Safety"
  | "Events"
  | "Shops"
  | "Services"
  | "Community";

export type CommunityUpdate = {
  id: number;
  area: string;
  category: UpdateCategory;
  title: string;
  description: string;
  location: string;
  author: string;
  timeLabel: string;
  minutesAgo: number;
  isVendor?: boolean;
};

export const locations = ["Odeda", "Abeokuta", "Lagos"] as const;

export const updates: CommunityUpdate[] = [
  { id: 1, area: "Odeda", category: "Traffic", title: "Heavy traffic near the main junction", description: "Vehicles are moving slowly around the junction. Consider using the inner road if you're heading towards town.", location: "Odeda Main Junction", author: "Community report", timeLabel: "4 min ago", minutesAgo: 4 },
  { id: 2, area: "Odeda", category: "Services", title: "Water supply has been restored", description: "Residents around the central neighbourhood are reporting normal water flow again.", location: "Odeda Central", author: "Odeda Water Updates", timeLabel: "8 min ago", minutesAgo: 8, isVendor: true },
  { id: 3, area: "Odeda", category: "Shops", title: "Fresh produce available this morning", description: "Vegetables, fruit and other daily essentials are available while stocks last.", location: "Community Market", author: "Amina's Produce", timeLabel: "12 min ago", minutesAgo: 12, isVendor: true },
  { id: 4, area: "Odeda", category: "Safety", title: "Streetlight out on the eastern road", description: "The street is unusually dark after sunset. Please take care when walking through this stretch.", location: "Eastern Road", author: "Resident update", timeLabel: "17 min ago", minutesAgo: 17 },
  { id: 5, area: "Odeda", category: "Events", title: "Community football match this evening", description: "A friendly local match is planned for 5:30 PM. Everyone is welcome to come watch.", location: "Town Sports Field", author: "Odeda Sports Circle", timeLabel: "23 min ago", minutesAgo: 23 },
  { id: 6, area: "Odeda", category: "Traffic", title: "Road works causing a short delay", description: "One lane is temporarily closed while maintenance work is underway.", location: "Asero Road", author: "Community report", timeLabel: "29 min ago", minutesAgo: 29 },
  { id: 7, area: "Odeda", category: "Community", title: "Neighbourhood clean-up volunteers needed", description: "Volunteers are meeting on Saturday morning. Bring gloves if you have them.", location: "Central Square", author: "Odeda Residents Group", timeLabel: "34 min ago", minutesAgo: 34 },
  { id: 8, area: "Odeda", category: "Shops", title: "Phone accessories restocked", description: "Chargers, screen protectors and earphones are back in stock.", location: "Market Street", author: "Tobi Tech Corner", timeLabel: "41 min ago", minutesAgo: 41, isVendor: true },
  { id: 9, area: "Odeda", category: "Services", title: "Power interruption reported", description: "Some streets are experiencing an outage. Restoration timing has not yet been confirmed.", location: "North Odeda", author: "Community report", timeLabel: "48 min ago", minutesAgo: 48 },
  { id: 10, area: "Odeda", category: "Community", title: "New recycling collection point opened", description: "A drop-off point for sorted plastic and paper is now available to residents.", location: "Community Centre", author: "Odeda Green Project", timeLabel: "53 min ago", minutesAgo: 53 },
  { id: 11, area: "Odeda", category: "Events", title: "Free health and wellness session", description: "A local wellness group is hosting an open session tomorrow morning.", location: "Civic Hall", author: "Neighbourhood Notice", timeLabel: "56 min ago", minutesAgo: 56 },
  { id: 12, area: "Odeda", category: "Community", title: "Market entrance reopened", description: "The temporary obstruction at the south entrance has been cleared.", location: "Community Market", author: "Market Watch", timeLabel: "59 min ago", minutesAgo: 59 },
  { id: 13, area: "Abeokuta", category: "Traffic", title: "Slow-moving traffic near Kuto", description: "Traffic is building near the roundabout. Allow extra time if travelling through the area.", location: "Kuto", author: "Community report", timeLabel: "6 min ago", minutesAgo: 6 },
  { id: 14, area: "Abeokuta", category: "Events", title: "Open-air music event announced", description: "A local music showcase is scheduled for this evening.", location: "Abeokuta City Centre", author: "City Events", timeLabel: "21 min ago", minutesAgo: 21 },
  { id: 15, area: "Abeokuta", category: "Shops", title: "Bakery has fresh bread ready", description: "Fresh loaves and pastries are available for collection today.", location: "Panseke", author: "Cornerstone Bakery", timeLabel: "38 min ago", minutesAgo: 38, isVendor: true },
  { id: 16, area: "Lagos", category: "Traffic", title: "Lane closure reported on the expressway", description: "A temporary lane closure is slowing traffic. Check your route before setting out.", location: "Ikeja", author: "Road Watch", timeLabel: "3 min ago", minutesAgo: 3 },
  { id: 17, area: "Lagos", category: "Services", title: "Water tanker service available", description: "A local provider is taking requests for water delivery in the area.", location: "Surulere", author: "BlueDrop Services", timeLabel: "19 min ago", minutesAgo: 19, isVendor: true },
  { id: 18, area: "Lagos", category: "Safety", title: "Temporary caution around a busy crossing", description: "Pedestrians are advised to use the marked crossing while repairs continue.", location: "Yaba", author: "Resident update", timeLabel: "44 min ago", minutesAgo: 44 },
];
