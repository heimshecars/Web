import type { Metadata } from "next";
import { PlannedPage } from "@/components/PlannedPage";

export const metadata: Metadata = { title: "Settings" };

export default function SettingsPage() {
  return (
    <PlannedPage
      title="Settings"
      description="How the business runs, in one place."
      icon="settings"
      plans={[
        "Commission rates for short and long-distance jobs.",
        "The long-distance threshold (currently £20).",
        "Phone hotline and card machine connections.",
        "Staff accounts and who can see what.",
      ]}
    />
  );
}
