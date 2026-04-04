"use client";

import React, { useMemo, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { IComment, IDisplayTask, IUser } from "../../types/interfaces";
import {
  formatLabelFromSlug,
  getTaskStatusColor,
} from "../../utils/board-helpers";
import { TTaskStatus } from "../../types/types";
import TaskCommentForm from "./TaskCommentForm";

type ActivityFilter = "all" | "comments" | "history";

type TimelineItem =
  | {
      kind: "comment";
      id: string;
      at: string;
      message: string;
      author: IUser;
    }
  | {
      kind: "system";
      id: string;
      at: string;
      message: string;
      author?: IUser;
      variant: "created" | "status_change" | "generic";
    };

function authorForComment(comment: IComment, users: IUser[]): IUser {
  if (!users.length) {
    return { name: "Collaborator", email: "" };
  }
  const idx = Math.abs((comment.id ?? 0) % users.length);
  return users[idx]!;
}

function initialsForUser(user: IUser) {
  return user.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const brandColors = [
  "bg-brand-orange",
  "bg-brand-yellow",
  "bg-brand-blue",
  "bg-brand-red",
  "bg-brand-green",
  "bg-primary",
];

function colorForUser(user: IUser) {
  const idx = Math.abs((user.id ?? 0) % brandColors.length);
  return brandColors[idx];
}

const filterTabs: { id: ActivityFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "comments", label: "Comments" },
  { id: "history", label: "History" },
];

interface IProps {
  taskId: number;
  task: IDisplayTask;
  comments: IComment[];
  users: IUser[];
}

const TaskActivity: React.FC<IProps> = ({
  taskId,
  task,
  comments,
  users,
}) => {
  const [filter, setFilter] = useState<ActivityFilter>("all");

  const assignee = task.assignee;
  const status = task.status as TTaskStatus | undefined;

  const timeline = useMemo(() => {
    const items: TimelineItem[] = [];

    for (const c of comments) {
      const author = authorForComment(c, users);
      items.push({
        kind: "comment",
        id: `c-${c.id ?? c.createdAt}`,
        at: c.createdAt,
        message: c.message,
        author,
      });
    }

    if (task.createdAt) {
      items.push({
        kind: "system",
        id: "created",
        at: task.createdAt,
        message: assignee
          ? `Task created by ${assignee.name}`
          : "Task created",
        author: assignee,
        variant: "created",
      });
    }

    if (
      task.updatedAt &&
      task.createdAt &&
      task.updatedAt !== task.createdAt
    ) {
      const created = new Date(task.createdAt).getTime();
      const updated = new Date(task.updatedAt).getTime();
      if (updated > created + 30_000) {
        items.push({
          kind: "system",
          id: "updated",
          at: task.updatedAt,
          message: "",
          author: assignee,
          variant:
            assignee && status ? "status_change" : "generic",
        });
      }
    }

    items.sort(
      (a, b) => new Date(b.at).getTime() - new Date(a.at).getTime(),
    );

    return items;
  }, [comments, task, users, assignee, status]);

  const filtered = useMemo(() => {
    if (filter === "all") return timeline;
    if (filter === "comments")
      return timeline.filter((i) => i.kind === "comment");
    return timeline.filter((i) => i.kind === "system");
  }, [timeline, filter]);

  const composerInitials =
    task.assigneeInitials ??
    initialsForUser(users[0] ?? { name: "?", email: "" });
  const composerColor =
    task.assigneeColor ?? colorForUser(users[0] ?? { name: "?", email: "" });

  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-size-md font-semibold text-secondary-foreground">
            Activity
          </h2>
          <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-secondary-background px-1.5 text-size-xs font-medium text-tertiary-foreground tabular-nums">
            {timeline.length}
          </span>
        </div>
        <div
          className="inline-flex rounded-[10px] border border-secondary-background bg-muted-background p-1 gap-0.5 self-start sm:self-auto shadow-[inset_0_1px_2px_rgba(15,23,42,0.04)]"
          role="tablist"
          aria-label="Activity filter"
        >
          {filterTabs.map((tab) => (
            <Button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={filter === tab.id}
              variant="ghost"
              size="sm"
              className={cn(
                "h-8 px-3.5 text-size-xs rounded-lg font-medium transition-colors",
                filter === tab.id
                  ? "bg-primary text-white shadow-sm hover:bg-primary hover:text-white"
                  : "text-tertiary-foreground hover:text-secondary-foreground hover:bg-transparent",
              )}
              onClick={() => setFilter(tab.id)}
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="relative">
        {filtered.length > 0 && (
          <div
            className="pointer-events-none absolute left-[17px] top-3 bottom-3 w-px bg-secondary-background"
            aria-hidden
          />
        )}

        <ul className="relative space-y-8">
          {filtered.length === 0 ? (
            <li className="rounded-xl border border-dashed border-secondary-background bg-muted-background/40 py-10 text-center text-size-sm text-tertiary-foreground">
              Nothing to show for this filter yet.
            </li>
          ) : (
            filtered.map((item) => (
              <li key={item.id} className="relative flex gap-4">
                {item.kind === "comment" ? (
                  <>
                    <div className="relative z-[1] flex w-9 shrink-0 justify-center">
                      <div
                        className={`mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full text-size-xs font-bold text-white ring-4 ring-primary-background ${colorForUser(item.author)}`}
                      >
                        {initialsForUser(item.author)}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 space-y-2 pt-0.5">
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0">
                        <span className="text-size-sm font-semibold text-secondary-foreground">
                          {item.author.name}
                        </span>
                        <time
                          className="text-size-xs text-tertiary-foreground"
                          dateTime={item.at}
                        >
                          {formatDistanceToNow(new Date(item.at), {
                            addSuffix: true,
                          })}
                        </time>
                      </div>
                      <div className="rounded-[10px] border border-secondary-background bg-muted-background/60 px-3.5 py-3 text-size-sm leading-relaxed text-secondary-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                        {item.message}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative z-[1] flex w-9 shrink-0 justify-center pt-1.5">
                      <span className="size-2.5 rounded-full bg-tertiary-foreground/35 ring-[3px] ring-primary-background" />
                    </div>
                    <div className="min-w-0 flex-1 text-size-sm leading-relaxed text-secondary-foreground pt-0.5">
                      {item.variant === "status_change" &&
                      assignee &&
                      status ? (
                        <p>
                          <span className="font-semibold text-secondary-foreground">
                            {assignee.name}
                          </span>
                          <span className="text-tertiary-foreground">
                            {" "}
                            changed status to{" "}
                          </span>
                          <Badge
                            variant="outline"
                            className={`${getTaskStatusColor(status)} mx-0.5 inline-flex h-6 align-middle border-0 px-2.5 text-size-xs font-medium`}
                          >
                            {formatLabelFromSlug(status)}
                          </Badge>
                          <span className="text-tertiary-foreground">
                            {" "}
                            {formatDistanceToNow(new Date(item.at), {
                              addSuffix: true,
                            })}
                          </span>
                        </p>
                      ) : item.variant === "created" ? (
                        <p>
                          <span>{item.message}</span>
                          <span className="text-tertiary-foreground">
                            {" "}
                            {formatDistanceToNow(new Date(item.at), {
                              addSuffix: true,
                            })}
                          </span>
                        </p>
                      ) : (
                        <p>
                          <span>{item.message || "Task was updated"}</span>
                          <span className="text-tertiary-foreground">
                            {" "}
                            {formatDistanceToNow(new Date(item.at), {
                              addSuffix: true,
                            })}
                          </span>
                        </p>
                      )}
                    </div>
                  </>
                )}
              </li>
            ))
          )}
        </ul>
      </div>

      <TaskCommentForm
        taskId={taskId}
        composerInitials={composerInitials}
        composerColorClass={composerColor}
      />
    </section>
  );
};

export default TaskActivity;
