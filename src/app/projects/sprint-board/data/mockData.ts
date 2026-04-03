import { IComment, ITask, IUser } from "../types/interfaces";
import { TTaskCategory, TTaskPriority, TTaskStatus } from "../types/types";

// Users
export const users: IUser[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", email: "bob@example.com" },
  { id: 3, name: "Charlie Lee", email: "charlie@example.com" },
  { id: 4, name: "Diana King", email: "diana@example.com" },
  { id: 5, name: "Ethan Brown", email: "ethan@example.com" },
  { id: 6, name: "Sarah Chen", email: "sarah@example.com" },
];

// Tasks
export const tasks: ITask[] = [
  {
    id: 1,
    title: "Design landing page",
    description: "Create wireframes and mockups for the landing page",
    status: TTaskStatus.IN_PROGRESS,
    priority: TTaskPriority.HIGH,
    category: TTaskCategory.DESIGN,
    startDate: new Date().toISOString(),
    dueDate: new Date(
      new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
    ).toISOString(),
    assigneeId: 1,
    archived: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Setup backend API",
    description: "Implement REST endpoints for tasks and users",
    status: TTaskStatus.IN_PROGRESS,
    priority: TTaskPriority.MEDIUM,
    category: TTaskCategory.BACKEND,
    startDate: new Date().toISOString(),
    dueDate: new Date(
      new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
    ).toISOString(),
    assigneeId: 2,
    archived: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: "Integrate Stripe payments",
    description: "Add payment gateway integration",
    status: TTaskStatus.IN_PROGRESS,
    priority: TTaskPriority.HIGH,
    category: TTaskCategory.BACKEND,
    startDate: new Date().toISOString(),
    dueDate: new Date(
      new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
    ).toISOString(),
    assigneeId: 3,
    archived: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 4,
    title: "Write unit tests",
    description: "Test all API endpoints and React components",
    status: TTaskStatus.IN_PROGRESS,
    priority: TTaskPriority.MEDIUM,
    category: TTaskCategory.TESTING,
    startDate: new Date().toISOString(),
    dueDate: new Date(
      new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
    ).toISOString(),
    assigneeId: 4,
    archived: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 5,
    title: "Deploy to production",
    description: "Prepare Docker images and deploy to server",
    status: TTaskStatus.IN_PROGRESS,
    priority: TTaskPriority.HIGH,
    category: TTaskCategory.DEVOPS,
    startDate: new Date().toISOString(),
    dueDate: new Date(
      new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
    ).toISOString(),
    assigneeId: 5,
    archived: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 6,
    title: "Implement user authentication",
    description:
      "Prepare a login page and implement the authentication logic with cookies",
    status: TTaskStatus.IN_PROGRESS,
    priority: TTaskPriority.HIGH,
    category: TTaskCategory.FRONTEND,
    startDate: new Date().toISOString(),
    dueDate: new Date().toISOString(),
    assigneeId: 1,
    archived: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// Comments
export const comments: IComment[] = [
  {
    id: 1,
    taskId: 1,
    message: "Initial wireframes completed",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    taskId: 1,
    message: "Need UX team feedback",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    taskId: 2,
    message: "Backend routes defined",
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    taskId: 3,
    message: "Stripe sandbox integration done",
    createdAt: new Date().toISOString(),
  },
  {
    id: 5,
    taskId: 4,
    message: "Unit tests for login component added",
    createdAt: new Date().toISOString(),
  },
  {
    id: 6,
    taskId: 6,
    message: "User authentication implemented",
    createdAt: new Date().toISOString(),
  },
  {
    id: 7,
    taskId: 5,
    message: "Docker images prepared",
    createdAt: new Date().toISOString(),
  },
];
