import type { ReactNode } from "react";
import { Heading, Text } from "../Text/Text";
import styles from "./PageHeader.module.css";

export interface PageHeaderProps {
  title: string;
  description?: ReactNode;
  /** Small label above the title, e.g. the section name. */
  eyebrow?: string;
  /** Primary actions for the page, shown on the right. */
  actions?: ReactNode;
}

/** The top of every page: one h1, an optional description and page actions. */
export function PageHeader({ title, description, eyebrow, actions }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.text}>
        {eyebrow && (
          <Text variant="overline" tone="brand">
            {eyebrow}
          </Text>
        )}
        <Heading level={1}>{title}</Heading>
        {description && (
          <Text as="p" variant="body" tone="muted">
            {description}
          </Text>
        )}
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </header>
  );
}
