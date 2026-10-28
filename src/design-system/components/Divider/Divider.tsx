import styles from "./Divider.module.css";

/** A horizontal rule between sections. */
export function Divider({ spacing = "md" }: { spacing?: "none" | "sm" | "md" | "lg" }) {
  return <hr className={styles.divider} data-spacing={spacing} />;
}
