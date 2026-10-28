import type { ReactNode } from "react";
import { EmptyState, type EmptyStateProps } from "../EmptyState/EmptyState";
import { ErrorState, type ErrorStateProps } from "../ErrorState/ErrorState";
import { Skeleton } from "../Skeleton/Skeleton";
import { Table, TBody, Td, Th, THead, Tr, type ColumnWidth, type TableProps } from "./Table";
import styles from "./Table.module.css";

export interface Column<Row> {
  id: string;
  header: ReactNode;
  cell: (row: Row) => ReactNode;
  numeric?: boolean;
  width?: ColumnWidth;
}

export interface DataTableProps<Row> extends Omit<TableProps, "children"> {
  columns: Column<Row>[];
  rows: Row[] | undefined;
  rowKey: (row: Row) => string;
  /** Shows skeleton rows in the shape of the table. */
  loading?: boolean;
  skeletonRows?: number;
  /** Replaces the body with an error message (and a retry button if onRetry is given). */
  error?: ErrorStateProps | null;
  /** What to show when rows is an empty list. */
  empty?: EmptyStateProps;
}

/**
 * A table of records with loading, empty and error states built in, so
 * every list in the app behaves the same way.
 */
export function DataTable<Row>({
  columns,
  rows,
  rowKey,
  loading,
  skeletonRows = 5,
  error,
  empty = { title: "Nothing here yet", description: "When there is something to show, it will appear here." },
  ...tableProps
}: DataTableProps<Row>) {
  const header = (
    <THead>
      <Tr>
        {columns.map((col) => (
          <Th key={col.id} numeric={col.numeric} width={col.width}>
            {col.header}
          </Th>
        ))}
      </Tr>
    </THead>
  );

  let body: ReactNode;
  if (error) {
    body = (
      <Tr>
        <td colSpan={columns.length} className={styles.stateCell}>
          <ErrorState size="sm" {...error} />
        </td>
      </Tr>
    );
  } else if (loading || !rows) {
    body = Array.from({ length: skeletonRows }, (_, i) => (
      <Tr key={i}>
        {columns.map((col, c) => (
          <Td key={col.id} numeric={col.numeric} width={col.width}>
            <Skeleton width={col.numeric ? "1/2" : c === 0 ? "3/4" : "full"} className={col.numeric ? styles.skeletonEnd : undefined} />
          </Td>
        ))}
      </Tr>
    ));
  } else if (rows.length === 0) {
    body = (
      <Tr>
        <td colSpan={columns.length} className={styles.stateCell}>
          <EmptyState size="sm" {...empty} />
        </td>
      </Tr>
    );
  } else {
    body = rows.map((row) => (
      <Tr key={rowKey(row)}>
        {columns.map((col) => (
          <Td key={col.id} numeric={col.numeric} width={col.width}>
            {col.cell(row)}
          </Td>
        ))}
      </Tr>
    ));
  }

  return (
    <Table {...tableProps} aria-busy={loading || undefined}>
      {header}
      <TBody>{body}</TBody>
    </Table>
  );
}
