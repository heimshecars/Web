import { cx, Text } from "@/design-system";
import { navigation } from "./navigation";
import { NavLink } from "./NavLink";
import styles from "./Sidebar.module.css";

/**
 * Left navigation. A server component: rendered once, kept mounted across
 * navigations. Only each NavLink's "active" highlight reacts to the URL.
 * Below the lg breakpoint it collapses to an icon rail (pure CSS).
 */
export function Sidebar({ className }: { className?: string }) {
  return (
    <nav className={cx(styles.sidebar, className)} aria-label="Main">
      {navigation.map((section) => (
        <div key={section.label} className={styles.section}>
          <Text variant="overline" tone="muted" className={styles.sectionLabel}>
            {section.label}
          </Text>
          <ul role="list" className={styles.list}>
            {section.items.map((item) => (
              <li key={item.href}>
                <NavLink {...item} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
