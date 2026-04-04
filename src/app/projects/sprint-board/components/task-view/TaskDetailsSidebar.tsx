import React from "react";
import { formatDistanceToNow } from "date-fns";
import { IDisplayTask } from "../../types/interfaces";
import { Badge } from "@/components/ui/badge";
import {
  formatLabelFromSlug,
  getCategoryColor,
  getPriorityColor,
  getTaskStatusColor,
} from "../../utils/board-helpers";
import { TTaskStatus } from "../../types/types";
import { PriorityIcon } from "@/components/icons";

interface IProps {
  displayTask: IDisplayTask;
}

function DetailRow({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <span className="text-size-xs text-muted-foreground font-medium">
        {label}
      </span>
      <div className="text-size-sm text-secondary-foreground text-right min-w-0 flex-1 flex items-center">
        {children}
      </div>
    </div>
  );
}

const TaskDetailsSidebar: React.FC<IProps> = ({ displayTask }) => {
  const task = displayTask;
  const status = task.status as TTaskStatus | undefined;

  const longDate = (iso?: string) => {
    if (!iso) return "—";
    try {
      return new Date(iso).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "—";
    }
  };

  const relative = (iso?: string) => {
    if (!iso) return "—";
    try {
      return formatDistanceToNow(new Date(iso), { addSuffix: true });
    } catch {
      return "—";
    }
  };

  return (
    <aside className="w-full h-full shrink-0 border-s border-secondary-background">
      <h2 className="text-size-md font-semibold text-secondary-foreground mb-1 border-b border-secondary-background py-4 px-5">
        Details
      </h2>

      <div className="divide-y divide-secondary-background px-5">
        <div className="space-y-5 py-5">
          {status && (
            <DetailRow label="Status">
              <Badge
                variant="outline"
                className={`${getTaskStatusColor(status)} border-0`}
              >
                <span
                  className="size-1.5 rounded-full bg-current opacity-90"
                  aria-hidden
                />
                {formatLabelFromSlug(status)}
              </Badge>
            </DetailRow>
          )}

          {task.priority && (
            <DetailRow label="Priority">
              <div className="flex items-center  gap-2">
                <PriorityIcon
                  className={`size-3.5 shrink-0 ${getPriorityColor(
                    task.priority,
                  )}`}
                />
                <span className="capitalize">{task.priority}</span>
              </div>
            </DetailRow>
          )}

          <DetailRow label="Assignee">
            {task.assignee ? (
              <div className="flex items-center  gap-2.5">
                <div
                  className={`rounded-full size-6 flex items-center justify-center text-white text-[9px] font-medium shrink-0 ${task.assigneeColor}`}
                >
                  {task.assigneeInitials}
                </div>
                <span className="truncate max-w-35">{task.assignee.name}</span>
              </div>
            ) : (
              <span className="text-tertiary-foreground">Unassigned</span>
            )}
          </DetailRow>

          {task.category && (
            <DetailRow label="Category">
              <Badge
                variant="outline"
                className={`${getCategoryColor(task.category)} border-0 py-0.5`}
              >
                {task.category}
              </Badge>
            </DetailRow>
          )}
        </div>

        <div className="space-y-5 py-5">
          <DetailRow label="Start date">
            <span className="tabular-nums">{longDate(task.startDate)}</span>
          </DetailRow>
          <DetailRow label="Due date">
            <span className="tabular-nums">{longDate(task.dueDate)}</span>
          </DetailRow>
          <DetailRow label="Created">
            <span className="tabular-nums text-tertiary-foreground">
              {longDate(task.createdAt)}
            </span>
          </DetailRow>
          <DetailRow label="Updated">
            <span className="text-tertiary-foreground">
              {relative(task.updatedAt)}
            </span>
          </DetailRow>
        </div>
      </div>
    </aside>
  );
};

export default TaskDetailsSidebar;
