import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cx } from "../../cx";
import styles from "./Stack.module.css";

export type Space = "none" | "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

export interface StackProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  /** column (default) stacks vertically; row lines things up horizontally. */
  direction?: "column" | "row";
  gap?: Space;
  padding?: Space;
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between";
  wrap?: boolean;
  /** Fill the remaining space in a parent Stack. */
  grow?: boolean;
  children?: ReactNode;
}

/** The layout workhorse: a flex column or row with token-based gaps. */
export function Stack({
  as: Tag = "div",
  direction = "column",
  gap = "md",
  padding,
  align,
  justify,
  wrap,
  grow,
  className,
  ...rest
}: StackProps) {
  return (
    <Tag
      className={cx(styles.stack, className)}
      data-direction={direction}
      data-gap={gap}
      data-padding={padding}
      data-align={align}
      data-justify={justify}
      data-wrap={wrap || undefined}
      data-grow={grow || undefined}
      {...rest}
    />
  );
}

/** Shorthand for a horizontal Stack, vertically centred by default. */
export function Inline({ align = "center", gap = "xs", ...props }: Omit<StackProps, "direction">) {
  return <Stack direction="row" align={align} gap={gap} {...props} />;
}
