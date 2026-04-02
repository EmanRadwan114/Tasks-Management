import { IIcon } from "@/types/interfaces";
import { TTaskCategory, TTaskPriority, TTaskStatus } from "./types";

export interface IBoardNavsItems {
  title: string;
  href: string;
  icon: React.ComponentType<IIcon>;
}

export interface IBoardNavsActions {
  title: string;
  icon: React.ComponentType<IIcon>;
}

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: TTaskStatus;
  priority: TTaskPriority;
  category: TTaskCategory;
  dueDate: string;
  assigneeId: string;
  archived: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IComment {
  id: string;
  taskId: string;
  message: string;
  createdAt: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface ITaskOption {
  label: string;
  value: TTaskStatus | TTaskPriority | TTaskCategory;
}
