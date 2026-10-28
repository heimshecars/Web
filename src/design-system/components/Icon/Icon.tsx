import { cx } from "../../cx";
import { icons, type IconName } from "../../icons";
import styles from "./Icon.module.css";

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";
export type IconTone = "inherit" | "muted" | "brand" | "accent" | "success" | "warning" | "danger" | "info";

export interface IconProps {
  name: IconName;
  size?: IconSize;
  tone?: IconTone;
  /** Give a label only when the icon carries meaning on its own. Otherwise it's hidden from screen readers. */
  label?: string;
  className?: string;
}

/** Every icon in the app goes through here. Add new icons in design-system/icons.ts. */
export function Icon({ name, size = "md", tone = "inherit", label, className }: IconProps) {
  const Glyph = icons[name];
  return (
    <Glyph
      className={cx(styles.icon, className)}
      data-size={size}
      data-tone={tone}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
      focusable="false"
    />
  );
}
