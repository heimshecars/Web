"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/design-system";
import type { NavItem } from "./navigation";
import styles from "./Sidebar.module.css";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** The only part of the sidebar that updates on navigation: its highlight. */
export function NavLink({ href, label, icon }: NavItem) {
  const pathname = usePathname();
  const active = isActive(pathname, href);
  return (
    <Link href={href} className={styles.link} aria-current={active ? "page" : undefined} title={label}>
      <Icon name={icon} />
      <span className={styles.label}>{label}</span>
    </Link>
  );
}
