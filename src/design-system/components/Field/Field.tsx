import { useId, type ReactNode } from "react";
import { Icon } from "../Icon/Icon";
import styles from "./Field.module.css";

export interface FieldIds {
  id: string;
  hintId: string;
  errorId: string;
}

export function useFieldIds(id?: string): FieldIds {
  const generated = useId();
  const base = id ?? generated;
  return { id: base, hintId: `${base}-hint`, errorId: `${base}-error` };
}

/** aria-describedby for a control, pointing at whichever messages are shown. */
export function describedBy(ids: FieldIds, hint?: ReactNode, error?: ReactNode): string | undefined {
  return [hint ? ids.hintId : null, error ? ids.errorId : null].filter(Boolean).join(" ") || undefined;
}

export interface FieldShellProps {
  label: string;
  /** Hide the label visually (it is still read out). Use sparingly, e.g. a search box. */
  hideLabel?: boolean;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
}

/** Label + control + hint/error. Used by every form control so they all line up. */
export function Field({
  label,
  hideLabel,
  hint,
  error,
  required,
  ids,
  children,
}: FieldShellProps & { ids: FieldIds; children: ReactNode }) {
  return (
    <div className={styles.field}>
      <label htmlFor={ids.id} className={styles.label} data-hidden={hideLabel || undefined}>
        {label}
        {required && (
          <span className={styles.required} aria-hidden>
            *
          </span>
        )}
      </label>
      {children}
      {error ? (
        <span id={ids.errorId} className={styles.error}>
          <Icon name="danger" size="xs" />
          {error}
        </span>
      ) : (
        hint && (
          <span id={ids.hintId} className={styles.hint}>
            {hint}
          </span>
        )
      )}
    </div>
  );
}
