"use client";

import { useState } from "react";
import {
  Badge,
  Button,
  type Column,
  DataTable,
  Dialog,
  Input,
  Inline,
  SegmentedControl,
  Stack,
  Switch,
  Text,
} from "..";
import styles from "./Catalogue.module.css";

const gbp = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" });

/* Sample rows for the catalogue only. */
interface SampleJob {
  id: string;
  time: string;
  pickup: string;
  driver: string;
  type: "short" | "long";
  status: "completed" | "on-the-way" | "unassigned";
  farePence: number;
}

const sampleJobs: SampleJob[] = [
  { id: "J-0142", time: "08:12", pickup: "Station Road", driver: "Ali Khan", type: "short", status: "completed", farePence: 850 },
  { id: "J-0143", time: "08:40", pickup: "Heathrow T5", driver: "Sam Patel", type: "long", status: "completed", farePence: 6500 },
  { id: "J-0144", time: "09:05", pickup: "High Street", driver: "Jo Wright", type: "short", status: "on-the-way", farePence: 1200 },
  { id: "J-0145", time: "09:18", pickup: "Hospital, Gate B", driver: "—", type: "short", status: "unassigned", farePence: 950 },
];

const statusBadge: Record<SampleJob["status"], { tone: "success" | "info" | "warning"; label: string }> = {
  completed: { tone: "success", label: "Completed" },
  "on-the-way": { tone: "info", label: "On the way" },
  unassigned: { tone: "warning", label: "Unassigned" },
};

const columns: Column<SampleJob>[] = [
  { id: "ref", header: "Ref", width: "sm", cell: (j) => <Text variant="mono">{j.id}</Text> },
  { id: "time", header: "Time", width: "xs", cell: (j) => <Text variant="bodySm" numeric>{j.time}</Text> },
  { id: "pickup", header: "Pickup", cell: (j) => j.pickup },
  { id: "driver", header: "Driver", width: "md", cell: (j) => j.driver },
  {
    id: "type",
    header: "Type",
    width: "sm",
    cell: (j) => (
      <Badge tone={j.type === "long" ? "accent" : "brand"} size="sm">
        {j.type === "long" ? "Long" : "Short"}
      </Badge>
    ),
  },
  {
    id: "status",
    header: "Status",
    width: "md",
    cell: (j) => (
      <Badge tone={statusBadge[j.status].tone} dot>
        {statusBadge[j.status].label}
      </Badge>
    ),
  },
  { id: "fare", header: "Fare", numeric: true, width: "sm", cell: (j) => gbp.format(j.farePence / 100) },
];

type TableState = "data" | "loading" | "empty" | "error";

export function TableDemo() {
  const [state, setState] = useState<TableState>("data");
  return (
    <Stack gap="md">
      <SegmentedControl<TableState>
        label="Table state"
        size="sm"
        value={state}
        onChange={setState}
        options={[
          { value: "data", label: "With data" },
          { value: "loading", label: "Loading" },
          { value: "empty", label: "Empty" },
          { value: "error", label: "Error" },
        ]}
      />
      <DataTable
        caption="Sample jobs"
        columns={columns}
        rows={state === "empty" ? [] : sampleJobs}
        rowKey={(j) => j.id}
        loading={state === "loading"}
        skeletonRows={4}
        error={state === "error" ? { onRetry: () => setState("data") } : null}
        empty={{ icon: "jobs", title: "No jobs today", description: "Jobs will appear here as they come in." }}
      />
    </Stack>
  );
}

export function SegmentedDemo() {
  const [period, setPeriod] = useState("today");
  return (
    <SegmentedControl
      label="Period"
      value={period}
      onChange={setPeriod}
      options={[
        { value: "today", label: "Today", icon: "date" },
        { value: "week", label: "This week" },
        { value: "month", label: "This month" },
      ]}
    />
  );
}

export function SwitchDemo() {
  const [onShift, setOnShift] = useState(true);
  return (
    <Switch
      label={onShift ? "On shift" : "Off shift"}
      description="Toggles straight away"
      checked={onShift}
      onChange={(e) => setOnShift(e.target.checked)}
    />
  );
}

export function DialogDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Inline>
        <Button variant="secondary" iconStart="error" onClick={() => setOpen(true)}>
          Cancel a job…
        </Button>
      </Inline>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="Cancel job J-0144?"
        description="The driver will be told straight away. This can't be undone."
        footer={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Keep job
            </Button>
            <Button variant="danger" onClick={() => setOpen(false)}>
              Cancel job
            </Button>
          </>
        }
      >
        <Input label="Reason" placeholder="e.g. Customer no-show" />
      </Dialog>
    </>
  );
}

const motions = ["pageEnter", "fadeIn", "slideUp", "scaleIn", "dialogIn"] as const;

export function MotionDemo() {
  const [run, setRun] = useState(0);
  return (
    <Stack gap="md">
      <Inline>
        <Button variant="secondary" iconStart="refresh" onClick={() => setRun((n) => n + 1)}>
          Replay
        </Button>
      </Inline>
      <Inline gap="md" wrap>
        {motions.map((motion) => (
          <Stack key={`${motion}-${run}`} gap="2xs" align="center">
            <span className={styles.motionBox} data-motion={motion} />
            <Text variant="mono" tone="muted">
              {motion}
            </Text>
          </Stack>
        ))}
        <Stack gap="2xs" align="center">
          <span className={styles.motionBox} data-motion="shimmer" />
          <Text variant="mono" tone="muted">
            shimmer
          </Text>
        </Stack>
      </Inline>
    </Stack>
  );
}
