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

export interface IDisplayTask extends ITask {
  taskInitials?: string;
  taskColor?: string;
  assignee?: IUser;
  assigneeColor?: string;
  assigneeInitials?: string;
  displayedDueDate?: string;
  displayedStartDate?: string;
  isTaskLate?: boolean;
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

export interface ITasksResponse {
  data: ITask[];
  status: number;
  message: string;
  success: boolean;
  page: number;
  limit: number;
  totalPages: number;
  totalTasks?: number;
}

export interface IUsersResponse {
  data: IUser[];
  status: number;
  message: string;
  success: boolean;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ICommentsResponse {
  data: IComment[];
  status: number;
  message: string;
  success: boolean;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ITaskResponse {
  data: ITask;
  status: number;
  message: string;
  success: boolean;
}

export interface ICommentResponse {
  data: IComment;
  status: number;
  message: string;
  success: boolean;
}

export interface IUserResponse {
  data: IUser;
  status: number;
  message: string;
  success: boolean;
}
