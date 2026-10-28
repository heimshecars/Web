import type { Metadata } from "next";
import { PlannedPage } from "@/components/PlannedPage";

export const metadata: Metadata = { title: "Jobs" };

export default function JobsPage() {
  return (
    <PlannedPage
      title="Jobs"
      description="Every job, from every source."
      icon="jobs"
      plans={[
        "Jobs from the phone hotline, the card machine and drivers' own logs in one list.",
        "Each job is tagged short or long distance: long = fare over £20, or the caller chose long distance on the hotline.",
        "Filter by day, driver, status and type; search by pickup or reference.",
        "Create, assign, edit and cancel jobs.",
      ]}
    />
  );
}
