/**
 * Heimshe Cars design system — import everything from "@/design-system".
 *
 *   tokens.css      colours, type, spacing, sizes, breakpoints   (the palette)
 *   animations.css  durations, easings, keyframes, presets       (all motion)
 *   icons.ts        the icon registry
 *   components/     every UI element, each styled only with tokens
 *
 * See the live catalogue at /design-system in the running app.
 */
export { cx } from "./cx";
export { icons, type IconName } from "./icons";

// Brand
export { Logo } from "./components/Logo/Logo";

// Layout
export { Stack, Inline, type StackProps, type Space } from "./components/Stack/Stack";
export { Grid, type GridProps } from "./components/Grid/Grid";
export { Divider } from "./components/Divider/Divider";
export { PageHeader, type PageHeaderProps } from "./components/PageHeader/PageHeader";
export { Card, CardHeader, CardFooter, type CardProps } from "./components/Card/Card";

// Type & icons
export { Text, Heading, type TextProps, type HeadingProps, type TextTone } from "./components/Text/Text";
export { TextLink } from "./components/TextLink/TextLink";
export { Icon, type IconProps } from "./components/Icon/Icon";
export { VisuallyHidden } from "./components/VisuallyHidden/VisuallyHidden";

// Actions
export {
  Button,
  ButtonLink,
  IconButton,
  type ButtonProps,
  type ButtonVariant,
  type IconButtonProps,
} from "./components/Button/Button";
export { SegmentedControl, type Segment } from "./components/SegmentedControl/SegmentedControl";
export { Dialog, type DialogProps } from "./components/Dialog/Dialog";

// Forms
export { Input, Textarea } from "./components/Field/Input";
export { Select, type SelectOption } from "./components/Field/Select";
export { Checkbox, Switch } from "./components/Field/Checkbox";

// Data display
export { Badge, type BadgeProps, type BadgeTone } from "./components/Badge/Badge";
export { StatusDot } from "./components/StatusDot/StatusDot";
export { Avatar } from "./components/Avatar/Avatar";
export { StatCard, type StatCardProps } from "./components/StatCard/StatCard";
export { Progress } from "./components/Progress/Progress";
export { Table, THead, TBody, Tr, Th, Td } from "./components/Table/Table";
export { DataTable, type Column, type DataTableProps } from "./components/Table/DataTable";

// Feedback & states
export { Alert, type AlertProps } from "./components/Alert/Alert";
export { Spinner } from "./components/Spinner/Spinner";
export { Skeleton, SkeletonText } from "./components/Skeleton/Skeleton";
export { LoadingState } from "./components/LoadingState/LoadingState";
export { EmptyState, type EmptyStateProps } from "./components/EmptyState/EmptyState";
export { ErrorState, type ErrorStateProps } from "./components/ErrorState/ErrorState";
