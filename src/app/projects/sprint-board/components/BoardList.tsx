"use client";

import React from "react";
import { Table } from "@/components/ui/table";
import { ITasksResponse, IUsersResponse } from "../types/interfaces";
import { tasksWithAssignees } from "../utils/board-helpers";
import { TTaskStatus } from "../types/types";
import ListSection from "./ListSection";

interface IProps {
  users: IUsersResponse;
  tasks: ITasksResponse;
}

const BoardList: React.FC<IProps> = ({ users, tasks: allTasks }) => {
  // Filter out archived tasks
  const tasks = allTasks?.data?.filter((task) => !task.archived);

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
    <Table className="bg-white">
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
        <ListSection tasks={doneTasks} title="done" status={TTaskStatus.DONE} />
      )}
    </Table>
  );
};

export default BoardList;
