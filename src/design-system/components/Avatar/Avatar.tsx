import { cx } from "../../cx";
import styles from "./Avatar.module.css";

const tones = ["brand", "accent", "success", "info", "violet"] as const;

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase() || "?";
}

/** Same name → same colour, every time. */
function toneFor(name: string): (typeof tones)[number] {
  let hash = 0;
  for (const char of name) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return tones[hash % tones.length];
}

export interface AvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

/** A person's initials in a coloured circle. */
export function Avatar({ name, size = "md", className }: AvatarProps) {
  return (
    <span className={cx(styles.avatar, className)} data-size={size} data-tone={toneFor(name)} role="img" aria-label={name}>
      <span aria-hidden>{initials(name)}</span>
    </span>
  );
}
