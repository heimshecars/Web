import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import type { IconName } from "../../icons";
import { Icon } from "../Icon/Icon";
import { describedBy, Field, useFieldIds, type FieldShellProps } from "./Field";
import styles from "./Field.module.css";

export interface InputProps extends FieldShellProps, Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> {
  iconStart?: IconName;
  /** Fixed text before the value, e.g. "£". */
  prefix?: string;
  /** Fixed text after the value, e.g. "miles" or "%". */
  suffix?: string;
  size?: "sm" | "md" | "lg";
}

export function Input({
  label,
  hideLabel,
  hint,
  error,
  required,
  iconStart,
  prefix,
  suffix,
  size = "md",
  id,
  ...rest
}: InputProps) {
  const ids = useFieldIds(id);
  return (
    <Field label={label} hideLabel={hideLabel} hint={hint} error={error} required={required} ids={ids}>
      <div className={styles.control} data-size={size} data-invalid={error ? true : undefined}>
        {iconStart && <Icon name={iconStart} size="sm" tone="muted" />}
        {prefix && <span className={styles.affix}>{prefix}</span>}
        <input
          id={ids.id}
          className={styles.input}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(ids, hint, error)}
          {...rest}
        />
        {suffix && <span className={styles.affix}>{suffix}</span>}
      </div>
    </Field>
  );
}

export interface TextareaProps extends FieldShellProps, TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ label, hideLabel, hint, error, required, id, rows = 4, ...rest }: TextareaProps) {
  const ids = useFieldIds(id);
  return (
    <Field label={label} hideLabel={hideLabel} hint={hint} error={error} required={required} ids={ids}>
      <div className={styles.control} data-multiline data-invalid={error ? true : undefined}>
        <textarea
          id={ids.id}
          rows={rows}
          className={styles.input}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(ids, hint, error)}
          {...rest}
        />
      </div>
    </Field>
  );
}
