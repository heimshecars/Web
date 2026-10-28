"use client";

import { useId } from "react";
import type { IconName } from "../../icons";
import { Icon } from "../Icon/Icon";
import styles from "./SegmentedControl.module.css";

export interface Segment<V extends string> {
  value: V;
  label: string;
  icon?: IconName;
}

export interface SegmentedControlProps<V extends string> {
  /** What is being chosen, for screen readers (e.g. "Time period"). */
  label: string;
  options: Segment<V>[];
  value?: V;
  defaultValue?: V;
  onChange?: (value: V) => void;
  size?: "sm" | "md";
}

/**
 * Pick one of a few options — Today / Week / Month, Short / Long.
 * Built from native radio buttons, so arrow keys work out of the box.
 */
export function SegmentedControl<V extends string>({
  label,
  options,
  value,
  defaultValue,
  onChange,
  size = "md",
}: SegmentedControlProps<V>) {
  const name = useId();
  return (
    <fieldset className={styles.group} data-size={size}>
      <legend className={styles.legend}>{label}</legend>
      {options.map((option) => (
        <label key={option.value} className={styles.segment}>
          <input
            type="radio"
            className={styles.radio}
            name={name}
            value={option.value}
            checked={value === undefined ? undefined : value === option.value}
            defaultChecked={defaultValue === undefined ? undefined : defaultValue === option.value}
            onChange={() => onChange?.(option.value)}
          />
          {option.icon && <Icon name={option.icon} size="sm" />}
          <span>{option.label}</span>
        </label>
      ))}
    </fieldset>
  );
}
