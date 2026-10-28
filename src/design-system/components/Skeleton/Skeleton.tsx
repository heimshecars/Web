import { cx } from "../../cx";
import { Stack } from "../Stack/Stack";
import styles from "./Skeleton.module.css";

export type SkeletonWidth = "full" | "3/4" | "1/2" | "1/4" | "xs" | "sm" | "md" | "lg";

export interface SkeletonProps {
  /** text: one line of text. block: a rectangle. circle: an avatar. control: a button/input. */
  shape?: "text" | "block" | "circle" | "control";
  width?: SkeletonWidth;
  /** Only for shape="block". */
  height?: "sm" | "md" | "lg";
  /** Inherit the parent's font size (for text inside headings or big numbers). */
  className?: string;
}

/**
 * Placeholder shimmer shown while data loads. Purely visual: wrap the area
 * in aria-busy="true" (DataTable, StatCard and loading.tsx already do this).
 */
export function Skeleton({ shape = "text", width = "full", height = "md", className }: SkeletonProps) {
  return (
    <span
      className={cx(styles.skeleton, className)}
      data-shape={shape}
      data-width={shape === "circle" ? undefined : width}
      data-height={shape === "block" ? height : undefined}
      aria-hidden
    />
  );
}

/** Several lines of text; the last one is shorter, like a real paragraph. */
export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <Stack gap="xs">
      {Array.from({ length: lines }, (_, i) => (
        <Skeleton key={i} width={i === lines - 1 && lines > 1 ? "3/4" : "full"} />
      ))}
    </Stack>
  );
}
