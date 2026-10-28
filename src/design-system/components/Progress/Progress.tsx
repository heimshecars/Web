import { Inline, Stack } from "../Stack/Stack";
import { Text } from "../Text/Text";
import styles from "./Progress.module.css";

export interface ProgressProps {
  value: number;
  max?: number;
  label: string;
  /** Text on the right, e.g. "18 / 25 jobs". */
  valueLabel?: string;
  tone?: "brand" | "accent" | "success" | "danger";
}

/** A bar showing how far along something is: daily target, commission, rank. */
export function Progress({ value, max = 100, label, valueLabel, tone = "brand" }: ProgressProps) {
  return (
    <Stack gap="2xs">
      <Inline justify="between">
        <Text variant="caption" tone="muted" weight="semibold">
          {label}
        </Text>
        {valueLabel && (
          <Text variant="caption" weight="semibold" numeric>
            {valueLabel}
          </Text>
        )}
      </Inline>
      <progress className={styles.progress} data-tone={tone} value={value} max={max} aria-label={label} />
    </Stack>
  );
}
