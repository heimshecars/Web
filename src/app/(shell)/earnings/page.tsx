import type { Metadata } from "next";
import { PlannedPage } from "@/components/PlannedPage";

export const metadata: Metadata = { title: "Earnings" };

export default function EarningsPage() {
  return (
    <PlannedPage
      title="Earnings"
      description="Takings, commission and what each driver is owed."
      icon="earnings"
      plans={[
        "Per driver and per period: total fares, company commission and driver earnings.",
        "Short and long-distance jobs use different commission rates.",
        "Card machine payments matched to jobs automatically.",
        "Export for the accountant.",
      ]}
    />
  );
}
