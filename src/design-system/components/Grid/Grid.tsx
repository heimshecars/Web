import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cx } from "../../cx";
import type { Space } from "../Stack/Stack";
import styles from "./Grid.module.css";

export interface GridProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  /**
   * Smallest width a column may shrink to before the grid wraps.
   * Responsive without breakpoints: cards reflow on their own.
   */
  min?: "xs" | "sm" | "md" | "lg";
  gap?: Space;
  children?: ReactNode;
}

/** Auto-fitting responsive grid for cards, stats and form fields. */
export function Grid({ as: Tag = "div", min = "md", gap = "md", className, ...rest }: GridProps) {
  return <Tag className={cx(styles.grid, className)} data-min={min} data-gap={gap} {...rest} />;
}
