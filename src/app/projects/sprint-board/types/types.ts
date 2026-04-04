import { IUser } from "./interfaces";

export const enum TTaskStatus {
  BACKLOG = "backlog",
  IN_PROGRESS = "in-progress",
  BLOCKED = "blocked",
  DONE = "done",
}

export const enum TTaskPriority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
  URGENT = "urgent",
}

export const enum TTaskCategory {
  FRONTEND = "frontend",
  BACKEND = "backend",
  DESIGN = "design",
  TESTING = "testing",
  DEVOPS = "devops",
}

export type ActivityFilter = "all" | "comments" | "history";

export type TimelineItem =
  | {
      kind: "comment";
      id: string;
      at: string;
      message: string;
      author: IUser;
    }
  | {
      kind: "system";
      id: string;
      at: string;
      message: string;
      author?: IUser;
      variant: "created" | "status_change" | "generic";
    };
