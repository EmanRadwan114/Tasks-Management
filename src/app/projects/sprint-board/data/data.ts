import SvgListIcon from "@/components/icons/ListIcon";
import {
  IBoardNavsActions,
  IBoardNavsItems,
  ITaskOption,
} from "../types/interfaces";
import SvgCalendarIcon from "@/components/icons/CalendarIcon";
import SvgBoardIcon from "@/components/icons/BoardIcon";
import SvgTimelineIcon from "@/components/icons/TimelineIcon";
import SvgActivityIcon from "@/components/icons/ActivityIcon";
import {
  EyeIcon,
  FilterIcon,
  OptionsIcons,
  UsersIcon,
} from "@/components/icons";
import { TTaskCategory, TTaskPriority, TTaskStatus } from "../types/types";

export const boardNavsItems: IBoardNavsItems[] = [
  {
    title: "list",
    href: "/projects/sprint-board",
    icon: SvgListIcon,
  },
  {
    title: "board",
    href: "/projects/sprint-board/board",
    icon: SvgBoardIcon,
  },
  {
    title: "calendar",
    href: "/projects/sprint-board/calendar",
    icon: SvgCalendarIcon,
  },
  {
    title: "timeline",
    href: "/projects/sprint-board/timeline",
    icon: SvgTimelineIcon,
  },
  {
    title: "activity",
    href: "/projects/sprint-board/activity",
    icon: SvgActivityIcon,
  },
];

export const boardNavsActions: IBoardNavsActions[] = [
  {
    title: "group: status",
    icon: OptionsIcons,
  },
  {
    title: "filters",
    icon: FilterIcon,
  },
  {
    title: "assignees",
    icon: UsersIcon,
  },
  {
    title: "show closed",
    icon: EyeIcon,
  },
];

export const TaskStatusOptions: ITaskOption[] = [
  { label: "Backlog", value: TTaskStatus.BACKLOG },
  { label: "In Progress", value: TTaskStatus.IN_PROGRESS },
  { label: "Blocked", value: TTaskStatus.BLOCKED },
  { label: "Done", value: TTaskStatus.DONE },
];

export const TaskPriorityOptions: ITaskOption[] = [
  { label: "Low", value: TTaskPriority.LOW },
  { label: "Medium", value: TTaskPriority.MEDIUM },
  { label: "High", value: TTaskPriority.HIGH },
  { label: "Urgent", value: TTaskPriority.URGENT },
];

export const TaskCategoryOptions: ITaskOption[] = [
  { label: "Frontend", value: TTaskCategory.FRONTEND },
  { label: "Backend", value: TTaskCategory.BACKEND },
  { label: "Design", value: TTaskCategory.DESIGN },
  { label: "Testing", value: TTaskCategory.TESTING },
  { label: "DevOps", value: TTaskCategory.DEVOPS },
];

export const tableHeaders = [
  "name",
  "assignee",
  "priority",
  "start",
  "due",
  "category",
];
