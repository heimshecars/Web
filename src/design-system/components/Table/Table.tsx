import type { HTMLAttributes, ReactNode, TdHTMLAttributes, ThHTMLAttributes } from "react";
import { cx } from "../../cx";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";
import styles from "./Table.module.css";

export type ColumnWidth = "xs" | "sm" | "md" | "lg" | "auto";

export interface TableProps {
  /** Describes the table for screen readers. Shown visually only if showCaption. */
  caption: string;
  showCaption?: boolean;
  density?: "compact" | "comfortable";
  /** Keep the header row visible while the table scrolls. */
  stickyHeader?: boolean;
  "aria-busy"?: boolean;
  children: ReactNode;
}

/** Low-level table parts. For lists of records, prefer DataTable. */
export function Table({ caption, showCaption, density = "comfortable", stickyHeader, children, ...rest }: TableProps) {
  return (
    <div className={styles.scroll}>
      <table className={styles.table} data-density={density} data-sticky={stickyHeader || undefined} {...rest}>
        {showCaption ? (
          <caption className={styles.caption}>{caption}</caption>
        ) : (
          <caption>
            <VisuallyHidden>{caption}</VisuallyHidden>
          </caption>
        )}
        {children}
      </table>
    </div>
  );
}

export function THead({ children }: { children: ReactNode }) {
  return <thead className={styles.thead}>{children}</thead>;
}

export function TBody({ children }: { children: ReactNode }) {
  return <tbody className={styles.tbody}>{children}</tbody>;
}

export function Tr({ className, ...rest }: HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={cx(styles.tr, className)} {...rest} />;
}

interface CellOptions {
  /** Right-aligned tabular figures — for money, counts, times. */
  numeric?: boolean;
  width?: ColumnWidth;
}

export function Th({ numeric, width = "auto", className, scope = "col", ...rest }: CellOptions & ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={cx(styles.th, className)}
      scope={scope}
      data-numeric={numeric || undefined}
      data-width={width}
      {...rest}
    />
  );
}

export function Td({ numeric, width = "auto", className, ...rest }: CellOptions & TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className={cx(styles.td, className)} data-numeric={numeric || undefined} data-width={width} {...rest} />;
}
