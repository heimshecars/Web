import type { SelectHTMLAttributes } from "react";
import { Icon } from "../Icon/Icon";
import { describedBy, Field, useFieldIds, type FieldShellProps } from "./Field";
import styles from "./Field.module.css";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends FieldShellProps, Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  options: SelectOption[];
  /** Shown as a first, empty choice. */
  placeholder?: string;
  size?: "sm" | "md" | "lg";
}

export function Select({
  label,
  hideLabel,
  hint,
  error,
  required,
  options,
  placeholder,
  size = "md",
  id,
  ...rest
}: SelectProps) {
  const ids = useFieldIds(id);
  return (
    <Field label={label} hideLabel={hideLabel} hint={hint} error={error} required={required} ids={ids}>
      <div className={styles.control} data-size={size} data-invalid={error ? true : undefined}>
        <select
          id={ids.id}
          className={styles.select}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(ids, hint, error)}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((o) => (
            <option key={o.value} value={o.value} disabled={o.disabled}>
              {o.label}
            </option>
          ))}
        </select>
        <span className={styles.chevron}>
          <Icon name="chevronDown" size="sm" tone="muted" />
        </span>
      </div>
    </Field>
  );
}
