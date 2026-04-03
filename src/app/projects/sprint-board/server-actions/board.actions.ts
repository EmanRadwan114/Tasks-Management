"use server";

import { revalidatePath } from "next/cache";
import {
  addTask,
  archiveTask,
  createComment,
  updateTask,
} from "../services/board.services";
import { IComment, ITask } from "../types/interfaces";
import { TTaskCategory, TTaskPriority, TTaskStatus } from "../types/types";

// create task action
export const createTaskAction = async (prev: unknown, formData: FormData) => {
  const task: ITask = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    status: formData.get("status") as TTaskStatus,
    priority: formData.get("priority") as TTaskPriority,
    assigneeId: Number(formData.get("assignee")),
    category: formData.get("category") as TTaskCategory,
    startDate: formData.get("startDate") as string,
    dueDate: formData.get("dueDate") as string,
    archived: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  const response = await addTask(task);
  if (response.success) {
    revalidatePath("/projects/sprint-board");
    return { success: true, data: response };
  }
  return { success: false, error: response.error };
};

// update task action
export const updateTaskAction = async (
  id: number,
  prev: unknown,
  formData: FormData,
) => {
  const task: ITask = {};

  if (formData.get("title")) {
    task.title = formData.get("title") as string;
  }
  if (formData.get("description")) {
    task.description = formData.get("description") as string;
  }
  if (formData.get("status")) {
    task.status = formData.get("status") as TTaskStatus;
  }
  if (formData.get("priority")) {
    task.priority = formData.get("priority") as TTaskPriority;
  }
  if (formData.get("assignee")) {
    task.assigneeId = Number(formData.get("assignee"));
  }
  if (formData.get("category")) {
    task.category = formData.get("category") as TTaskCategory;
  }
  if (formData.get("startDate")) {
    task.startDate = formData.get("startDate") as string;
  }
  if (formData.get("dueDate")) {
    task.dueDate = formData.get("dueDate") as string;
  }

  task.updatedAt = new Date().toISOString();

  const response = await updateTask(id, task);
  if (response.success) {
    revalidatePath("/projects/sprint-board");
    revalidatePath(`/projects/sprint-board/${id}`);
    return { success: true, data: response };
  }
  return { success: false, error: response.error };
};

// archive task action
export const archiveTaskAction = async (
  id: number,
  prev: unknown,
  formData: FormData,
) => {
  const response = await archiveTask(id);

  if (response.success) {
    revalidatePath("/projects/sprint-board");
    revalidatePath(`/projects/sprint-board/${id}`);
    return { success: true, data: response };
  }
  return { success: false, error: response.error };
};

// create comment action
export const createCommentAction = async (
  taskId: number,
  prev: unknown,
  formData: FormData,
) => {
  const comment: IComment = {
    taskId: Number(formData.get("taskId")),
    message: formData.get("message") as string,
    createdAt: new Date().toISOString(),
  };
  const response = await createComment(taskId, comment);
  if (response.success) {
    revalidatePath(`/projects/sprint-board/${taskId}`);
    return { success: true, data: response };
  }
  return { success: false, error: response.error };
};
