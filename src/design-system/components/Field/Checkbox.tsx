import type { InputHTMLAttributes, ReactNode } from "react";
import { useFieldIds } from "./Field";
import styles from "./Field.module.css";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  description?: ReactNode;
}

export function Checkbox({ label, description, id, ...rest }: CheckboxProps) {
  const ids = useFieldIds(id);
  return (
    <label className={styles.choice} htmlFor={ids.id}>
      <input
        id={ids.id}
        type="checkbox"
        className={styles.checkbox}
        aria-describedby={description ? ids.hintId : undefined}
        {...rest}
      />
      <span className={styles.choiceText}>
        <span className={styles.choiceLabel}>{label}</span>
        {description && (
          <span id={ids.hintId} className={styles.hint}>
            {description}
          </span>
        )}
      </span>
    </label>
  );
}

/** An on/off toggle that takes effect straight away (e.g. "On shift"). */
export function Switch({ label, description, id, ...rest }: CheckboxProps) {
  const ids = useFieldIds(id);
  return (
    <label className={styles.choice} htmlFor={ids.id}>
      <input
        id={ids.id}
        type="checkbox"
        role="switch"
        className={styles.switch}
        aria-describedby={description ? ids.hintId : undefined}
        {...rest}
      />
      <span className={styles.choiceText}>
        <span className={styles.choiceLabel}>{label}</span>
        {description && (
          <span id={ids.hintId} className={styles.hint}>
            {description}
          </span>
        )}
      </span>
    </label>
  );
}
