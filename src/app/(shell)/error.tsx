"use client";

import { ButtonLink, Card, ErrorState } from "@/design-system";

// If a page crashes, only the content area shows this — the header and
// sidebar keep working so you can navigate away.
export default function PageError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <Card>
      <ErrorState
        title="This page hit a problem"
        description="The rest of the app is fine. Try loading the page again, or go back to the overview."
        onRetry={reset}
        action={
          <ButtonLink href="/" variant="ghost">
            Go to overview
          </ButtonLink>
        }
      />
    </Card>
  );
}
