import type { ElementType, ReactNode } from "react";
import styles from "./VisuallyHidden.module.css";

/** Content for screen readers only. */
export function VisuallyHidden({ as: Tag = "span", children }: { as?: ElementType; children: ReactNode }) {
  return <Tag className={styles.hidden}>{children}</Tag>;
}
