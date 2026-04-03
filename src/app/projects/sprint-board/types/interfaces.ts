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
  id?: number;
  title?: string;
  description?: string;
  status?: TTaskStatus;
  priority?: TTaskPriority;
  category?: TTaskCategory;
  startDate?: string;
  dueDate?: string;
  assigneeId?: number;
  archived?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface IComment {
  id?: number;
  taskId: number;
  message: string;
  createdAt: string;
}

export interface IUser {
  id?: number;
  name: string;
  email: string;
}

export interface ITaskOption {
  label: string;
  value: TTaskStatus | TTaskPriority | TTaskCategory;
}
