import { Grid, Skeleton, Stack } from "@/design-system";

// Shown in the content area (never the shell) while a page loads.
export default function Loading() {
  return (
    <Stack gap="lg" aria-busy="true" aria-label="Loading page">
      <Stack gap="xs">
        <Skeleton width="md" />
        <Skeleton shape="block" height="sm" width="1/2" />
      </Stack>
      <Grid min="sm">
        <Skeleton shape="block" height="md" />
        <Skeleton shape="block" height="md" />
        <Skeleton shape="block" height="md" />
      </Grid>
      <Skeleton shape="block" height="lg" />
    </Stack>
  );
}
