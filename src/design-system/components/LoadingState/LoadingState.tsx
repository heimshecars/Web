import { Spinner } from "../Spinner/Spinner";
import { Text } from "../Text/Text";
import styles from "./LoadingState.module.css";

export interface LoadingStateProps {
  label?: string;
  size?: "sm" | "md";
}

/**
 * A centred spinner with a message. Prefer skeletons when you know the shape
 * of what is loading; use this when you don't.
 */
export function LoadingState({ label = "Loading…", size = "md" }: LoadingStateProps) {
  return (
    <div className={styles.loading} data-size={size} role="status" aria-live="polite">
      <span className={styles.spinner}>
        <Spinner size={size === "sm" ? "md" : "lg"} label={null} />
      </span>
      <Text variant="bodySm" tone="muted">
        {label}
      </Text>
    </div>
  );
}
