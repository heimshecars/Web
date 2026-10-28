import type { ReactNode } from "react";
import type { IconName } from "../../icons";
import { Icon } from "../Icon/Icon";
import { Skeleton } from "../Skeleton/Skeleton";
import { Text } from "../Text/Text";
import styles from "./StatCard.module.css";

export interface StatTrend {
  direction: "up" | "down";
  /** e.g. "+12% vs last week" */
  label: string;
  /** Whether this movement is good news. Defaults: up = good, down = bad. */
  sentiment?: "positive" | "negative" | "neutral";
}

export interface StatCardProps {
  label: string;
  value?: ReactNode;
  icon?: IconName;
  trend?: StatTrend;
  hint?: ReactNode;
  /** Shows skeletons for the value and trend. */
  loading?: boolean;
}

/** A single headline number: jobs today, takings, commission, rank. */
export function StatCard({ label, value, icon, trend, hint, loading }: StatCardProps) {
  const sentiment = trend?.sentiment ?? (trend?.direction === "up" ? "positive" : "negative");
  return (
    <section className={styles.card} aria-busy={loading || undefined}>
      <div className={styles.top}>
        <Text variant="label" tone="muted">
          {label}
        </Text>
        {icon && (
          <span className={styles.icon}>
            <Icon name={icon} size="sm" />
          </span>
        )}
      </div>
      {loading ? (
        <div className={styles.value}>
          <Skeleton width="1/2" />
        </div>
      ) : (
        <div className={styles.value}>{value}</div>
      )}
      {loading ? (
        <Skeleton width="3/4" />
      ) : trend ? (
        <span className={styles.trend} data-sentiment={sentiment}>
          <Icon name={trend.direction === "up" ? "trendUp" : "trendDown"} size="sm" />
          {trend.label}
        </span>
      ) : (
        hint && (
          <Text variant="caption" tone="muted">
            {hint}
          </Text>
        )
      )}
    </section>
  );
}
