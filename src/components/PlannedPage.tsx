import { Card, EmptyState, Icon, type IconName, PageHeader, Text } from "@/design-system";
import styles from "./PlannedPage.module.css";

interface PlannedPageProps {
  title: string;
  description: string;
  icon: IconName;
  /** What this page will do once it's built — check these with the business. */
  plans: string[];
}

/** Placeholder for pages that haven't been built yet. */
export function PlannedPage({ title, description, icon, plans }: PlannedPageProps) {
  return (
    <>
      <PageHeader title={title} description={description} />
      <Card padding="lg">
        <EmptyState icon={icon} title="This page is next" description="Here's what it will do once it's built." />
        <ul role="list" className={styles.plans}>
          {plans.map((plan) => (
            <li key={plan} className={styles.plan}>
              <span className={styles.check}>
                <Icon name="check" size="sm" />
              </span>
              <Text variant="bodySm">{plan}</Text>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}
