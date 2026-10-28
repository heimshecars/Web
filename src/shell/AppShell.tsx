import type { ReactNode } from "react";
import styles from "./AppShell.module.css";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

/**
 * The frame around every page: header on top, sidebar on the left, page on the right.
 *
 * It lives in app/(shell)/layout.tsx, and Next.js keeps layouts mounted between
 * navigations — so moving between pages only swaps `children` (the <main> area).
 * The header and sidebar are never re-created; only the active nav link updates.
 */
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className={styles.shell}>
      <a href="#main" className={styles.skipLink}>
        Skip to content
      </a>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main id="main" className={styles.main} tabIndex={-1}>
        {children}
      </main>
    </div>
  );
}
