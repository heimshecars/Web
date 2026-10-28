"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { IconButton } from "../Button/Button";
import { Heading, Text } from "../Text/Text";
import styles from "./Dialog.module.css";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
  /** Buttons, right-aligned. Put the main action last. */
  footer?: ReactNode;
}

/**
 * A modal built on the native <dialog>: focus trapping, Esc to close and
 * the backdrop come from the browser.
 */
export function Dialog({ open, onClose, title, description, children, footer }: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className={styles.dialog}
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
      onClose={onClose}
      onClick={(event) => {
        // A click on the dialog element itself (not its contents) is a click on the backdrop.
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className={styles.panel}>
        <header className={styles.header}>
          <Heading level={2} size="md" id={titleId}>
            {title}
          </Heading>
          <IconButton icon="close" label="Close" size="sm" onClick={onClose} />
        </header>
        {description && (
          <Text as="p" variant="bodySm" tone="muted" id={descriptionId}>
            {description}
          </Text>
        )}
        {children && <div className={styles.body}>{children}</div>}
        {footer && <footer className={styles.footer}>{footer}</footer>}
      </div>
    </dialog>
  );
}
