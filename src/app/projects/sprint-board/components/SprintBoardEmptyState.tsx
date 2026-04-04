"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { TasksIcon } from "@/components/icons";
import { useSearchTasks } from "../hooks/useSearchTasks";

export default function SprintBoardEmptyState() {
  const {
    defaultValue,
    currentStatus,
    currentPriority,
    currentAssigneeId,
    currentCategory,
  } = useSearchTasks();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const hasActiveQuery = Boolean(
    defaultValue.trim() ||
      currentStatus ||
      currentPriority ||
      currentAssigneeId ||
      currentCategory,
  );

  const clearQuery = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("search");
    params.delete("status");
    params.delete("priority");
    params.delete("assigneeId");
    params.delete("category");
    params.set("page", "1");
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="px-2 sm:px-7 pb-2">
      <div className="rounded-lg border border-secondary-background bg-white py-16 px-6 flex flex-col items-center text-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-full bg-muted-background text-tertiary-foreground">
          <TasksIcon className="size-6" />
        </div>
        <div className="space-y-1 max-w-sm">
          <h3 className="text-size-md font-semibold text-primary-foreground">
            {hasActiveQuery ? "No tasks match" : "No tasks yet"}
          </h3>
          <p className="text-size-sm text-tertiary-foreground">
            {hasActiveQuery
              ? "Try adjusting your search or filters to see more results."
              : "When tasks are added to this sprint, they will appear here."}
          </p>
        </div>
        {hasActiveQuery && (
          <Button variant="outline" size="sm" onClick={clearQuery}>
            Clear search and filters
          </Button>
        )}
      </div>
    </div>
  );
}
