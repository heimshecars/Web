import type { Metadata } from "next";
import { PlannedPage } from "@/components/PlannedPage";

export const metadata: Metadata = { title: "Leaderboard" };

export default function LeaderboardPage() {
  return (
    <PlannedPage
      title="Leaderboard"
      description="How drivers are performing against each other."
      icon="leaderboard"
      plans={[
        "Drivers ranked by jobs completed, takings and a performance score.",
        "The same scoring drivers see on their tablets, so everyone sees the same numbers.",
        "Daily, weekly and monthly views.",
      ]}
    />
  );
}
