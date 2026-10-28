import { ButtonLink, EmptyState, Logo, Stack } from "@/design-system";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <Stack gap="xl" align="center">
        <Logo size="lg" />
        <EmptyState
          icon="noResults"
          title="Page not found"
          description="That address doesn't match any page. It may have moved."
          action={
            <ButtonLink href="/" iconStart="overview">
              Back to overview
            </ButtonLink>
          }
        />
      </Stack>
    </main>
  );
}
