import Link from "next/link";
import { Avatar, Badge, cx, IconButton, Logo, Text } from "@/design-system";
import styles from "./Header.module.css";

/**
 * Global header. Holds only things that don't depend on the current page,
 * so it never needs to change when you navigate. Page titles live in the page.
 */
export function Header({ className }: { className?: string }) {
  return (
    <header className={cx(styles.header, className)}>
      <Link href="/" className={styles.brand} aria-label="Heimshe Cars — Overview">
        <Logo />
        <Badge tone="brand" variant="outline" size="sm">
          Dispatch
        </Badge>
      </Link>

      <div className={styles.end}>
        {/* TODO: wire to Supabase realtime once the backend exists. */}
        <IconButton icon="notifications" label="Notifications" />
        <span className={styles.divider} aria-hidden />
        {/* TODO: replace with the signed-in staff member once auth exists. */}
        <div className={styles.user}>
          <Avatar name="Heimshe Office" size="sm" />
          <div className={styles.userText}>
            <Text variant="label">Office</Text>
            <Text variant="caption" tone="muted">
              Staff
            </Text>
          </div>
        </div>
      </div>
    </header>
  );
}
