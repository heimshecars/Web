import { Plus_Jakarta_Sans } from "next/font/google";

// The brand typeface. Self-hosted at build time by next/font and exposed as
// --font-brand, which tokens.css wraps into --font-sans.
export const brandFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-brand",
  display: "swap",
});
