// app/(user)/dashboard/page.tsx
import EmptyState from "@/components/EmptyState";

export default function DashboardPage() {
  return (
    <EmptyState
      title="Nothing to view here"
      message="Your dashboard is empty for now. Investments and balances will appear here."
      actionLabel="Back to login"
      actionHref="/login"
    />
  );
}