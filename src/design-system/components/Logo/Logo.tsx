import { cx } from "../../cx";
import styles from "./Logo.module.css";

export interface LogoProps {
  size?: "sm" | "md" | "lg";
  /** Show "Heimshe Cars" next to the mark. */
  wordmark?: boolean;
  className?: string;
}

/** The Heimshe Cars mark: a petrol "H" with an amber roof-light. */
export function Logo({ size = "md", wordmark = true, className }: LogoProps) {
  return (
    <span className={cx(styles.logo, className)} data-size={size}>
      <span className={styles.mark} aria-hidden>
        H<span className={styles.signal} />
      </span>
      {wordmark ? <span className={styles.wordmark}>Heimshe Cars</span> : <span className={styles.srOnly}>Heimshe Cars</span>}
    </span>
  );
}
