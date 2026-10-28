import type { ReactNode } from "react";
import type { IconName } from "../../icons";
import { IconButton } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";
import styles from "./Alert.module.css";

export type AlertTone = "info" | "success" | "warning" | "danger";

const toneIcon: Record<AlertTone, IconName> = {
  info: "info",
  success: "success",
  warning: "warning",
  danger: "danger",
};

export interface AlertProps {
  tone?: AlertTone;
  title?: string;
  children?: ReactNode;
  action?: ReactNode;
  /** Shows a close button. */
  onDismiss?: () => void;
}

/** An inline message about the page or a section: a warning, a success, a problem. */
export function Alert({ tone = "info", title, children, action, onDismiss }: AlertProps) {
  return (
    <div className={styles.alert} data-tone={tone} role={tone === "danger" || tone === "warning" ? "alert" : "status"}>
      <span className={styles.icon}>
        <Icon name={toneIcon[tone]} />
      </span>
      <div className={styles.body}>
        {title && <Text variant="label">{title}</Text>}
        {children && (
          <Text as="div" variant="bodySm" tone="muted">
            {children}
          </Text>
        )}
        {action && <div className={styles.action}>{action}</div>}
      </div>
      {onDismiss && <IconButton icon="close" label="Dismiss" size="sm" onClick={onDismiss} />}
    </div>
  );
}
