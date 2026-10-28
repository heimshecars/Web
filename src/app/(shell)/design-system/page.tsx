import type { Metadata } from "next";
import { Catalogue } from "@/design-system/catalogue/Catalogue";

export const metadata: Metadata = { title: "Design system" };

export default function DesignSystemPage() {
  return <Catalogue />;
}
