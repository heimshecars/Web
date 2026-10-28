import type { Metadata } from "next";
import { PlannedPage } from "@/components/PlannedPage";

export const metadata: Metadata = { title: "Drivers" };

export default function DriversPage() {
  return (
    <PlannedPage
      title="Drivers"
      description="Your team and their tablets."
      icon="drivers"
      plans={[
        "All drivers with shift status, current job and today's numbers.",
        "Driver profiles: contact details, vehicle, licence and badge expiry dates.",
        "Which company tablet each driver has, and when it last checked in.",
      ]}
    />
  );
}
