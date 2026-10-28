import type { Metadata } from "next";
import { PlannedPage } from "@/components/PlannedPage";

export const metadata: Metadata = { title: "Overview" };

export default function OverviewPage() {
  return (
    <PlannedPage
      title="Overview"
      description="Today at a glance."
      icon="overview"
      plans={[
        "Live job board: new, assigned, on the way, on job, completed.",
        "Today's takings, commission earned and job count, split short vs long distance.",
        "Which drivers are on shift right now and what they're doing.",
        "Alerts for jobs nobody has picked up.",
      ]}
    />
  );
}
