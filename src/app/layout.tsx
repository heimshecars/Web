import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { brandFont } from "@/design-system/fonts";
import "@/design-system/index.css";

export const metadata: Metadata = {
  title: { default: "Heimshe Cars", template: "%s · Heimshe Cars" },
  description: "Dispatch and back office for Heimshe Cars.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB" className={brandFont.variable}>
      <body>{children}</body>
    </html>
  );
}
