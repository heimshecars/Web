import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "../../cx";
import type { IconName } from "../../icons";
import { Icon } from "../Icon/Icon";
import { Spinner } from "../Spinner/Spinner";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "accent" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonStyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconStart?: IconName;
  iconEnd?: IconName;
  fullWidth?: boolean;
}

export interface ButtonProps extends ButtonStyleProps, ButtonHTMLAttributes<HTMLButtonElement> {
  /** Shows a spinner, disables the button and announces "busy". */
  loading?: boolean;
  children: ReactNode;
}

function ButtonContent({
  iconStart,
  iconEnd,
  loading,
  children,
}: Pick<ButtonProps, "iconStart" | "iconEnd" | "loading" | "children">) {
  return (
    <>
      {loading ? <Spinner size="sm" label={null} /> : iconStart && <Icon name={iconStart} size="sm" />}
      <span className={styles.label}>{children}</span>
      {iconEnd && !loading && <Icon name={iconEnd} size="sm" />}
    </>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  iconStart,
  iconEnd,
  fullWidth,
  loading,
  disabled,
  type = "button",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx(styles.button, className)}
      data-variant={variant}
      data-size={size}
      data-full-width={fullWidth || undefined}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      <ButtonContent iconStart={iconStart} iconEnd={iconEnd} loading={loading}>
        {children}
      </ButtonContent>
    </button>
  );
}

export interface ButtonLinkProps extends ButtonStyleProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

/** Looks like a Button, navigates like a link. */
export function ButtonLink({
  variant = "primary",
  size = "md",
  iconStart,
  iconEnd,
  fullWidth,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      className={cx(styles.button, className)}
      data-variant={variant}
      data-size={size}
      data-full-width={fullWidth || undefined}
      {...rest}
    >
      <ButtonContent iconStart={iconStart} iconEnd={iconEnd}>
        {children}
      </ButtonContent>
    </Link>
  );
}

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  icon: IconName;
  /** Required: what the button does, for screen readers and the hover tooltip. */
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  type = "button",
  className,
  ...rest
}: IconButtonProps) {
  return (
    <button
      type={type}
      className={cx(styles.button, styles.iconOnly, className)}
      data-variant={variant}
      data-size={size}
      aria-label={label}
      title={label}
      {...rest}
    >
      <Icon name={icon} size={size === "lg" ? "lg" : "md"} />
    </button>
  );
}
