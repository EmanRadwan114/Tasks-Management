import { initMsw } from "@/mocks";
import { fetchTasks, fetchUsers } from "../services/board.services";
import { IDisplayTask, ITask, IUser } from "../types/interfaces";
import { TTaskCategory, TTaskPriority, TTaskStatus } from "../types/types";

export const fetchBoardData = async (
  search?: string,
  page: number = 1,
  limit: number = 10,
) => {
  await initMsw();
  try {
    const [users, tasks] = await Promise.allSettled([
      fetchUsers(),
      fetchTasks(search, page, limit),
    ]);

    if (users.status === "fulfilled" && tasks.status === "fulfilled") {
      return {
        users: users.value,
        tasks: tasks.value,
      };
    }

    return {
      users: [],
      tasks: [],
    };
  } catch (error) {
    console.log(error);
  }
};

export const tasksWithAssignees = (
  tasks: ITask[],
  users: IUser[],
  status: TTaskStatus,
): IDisplayTask[] => {
  const brandColors = [
    "bg-brand-orange",
    "bg-brand-yellow",
    "bg-brand-blue",
    "bg-brand-red",
    "bg-brand-green",
    "bg-primary",
  ];

  const displayedData = tasks
    ?.filter((task) => task.status === status)
    ?.map((task, index) => {
      const taskInitials = task?.title?.split("")[0]?.toUpperCase();
      const isTaskLate = new Date(task?.dueDate || "") < new Date();

      const displayedDueDate = new Date(task?.dueDate || "").toLocaleDateString(
        "en-US",
        {
          month: "short",
          day: "numeric",
        },
      );
      const displayedStartDate = new Date(
        task?.startDate || "",
      ).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });

      const taskColorIndex = (task.id || index) % brandColors.length;
      const taskColor = brandColors[taskColorIndex];

      const assignee = users?.find((user) => user.id === task.assigneeId);

      if (!assignee) {
        return {
          ...task,
          assignee: undefined,
          taskInitials,
          taskColor,
        };
      }

      const assigneeColorIndex = (assignee.id || index) % brandColors.length;
      const assigneeColor = brandColors[assigneeColorIndex];

      const assigneeInitials = assignee.name
        ?.split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

      return {
        ...task,
        assignee,
        taskInitials,
        taskColor,
        assigneeColor,
        assigneeInitials,
        displayedDueDate,
        displayedStartDate,
        isTaskLate,
      };
    });

  return displayedData;
};

export const getPriorityColor = (priority?: TTaskPriority) => {
  switch (priority?.toLowerCase()) {
    case TTaskPriority.URGENT:
      return "text-danger-foreground";
    case TTaskPriority.HIGH:
      return "text-brand-orange";
    case TTaskPriority.MEDIUM:
      return "text-warning-foreground";
    case TTaskPriority.LOW:
      return "text-tertiary-foreground";
    default:
      return "text-muted-foreground";
  }
};

export const getCategoryColor = (category?: TTaskCategory) => {
  switch (category?.toLowerCase()) {
    case TTaskCategory.BACKEND:
      return "text-info-foreground bg-info-background";
    case TTaskCategory.FRONTEND:
      return "text-pink-foreground bg-pink-background";
    case TTaskCategory.DESIGN:
      return "text-success-foreground bg-success-background";
    case TTaskCategory.TESTING:
      return "text-warning-foreground bg-warning-background";
    case TTaskCategory.DEVOPS:
      return "text-purple-foreground bg-purple-background";
    default:
      return "text-default-foreground bg-default-background";
  }
};

export const getTaskStatusColor = (status?: TTaskStatus, checked?: boolean) => {
  switch (status?.toLowerCase()) {
    case TTaskStatus.IN_PROGRESS:
      return `text-info-foreground bg-info-background ${
        checked
          ? "data-checked:bg-info-foreground! data-checked:text-info-background!"
          : ""
      }`;
    case TTaskStatus.BACKLOG:
      return `text-default-foreground bg-default-background ${
        checked
          ? "data-checked:bg-default-foreground! data-checked:text-default-background!"
          : ""
      }`;
    case TTaskStatus.BLOCKED:
      return `text-danger-foreground bg-danger-background ${
        checked
          ? "data-checked:bg-danger-foreground! data-checked:text-danger-background!"
          : ""
      }`;
    case TTaskStatus.DONE:
      return `text-success-foreground bg-success-background ${
        checked
          ? "data-checked:bg-success-foreground! data-checked:text-success-background!"
          : ""
      }`;
    default:
      return `text-default-foreground bg-default-background ${
        checked
          ? "data-checked:bg-default-foreground! data-checked:text-default-background!"
          : ""
      }`;
  }
};
