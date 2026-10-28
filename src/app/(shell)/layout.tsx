import type { ReactNode } from "react";
import { AppShell } from "@/shell/AppShell";

// Every route inside (shell)/ shares this layout. Next.js keeps it mounted
// between navigations, so only the page inside <main> is swapped.
export default function ShellLayout({ children }: { children: ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
