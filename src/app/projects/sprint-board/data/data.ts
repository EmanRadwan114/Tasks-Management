import SvgListIcon from "@/components/icons/ListIcon";
import { IBoardNavsActions, IBoardNavsItems } from "../types/interfaces";
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
