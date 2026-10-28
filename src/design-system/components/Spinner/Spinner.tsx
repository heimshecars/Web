import { cx } from "../../cx";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";
import styles from "./Spinner.module.css";

export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  /** Announced to screen readers. Pass null when a parent already announces loading. */
  label?: string | null;
  className?: string;
}

/** Spinning ring that takes the current text colour. */
export function Spinner({ size = "md", label = "Loading", className }: SpinnerProps) {
  return (
    <span className={cx(styles.wrap, className)} role={label ? "status" : undefined}>
      <span className={styles.spinner} data-size={size} aria-hidden />
      {label && <VisuallyHidden>{label}</VisuallyHidden>}
    </span>
  );
}
