import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cx } from "../../cx";
import { Heading, Text } from "../Text/Text";
import styles from "./Card.module.css";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  padding?: "none" | "sm" | "md" | "lg";
  children?: ReactNode;
}

/** A raised surface that groups related content. */
export function Card({ as: Tag = "section", padding = "md", className, ...rest }: CardProps) {
  return <Tag className={cx(styles.card, className)} data-padding={padding} {...rest} />;
}

export interface CardHeaderProps {
  title: ReactNode;
  description?: ReactNode;
  /** Buttons or links on the right. */
  actions?: ReactNode;
}

export function CardHeader({ title, description, actions }: CardHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.headerText}>
        <Heading level={2} size="sm">
          {title}
        </Heading>
        {description && (
          <Text as="p" variant="bodySm" tone="muted">
            {description}
          </Text>
        )}
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </header>
  );
}

/** A footer row separated by a border, for actions or totals. */
export function CardFooter({ children }: { children: ReactNode }) {
  return <footer className={styles.footer}>{children}</footer>;
}
