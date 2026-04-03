import { IComment, ITask } from "../types/interfaces";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL;


// add task
export const addTask = async (task: ITask) => {
  const response = await fetch(`${BASE_URL}/api/tasks`, {
    method: "POST",
    body: JSON.stringify(task),
  });
  const data = await response.json();
  return data;
};

// fetch all tasks
export const fetchTasks = async () => {
  const response = await fetch(`${BASE_URL}/api/tasks`, {
    next: { revalidate: 60 * 10 },
  });
  if (!response.ok) throw new Error("Failed to fetch tasks");
  const data = await response.json();
  return data;
};

// fetch single task by id
export const fetchTaskById = async (taskId: number) => {
  const response = await fetch(`${BASE_URL}/api/tasks/${taskId}`, {
    next: { revalidate: 60 * 10 },
  });
  if (!response.ok) throw new Error("Failed to fetch task by id");
  const data = await response.json();
  return data;
};

// update task
export const updateTask = async (taskId: number, task: ITask) => {
  const response = await fetch(`${BASE_URL}/api/tasks/${taskId}`, {
    method: "PATCH",
    body: JSON.stringify(task),
  });
  const data = await response.json();
  return data;
};

// archive task
export const archiveTask = async (taskId: number) => {
  const response = await fetch(`${BASE_URL}/api/tasks/${taskId}/archive`, {
    method: "PATCH",
  });
  const data = await response.json();
  return data;
};

// create comment
export const createComment = async (taskId: number, comment: IComment) => {
  const response = await fetch(`${BASE_URL}/api/tasks/${taskId}/comments`, {
    method: "POST",
    body: JSON.stringify(comment),
  });
  const data = await response.json();
  return data;
};

// fetch comments for specific task
export const fetchComments = async (taskId: number) => {
  const response = await fetch(`${BASE_URL}/api/tasks/${taskId}/comments`, {
    next: { revalidate: 60 * 10 },
  });
  if (!response.ok) throw new Error("Failed to fetch comments");
  const data = await response.json();
  return data;
};

// fetch all users
export const fetchUsers = async () => {
  const response = await fetch(`${BASE_URL}/api/users`, {
    next: { revalidate: 60 * 10 },
  });
  if (!response.ok) throw new Error("Failed to fetch users");
  const data = await response.json();
  return data;
};
