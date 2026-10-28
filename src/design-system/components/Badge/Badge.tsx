import type { ReactNode } from "react";
import { cx } from "../../cx";
import type { IconName } from "../../icons";
import { Icon } from "../Icon/Icon";
import styles from "./Badge.module.css";

export type BadgeTone = "neutral" | "brand" | "accent" | "success" | "warning" | "danger" | "info" | "violet";

export interface BadgeProps {
  tone?: BadgeTone;
  variant?: "soft" | "solid" | "outline";
  size?: "sm" | "md";
  icon?: IconName;
  /** A small coloured dot before the text — good for statuses. */
  dot?: boolean;
  className?: string;
  children: ReactNode;
}

/** Short status or category labels: job status, job type, driver state. */
export function Badge({ tone = "neutral", variant = "soft", size = "md", icon, dot, className, children }: BadgeProps) {
  return (
    <span className={cx(styles.badge, className)} data-tone={tone} data-variant={variant} data-size={size}>
      {dot && <span className={styles.dot} aria-hidden />}
      {icon && <Icon name={icon} size="xs" />}
      {children}
    </span>
  );
}
