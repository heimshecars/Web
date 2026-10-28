import type { ReactNode } from "react";
import type { IconName } from "../../icons";
import { Button } from "../Button/Button";
import { EmptyState } from "../EmptyState/EmptyState";

export interface ErrorStateProps {
  title?: string;
  description?: ReactNode;
  icon?: IconName;
  /** Shows a "Try again" button. */
  onRetry?: () => void;
  retryLabel?: string;
  /** Extra actions, e.g. a link back to safety. */
  action?: ReactNode;
  size?: "sm" | "md";
}

/** When something failed to load. Always say what happened and offer a way forward. */
export function ErrorState({
  title = "Something went wrong",
  description = "We couldn't load this. Check your connection and try again.",
  icon = "serverError",
  onRetry,
  retryLabel = "Try again",
  action,
  size,
}: ErrorStateProps) {
  return (
    <div role="alert">
      <EmptyState
        tone="danger"
        icon={icon}
        title={title}
        description={description}
        size={size}
        action={
          (onRetry || action) && (
            <>
              {onRetry && (
                <Button variant="secondary" iconStart="refresh" onClick={onRetry}>
                  {retryLabel}
                </Button>
              )}
              {action}
            </>
          )
        }
      />
    </div>
  );
}
