import type { ReactNode } from "react";
import styles from "./template.module.css";

// Unlike layout.tsx, a template re-mounts on every navigation — so this is
// where the page-enter animation plays, inside the content area only.
export default function PageTemplate({ children }: { children: ReactNode }) {
  return <div className={styles.page}>{children}</div>;
}
