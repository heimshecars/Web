import type { ReactNode } from "react";
import {
  Alert,
  Avatar,
  Badge,
  Button,
  ButtonLink,
  Card,
  CardFooter,
  CardHeader,
  Checkbox,
  EmptyState,
  ErrorState,
  Grid,
  Heading,
  Icon,
  IconButton,
  icons,
  type IconName,
  Inline,
  Input,
  LoadingState,
  Logo,
  PageHeader,
  Progress,
  Select,
  Skeleton,
  SkeletonText,
  Spinner,
  Stack,
  StatCard,
  StatusDot,
  Text,
  Textarea,
  TextLink,
} from "..";
import styles from "./Catalogue.module.css";
import { DialogDemo, MotionDemo, SegmentedDemo, SwitchDemo, TableDemo } from "./Demos";

const colourGroups: { label: string; tokens: string[] }[] = [
  { label: "Surfaces", tokens: ["canvas", "surface", "surface-sunken", "surface-hover", "chrome", "chrome-hover"] },
  { label: "Text & borders", tokens: ["text", "text-muted", "text-subtle", "border", "border-strong", "border-control"] },
  { label: "Brand & accent", tokens: ["brand", "brand-hover", "brand-soft", "accent", "accent-hover", "accent-soft"] },
  {
    label: "Status",
    tokens: ["success", "success-soft", "warning", "warning-soft", "danger", "danger-soft", "info", "info-soft", "violet", "violet-soft"],
  },
];

const spaces = ["3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"];
const tones = ["neutral", "brand", "accent", "success", "warning", "danger", "info", "violet"] as const;

function Section({ id, title, description, children }: { id: string; title: string; description: string; children: ReactNode }) {
  return (
    <Card as="section" padding="lg" id={id} aria-labelledby={`${id}-title`}>
      <Stack gap="2xs">
        <Heading level={2} size="lg" id={`${id}-title`}>
          {title}
        </Heading>
        <Text as="p" variant="bodySm" tone="muted">
          {description}
        </Text>
      </Stack>
      {children}
    </Card>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <Text variant="overline" tone="muted">
      {children}
    </Text>
  );
}

/**
 * The living catalogue of every design-system element. Rendered at
 * /design-system in both Web and Phone (it is synced with this folder).
 */
