import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cx } from "../../cx";
import styles from "./TextLink.module.css";

export interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

/** An inline link inside text. For button-shaped links use ButtonLink. */
export function TextLink({ className, ...rest }: TextLinkProps) {
  return <Link className={cx(styles.link, className)} {...rest} />;
}
