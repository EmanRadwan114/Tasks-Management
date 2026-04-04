"use client";

import { useSearchTasks } from "../hooks/useSearchTasks";
import { ITasksResponse, IUsersResponse } from "../types/interfaces";
import BoardList from "./BoardList";
import BoardListSkeleton from "./BoardListSkeleton";

interface IProps {
  users: IUsersResponse;
  tasks: ITasksResponse;
}

export default function BoardListWithPending({ users, tasks }: IProps) {
  const { isPending } = useSearchTasks();

  if (isPending) {
    return <BoardListSkeleton />;
  }

  return <BoardList users={users} tasks={tasks} />;
}