export function Catalogue() {
  return (
    <>
      <PageHeader
        eyebrow="Admin"
        title="Design system"
        description="Every building block of the Heimshe Cars apps in one place. Colours and sizes come from tokens.css, motion from animations.css — change them there and this page (and every other page) follows."
      />

      <Section id="colours" title="Colours" description="Semantic colour tokens. Components only use these — never raw colour values.">
        <Stack gap="lg">
          {colourGroups.map((group) => (
            <Stack key={group.label} gap="xs">
              <Label>{group.label}</Label>
              <Grid min="xs" gap="sm">
                {group.tokens.map((token) => (
                  <Stack key={token} gap="2xs">
                    <span className={styles.swatch} data-token={token} />
                    <Text variant="caption" tone="muted">
                      --color-{token}
                    </Text>
                  </Stack>
                ))}
              </Grid>
            </Stack>
          ))}
        </Stack>
      </Section>

      <Section id="typography" title="Typography" description="Plus Jakarta Sans. Pick a heading size or text variant — never a font size.">
        <Grid min="lg" gap="xl">
          <Stack gap="sm">
            <Label>Headings</Label>
            <Heading level={3} size="display">
              Display £1,284
            </Heading>
            <Heading level={3} size="xl">
              Heading XL
            </Heading>
            <Heading level={3} size="lg">
              Heading LG
            </Heading>
            <Heading level={3} size="md">
              Heading MD
            </Heading>
            <Heading level={3} size="sm">
              Heading SM
            </Heading>
          </Stack>
          <Stack gap="sm">
            <Label>Text</Label>
            <Text variant="lead">Lead — introductions</Text>
            <Text variant="body">Body — the default for reading.</Text>
            <Text variant="bodySm">Body small — tables, cards, dense UI.</Text>
            <Text variant="label">Label — form labels, emphasis</Text>
            <Text variant="caption" tone="muted">
              Caption — hints and metadata
            </Text>
            <Text variant="overline" tone="brand">
              Overline — section labels
            </Text>
            <Text variant="mono">JOB-2026-0142 · AB12 CDE</Text>
            <Text as="p" variant="bodySm">
              Inline <TextLink href="#typography">text link</TextLink> inside a sentence.
            </Text>
          </Stack>
          <Stack gap="sm">
            <Label>Tones</Label>
            {(["default", "muted", "subtle", "brand", "accent", "success", "warning", "danger"] as const).map((tone) => (
              <Text key={tone} variant="bodySm" weight="semibold" tone={tone}>
                {tone}
              </Text>
            ))}
          </Stack>
        </Grid>
      </Section>

      <Section id="spacing" title="Spacing, radius & shadow" description="One spacing scale for every gap and padding.">
        <Grid min="md" gap="xl">
          <Stack gap="xs">
            {spaces.map((size) => (
              <Inline key={size} gap="sm">
                <Text variant="mono" tone="muted" className={styles.scaleLabel}>
                  {size}
                </Text>
                <span className={styles.spaceBar} data-size={size} />
              </Inline>
            ))}
          </Stack>
          <Inline gap="md" wrap>
            {["xs", "sm", "md", "lg", "xl"].map((r) => (
              <Stack key={r} gap="2xs" align="center">
                <span className={styles.radiusBox} data-radius={r} />
                <Text variant="caption" tone="muted">
                  radius-{r}
                </Text>
              </Stack>
            ))}
            {["xs", "sm", "md", "lg"].map((s) => (
              <Stack key={s} gap="2xs" align="center">
                <span className={styles.shadowBox} data-shadow={s} />
                <Text variant="caption" tone="muted">
                  shadow-{s}
                </Text>
              </Stack>
            ))}
          </Inline>
        </Grid>
      </Section>

      <Section
        id="icons"
        title="Icons"
        description={`${Object.keys(icons).length} icons, named by meaning. Use <Icon name="…" />; add more in design-system/icons.ts.`}
      >
        <Grid min="xs" gap="xs">
          {(Object.keys(icons) as IconName[]).map((name) => (
            <Stack key={name} gap="2xs" align="center" padding="xs" className={styles.iconCell}>
              <Icon name={name} size="lg" />
              <Text variant="caption" tone="muted">
                {name}
              </Text>
            </Stack>
          ))}
        </Grid>
        <Inline gap="md">
          <Label>Sizes</Label>
          {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
            <Icon key={size} name="jobs" size={size} tone="brand" />
          ))}
        </Inline>
      </Section>

      <Section id="logo" title="Logo" description="The petrol H with the amber roof-light.">
        <Inline gap="xl" wrap>
          <Logo size="sm" />
          <Logo />
          <Logo size="lg" />
          <Logo size="lg" wordmark={false} />
        </Inline>
      </Section>

      <Section id="buttons" title="Buttons" description="Primary for the main action on a screen. One primary per area.">
        <Stack gap="md">
          <Inline gap="sm" wrap>
            <Button iconStart="add">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="accent" iconStart="logJob">
              Accent
            </Button>
            <Button variant="danger" iconStart="delete">
              Danger
            </Button>
          </Inline>
          <Inline gap="sm" wrap>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button loading>Saving</Button>
            <Button disabled>Disabled</Button>
            <Button variant="secondary" iconEnd="chevronRight">
              Next
            </Button>
            <ButtonLink href="#buttons" variant="secondary" iconStart="view">
              Link button
            </ButtonLink>
          </Inline>
          <Inline gap="xs">
            <IconButton icon="edit" label="Edit" />
            <IconButton icon="more" label="More options" variant="secondary" />
            <IconButton icon="add" label="Add" variant="primary" />
            <IconButton icon="delete" label="Delete" variant="danger" size="sm" />
          </Inline>
          <SegmentedDemo />
        </Stack>
      </Section>

      <Section id="badges" title="Badges & status" description="Short labels for status and category.">
        <Stack gap="md">
          <Inline gap="xs" wrap>
            {tones.map((tone) => (
              <Badge key={tone} tone={tone}>
                {tone}
              </Badge>
            ))}
          </Inline>
          <Inline gap="xs" wrap>
            {tones.map((tone) => (
              <Badge key={tone} tone={tone} variant="solid">
                {tone}
              </Badge>
            ))}
          </Inline>
          <Inline gap="xs" wrap>
            <Badge tone="brand" icon="route">
              Short
            </Badge>
            <Badge tone="accent" icon="route">
              Long distance
            </Badge>
            <Badge tone="success" dot>
              Completed
            </Badge>
            <Badge tone="info" dot>
              On the way
            </Badge>
            <Badge tone="warning" dot>
              Unassigned
            </Badge>
            <Badge tone="danger" variant="outline">
              Cancelled
            </Badge>
            <Badge size="sm" tone="neutral">
              Small
            </Badge>
          </Inline>
          <Inline gap="lg" wrap>
            <Inline gap="xs">
              <StatusDot tone="success" pulse label="Online" />
              <Text variant="bodySm">On shift</Text>
            </Inline>
            <Inline gap="xs">
              <StatusDot tone="warning" />
              <Text variant="bodySm">On a break</Text>
            </Inline>
            <Inline gap="xs">
              <StatusDot />
              <Text variant="bodySm">Off shift</Text>
            </Inline>
          </Inline>
          <Inline gap="sm">
            <Avatar name="Ali Khan" size="sm" />
            <Avatar name="Sam Patel" />
            <Avatar name="Jo Wright" size="lg" />
            <Avatar name="Mo Rahman" size="lg" />
          </Inline>
        </Stack>
      </Section>

      <Section id="forms" title="Forms" description="Every control has a label, an optional hint and an error state.">
        <Grid min="md" gap="lg">
          <Input label="Pickup" placeholder="e.g. 12 High Street" iconStart="pickup" hint="Street and number" />
          <Input label="Fare" prefix="£" inputMode="decimal" placeholder="0.00" required />
          <Input label="Distance" suffix="miles" defaultValue="34" />
          <Input label="Phone" defaultValue="07" error="Enter a full UK mobile number" />
          <Select
            label="Job type"
            placeholder="Choose…"
            options={[
              { value: "short", label: "Short distance" },
              { value: "long", label: "Long distance" },
            ]}
          />
          <Input label="Disabled" defaultValue="Can't change this" disabled />
          <Textarea label="Notes" placeholder="Anything the driver should know" />
          <Stack gap="sm">
            <Checkbox label="Paid by card" description="Taken on the card machine" defaultChecked />
            <Checkbox label="Return journey" />
            <SwitchDemo />
          </Stack>
        </Grid>
      </Section>

      <Section id="cards" title="Cards & stats" description="Cards group content; stat cards show one headline number.">
        <Grid min="sm">
          <StatCard label="Jobs today" value="38" icon="jobs" trend={{ direction: "up", label: "+6 vs yesterday" }} />
          <StatCard label="Takings" value="£1,284.50" icon="earnings" hint="Before commission" />
          <StatCard label="Cancelled" value="3" icon="error" trend={{ direction: "up", label: "+2 vs yesterday", sentiment: "negative" }} />
          <StatCard label="Commission" loading />
        </Grid>
        <Grid min="md">
          <Card>
            <CardHeader title="Card title" description="A short description." actions={<IconButton icon="more" label="More" />} />
            <SkeletonText lines={2} />
            <CardFooter>
              <Button variant="ghost">Cancel</Button>
              <Button>Save</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader title="Daily target" />
            <Progress label="Jobs" value={18} max={25} valueLabel="18 / 25" />
            <Progress label="Takings" value={640} max={800} valueLabel="£640 / £800" tone="accent" />
            <Progress label="Rating" value={96} valueLabel="96%" tone="success" />
          </Card>
        </Grid>
      </Section>

      <Section id="tables" title="Tables" description="DataTable has loading, empty and error states built in. Switch between them below.">
        <TableDemo />
      </Section>

      <Section
        id="states"
        title="Loading, empty & error states"
        description="Never leave a blank area: show a skeleton while loading, an empty state when there's nothing, an error state when it failed."
      >
        <Grid min="md" gap="md">
          <Card padding="none">
            <LoadingState label="Loading jobs…" />
          </Card>
          <Card padding="none">
            <EmptyState
              icon="jobs"
              title="No jobs yet today"
              description="New jobs from the hotline and card machine appear here."
              action={<Button iconStart="add">Log a job</Button>}
            />
          </Card>
          <Card padding="none">
            <ErrorState description="We couldn't reach the server. Your data is safe." />
          </Card>
          <Card>
            <Stack gap="md" aria-busy="true">
              <Inline gap="sm">
                <Skeleton shape="circle" />
                <Stack gap="2xs" grow>
                  <Skeleton width="1/2" />
                  <Skeleton width="1/4" />
                </Stack>
              </Inline>
              <SkeletonText lines={3} />
              <Skeleton shape="block" height="sm" />
              <Inline gap="xs">
                <Skeleton shape="control" width="sm" />
                <Skeleton shape="control" width="xs" />
              </Inline>
            </Stack>
          </Card>
        </Grid>
        <Inline gap="lg">
          <Spinner size="sm" />
          <Spinner />
          <Spinner size="lg" />
        </Inline>
      </Section>

      <Section id="alerts" title="Alerts" description="Inline messages about the page or a section.">
        <Stack gap="sm">
          <Alert tone="info" title="Heads up">
            Long-distance commission applies to fares over £20.
          </Alert>
          <Alert tone="success" title="Job saved" />
          <Alert
            tone="warning"
            title="2 jobs unassigned"
            action={
              <Button size="sm" variant="secondary">
                Assign now
              </Button>
            }
          >
            They were booked more than 10 minutes ago.
          </Alert>
          <Alert tone="danger" title="Card machine disconnected">
            Payments won&apos;t be matched to jobs until it reconnects.
          </Alert>
        </Stack>
      </Section>

      <Section id="dialog" title="Dialog" description="For confirmations and short forms. Esc or the backdrop closes it.">
        <DialogDemo />
      </Section>

      <Section
        id="motion"
        title="Motion"
        description="Every animation comes from animations.css. Press replay to see them. Users who prefer reduced motion get none."
      >
        <MotionDemo />
      </Section>
    </>
  );
}
