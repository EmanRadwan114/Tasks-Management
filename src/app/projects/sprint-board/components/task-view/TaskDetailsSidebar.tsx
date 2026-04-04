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
    <div
      className={`flex flex-row items-center justify-between gap-4 py-2.5 min-h-[44px] ${className}`}
    >
      <span className="text-size-xs text-tertiary-foreground shrink-0 w-[88px] sm:w-[100px]">
        {label}
      </span>
      <div className="text-size-sm text-secondary-foreground text-right min-w-0 flex-1 flex justify-end items-center">
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
    <aside className="w-full xl:w-[300px] shrink-0 xl:sticky xl:top-4 rounded-xl border border-secondary-background bg-muted-background/80 p-5 sm:p-6 shadow-[0_1px_3px_rgba(15,23,42,0.04)]">
      <h2 className="text-size-md font-semibold text-secondary-foreground mb-1">
        Details
      </h2>

      <div className="divide-y divide-secondary-background">
        {status && (
          <DetailRow label="Status">
            <Badge
              variant="outline"
              className={`${getTaskStatusColor(status)} border-0 gap-1.5 h-7 px-2.5 rounded-full font-medium w-fit`}
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
            <div className="flex items-center justify-end gap-2">
              <PriorityIcon
                className={`size-3.5 shrink-0 ${getPriorityColor(task.priority)}`}
              />
              <span className="capitalize font-medium">{task.priority}</span>
            </div>
          </DetailRow>
        )}

        <DetailRow label="Assignee">
          {task.assignee ? (
            <div className="flex items-center justify-end gap-2.5">
              <div
                className={`rounded-full size-8 flex items-center justify-center text-white text-size-xs font-bold shrink-0 ${task.assigneeColor}`}
              >
                {task.assigneeInitials}
              </div>
              <span className="font-medium truncate max-w-[140px]">
                {task.assignee.name}
              </span>
            </div>
          ) : (
            <span className="text-tertiary-foreground">Unassigned</span>
          )}
        </DetailRow>

        {task.category && (
          <DetailRow label="Category">
            <Badge
              variant="outline"
              className={`${getCategoryColor(task.category)} border-0 w-fit capitalize rounded-full px-2.5 h-7 font-medium`}
            >
              {task.category}
            </Badge>
          </DetailRow>
        )}

        <DetailRow label="Start date">
          <span className="font-medium tabular-nums">{longDate(task.startDate)}</span>
        </DetailRow>
        <DetailRow label="Due date">
          <span className="font-medium tabular-nums">{longDate(task.dueDate)}</span>
        </DetailRow>
        <DetailRow label="Created">
          <span className="font-medium tabular-nums">{longDate(task.createdAt)}</span>
        </DetailRow>
        <DetailRow label="Updated">
          <span className="font-medium">{relative(task.updatedAt)}</span>
        </DetailRow>
      </div>
    </aside>
  );
};

export default TaskDetailsSidebar;
