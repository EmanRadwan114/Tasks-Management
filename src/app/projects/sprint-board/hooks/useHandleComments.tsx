import { useMemo, useState } from "react";
import { IComment, IUser } from "../types/interfaces";
import { ActivityFilter, TimelineItem, TTaskStatus } from "../types/types";
import {
  authorForComment,
  colorForUser,
  initialsForUser,
} from "../utils/board-helpers";
import { IDisplayTask } from "../types/interfaces";

export const useHandleComments = (
  task: IDisplayTask,
  comments: IComment[],
  users: IUser[],
) => {
  const [filter, setFilter] = useState<ActivityFilter>("all");

  const assignee = task.assignee;
  const status = task.status as TTaskStatus | undefined;

  const timeline = useMemo(() => {
    const items: TimelineItem[] = [];

    for (const c of comments) {
      const author = authorForComment(c, users);
      items.push({
        kind: "comment",
        id: `c-${c.id ?? c.createdAt}`,
        at: c.createdAt,
        message: c.message,
        author,
      });
    }

    if (task.createdAt) {
      items.push({
        kind: "system",
        id: "created",
        at: task.createdAt,
        message: assignee ? `Task created by ${assignee.name}` : "Task created",
        author: assignee,
        variant: "created",
      });
    }

    if (task.updatedAt && task.createdAt && task.updatedAt !== task.createdAt) {
      const created = new Date(task.createdAt).getTime();
      const updated = new Date(task.updatedAt).getTime();
      if (updated > created + 30_000) {
        items.push({
          kind: "system",
          id: "updated",
          at: task.updatedAt,
          message: "",
          author: assignee,
          variant: assignee && status ? "status_change" : "generic",
        });
      }
    }

    items.sort((a, b) => new Date(b.at).getTime() - new Date(a.at).getTime());

    return items;
  }, [comments, task, users, assignee, status]);

  const filtered = useMemo(() => {
    if (filter === "all") return timeline;
    if (filter === "comments")
      return timeline.filter((i) => i.kind === "comment");
    return timeline.filter((i) => i.kind === "system");
  }, [timeline, filter]);

  const composerInitials =
    task.assigneeInitials ??
    initialsForUser(users[0] ?? { name: "?", email: "" });
  const composerColor =
    task.assigneeColor ?? colorForUser(users[0] ?? { name: "?", email: "" });

  return {
    filter,
    setFilter,
    timeline,
    filtered,
    composerInitials,
    composerColor,
    assignee,
    status,
  };
};
