import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cx } from "../../cx";
import styles from "./Text.module.css";

export type TextTone =
  | "default"
  | "muted"
  | "subtle"
  | "brand"
  | "accent"
  | "success"
  | "warning"
  | "danger"
  | "inverse"
  | "inherit";

export type TextVariant = "lead" | "body" | "bodySm" | "label" | "caption" | "overline" | "mono";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variant?: TextVariant;
  tone?: TextTone;
  weight?: "regular" | "medium" | "semibold" | "bold";
  align?: "start" | "center" | "end";
  /** Tabular figures — use for money, counts and times so columns line up. */
  numeric?: boolean;
  /** Cut off with an ellipsis instead of wrapping. */
  truncate?: boolean;
  children?: ReactNode;
}

/** All body copy. Never set font sizes or colours by hand — pick a variant and tone. */
export function Text({
  as: Tag = "span",
  variant = "body",
  tone = "default",
  weight,
  align,
  numeric,
  truncate,
  className,
  ...rest
}: TextProps) {
  return (
    <Tag
      className={cx(styles.text, className)}
      data-variant={variant}
      data-tone={tone}
      data-weight={weight}
      data-align={align}
      data-numeric={numeric || undefined}
      data-truncate={truncate || undefined}
      {...rest}
    />
  );
}

export type HeadingSize = "display" | "xl" | "lg" | "md" | "sm";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  /** Visual size; defaults to a size that matches the level. */
  size?: HeadingSize;
  tone?: TextTone;
  numeric?: boolean;
  children?: ReactNode;
}

const defaultSize: Record<NonNullable<HeadingProps["level"]>, HeadingSize> = {
  1: "xl",
  2: "lg",
  3: "md",
  4: "sm",
};

export function Heading({ level = 2, size, tone = "default", numeric, className, ...rest }: HeadingProps) {
  const Tag = `h${level}` as const;
  return (
    <Tag
      className={cx(styles.heading, className)}
      data-size={size ?? defaultSize[level]}
      data-tone={tone}
      data-numeric={numeric || undefined}
      {...rest}
    />
  );
}
