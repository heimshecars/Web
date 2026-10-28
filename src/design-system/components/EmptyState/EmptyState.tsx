import type { ReactNode } from "react";
import type { IconName } from "../../icons";
import { Icon } from "../Icon/Icon";
import { Heading, Text } from "../Text/Text";
import styles from "./EmptyState.module.css";

export interface EmptyStateProps {
  icon?: IconName;
  title: string;
  description?: ReactNode;
  /** Usually a Button or ButtonLink that fixes the emptiness ("Log a job"). */
  action?: ReactNode;
  size?: "sm" | "md";
  tone?: "brand" | "danger";
}

/** What to show when there is nothing to show — never leave a blank area. */
export function EmptyState({ icon = "empty", title, description, action, size = "md", tone = "brand" }: EmptyStateProps) {
  return (
    <div className={styles.empty} data-size={size}>
      <span className={styles.icon} data-tone={tone}>
        <Icon name={icon} size={size === "sm" ? "md" : "lg"} />
      </span>
      <div className={styles.text}>
        <Heading level={2} size={size === "sm" ? "sm" : "md"}>
          {title}
        </Heading>
        {description && (
          <Text as="p" variant="bodySm" tone="muted" align="center">
            {description}
          </Text>
        )}
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
}
