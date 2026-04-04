"use client";

import React from "react";
import { formatDistanceToNow } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { IComment, IDisplayTask, IUser } from "../../types/interfaces";
import {
  colorForUser,
  formatLabelFromSlug,
  getTaskStatusColor,
  initialsForUser,
} from "../../utils/board-helpers";
import TaskCommentForm from "./TaskCommentForm";
import { useHandleComments } from "../../hooks/useHandleComments";
import { filterTabs } from "../../data/data";

interface IProps {
  taskId: number;
  task: IDisplayTask;
  comments: IComment[];
  users: IUser[];
}

const TaskActivity: React.FC<IProps> = ({ taskId, task, comments, users }) => {
  const {
    filter,
    setFilter,
    filtered,
    composerInitials,
    composerColor,
    timeline,
    assignee,
    status,
  } = useHandleComments(task, comments, users);

  return (
    <section className="space-y-5 px-2 sm:px-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-size-md font-semibold text-secondary-foreground">
            Activity
          </h2>
          <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-muted-background px-1.5 text-size-xs font-medium text-tertiary-foreground tabular-nums">
            {timeline.length}
          </span>
        </div>
        <div
          className="inline-flex gap-2 self-start sm:self-auto"
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
                "px-2.5! py-0.5! text-size-xs rounded-[6px] font-medium transition-colors",
                filter === tab.id
                  ? "bg-primary text-white shadow-sm hover:bg-primary hover:text-white"
                  : "text-tertiary-foreground border border-secondary-background hover:text-secondary-foreground hover:bg-transparent",
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
            className="pointer-events-none absolute left-4.25 top-3 h-1/2 w-px bg-secondary-background"
            aria-hidden
          />
        )}

        <ul className="relative space-y-8">
          {filtered.length === 0 ? (
            <li className="rounded-xl border border-dashed border-secondary-background bg-muted-background py-10 text-center text-size-sm text-tertiary-foreground">
              Nothing to show for this filter yet.
            </li>
          ) : (
            filtered.map((item) => (
              <li key={item.id} className="relative flex gap-2">
                {item.kind === "comment" ? (
                  <>
                    <div className="relative z-1 flex w-9 shrink-0 justify-center">
                      <div
                        className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-[9px] text-white ${colorForUser(
                          item.author,
                        )}`}
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
                      <div className="rounded-[10px] border border-secondary-background bg-muted-background px-3.5 py-3 text-size-sm leading-relaxed text-secondary-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                        {item.message}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-9 flex justify-center ">
                      <div className="relative z-1 flex items-center justify-center size-6 rounded-[12px] bg-default-background">
                        <span className="size-2 rounded-full border border-tertiary-foreground/35" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 text-size-sm leading-relaxed text-secondary-foreground pt-0.5">
                      {item.variant === "status_change" &&
                      assignee &&
                      status ? (
                        <p>
                          <span className="text-size-xs text-secondary-foreground">
                            {assignee.name}
                          </span>
                          <span className="text-tertiary-foreground">
                            {" "}
                            changed status to{" "}
                          </span>
                          <Badge
                            variant="outline"
                            className={`${getTaskStatusColor(
                              status,
                            )} mx-0.5 inline-flex h-6 align-middle border-0 px-2.5 text-size-xs font-medium`}
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
