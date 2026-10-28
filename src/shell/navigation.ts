import type { IconName } from "@/design-system";

export interface NavItem {
  href: string;
  label: string;
  icon: IconName;
}

export interface NavSection {
  label: string;
  items: NavItem[];
}

/** The sidebar. Add a page here and it appears in the navigation. */
export const navigation: NavSection[] = [
  {
    label: "Operations",
    items: [
      { href: "/", label: "Overview", icon: "overview" },
      { href: "/jobs", label: "Jobs", icon: "jobs" },
      { href: "/drivers", label: "Drivers", icon: "drivers" },
    ],
  },
  {
    label: "Money",
    items: [
      { href: "/earnings", label: "Earnings", icon: "earnings" },
      { href: "/leaderboard", label: "Leaderboard", icon: "leaderboard" },
    ],
  },
  {
    label: "Admin",
    items: [
      { href: "/settings", label: "Settings", icon: "settings" },
      { href: "/design-system", label: "Design system", icon: "designSystem" },
    ],
  },
];
