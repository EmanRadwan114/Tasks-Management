"use client";

import React from "react";
import { Table } from "@/components/ui/table";
import { ITasksResponse, IUsersResponse } from "../types/interfaces";
import { tasksWithAssignees } from "../utils/board-helpers";
import { TTaskStatus } from "../types/types";
import ListSection from "./ListSection";
import Pagination from "./Pagination";
import SprintBoardEmptyState from "./SprintBoardEmptyState";

interface IProps {
  users: IUsersResponse;
  tasks: ITasksResponse;
}

const BoardList: React.FC<IProps> = ({ users, tasks: allTasks }) => {
  // Filter out archived tasks
  const tasks = (allTasks?.data ?? []).filter((task) => !task.archived);

  if (tasks.length === 0) {
    return <SprintBoardEmptyState />;
  }

  const inprogressTasks = tasksWithAssignees(
    tasks,
    users?.data,
    TTaskStatus.IN_PROGRESS,
  );
  const backlogTasks = tasksWithAssignees(
    tasks,
    users?.data,
    TTaskStatus.BACKLOG,
  );
  const blockedTasks = tasksWithAssignees(
    tasks,
    users?.data,
    TTaskStatus.BLOCKED,
  );
  const doneTasks = tasksWithAssignees(tasks, users?.data, TTaskStatus.DONE);

  return (
    <section className=" pb-2 flex flex-col flex-1">
      <Table className="bg-white mb-8">
        {/* inprogress */}
        {inprogressTasks?.length > 0 && (
          <ListSection
            tasks={inprogressTasks}
            title="in progress"
            status={TTaskStatus.IN_PROGRESS}
          />
        )}
        {/* backlog */}
        {backlogTasks?.length > 0 && (
          <ListSection
            tasks={backlogTasks}
            title="backlog"
            status={TTaskStatus.BACKLOG}
          />
        )}
        {/* blocked */}
        {blockedTasks?.length > 0 && (
          <ListSection
            tasks={blockedTasks}
            title="blocked"
            status={TTaskStatus.BLOCKED}
          />
        )}
        {/* done */}
        {doneTasks?.length > 0 && (
          <ListSection
            tasks={doneTasks}
            title="done"
            status={TTaskStatus.DONE}
          />
        )}
      </Table>

      {/* task stats */}
      <div className="px-2 sm:px-7 py-4 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-auto">
        <span className="text-size-sm text-tertiary-foreground font-medium">
          {tasks?.length} tasks
        </span>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {/* in progress */}
          <div className="flex items-center gap-2 py-1">
            <div className="size-1.5 rounded-full bg-info-foreground"></div>
            <span className="text-size-xs text-info-foreground capitalize font-medium">
              {inprogressTasks?.length} in progress
            </span>
          </div>
          {/* blocked */}
          <div className="flex items-center gap-2 py-1">
            <div className="size-1.5 rounded-full bg-danger-foreground"></div>
            <span className="text-size-xs text-danger-foreground capitalize font-medium">
              {blockedTasks?.length} blocked
            </span>
          </div>
          {/* backlog */}
          <div className="flex items-center gap-2 py-1">
            <div className="size-1.5 rounded-full bg-default-foreground"></div>
            <span className="text-size-xs text-default-foreground capitalize font-medium">
              {backlogTasks?.length} backlog
            </span>
          </div>
          {/* done */}
          <div className="flex items-center gap-2 py-1">
            <div className="size-1.5 rounded-full bg-success-foreground"></div>
            <span className="text-size-xs text-success-foreground capitalize font-medium">
              {doneTasks?.length} done
            </span>
          </div>
        </div>
      </div>
      <Pagination totalPages={allTasks?.totalPages} />
    </section>
  );
};

export default BoardList;
