import { cx } from "../../cx";
import styles from "./StatusDot.module.css";

export interface StatusDotProps {
  tone?: "neutral" | "success" | "warning" | "danger" | "brand" | "accent";
  /** A soft radiating pulse — for "live" / "online". */
  pulse?: boolean;
  /** Read out by screen readers, e.g. "Online". */
  label?: string;
  className?: string;
}

export function StatusDot({ tone = "neutral", pulse, label, className }: StatusDotProps) {
  return (
    <span
      className={cx(styles.dot, className)}
      data-tone={tone}
      data-pulse={pulse || undefined}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
}
