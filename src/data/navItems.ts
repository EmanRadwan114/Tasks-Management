import SvgSprintIcon from "@/components/icons/SprintIcon";
import SvgBacklogIcon from "@/components/icons/BacklogIcon";
import SvgRoadmapIcon from "@/components/icons/RoadmapIcon";
import SvgReleasesIcon from "@/components/icons/ReleasesIcon";
import DashboardIcon from "@/components/icons/DashboardIcon";
import TasksIcon from "@/components/icons/TasksIcon";
import InboxIcon from "@/components/icons/InboxIcon";
import SvgCalendarIcon from "@/components/icons/CalendarIcon";
import { INavItem } from "@/types/interfaces";

export const generalItems: INavItem[] = [
  {
    title: "Dashboard",
    icon: DashboardIcon,
    href: "/",
  },
  {
    title: "My Tasks",
    icon: TasksIcon,
    href: "/tasks",
  },
  {
    title: "Inbox",
    icon: InboxIcon,
    href: "/inbox",
  },
  {
    title: "Calendar",
    icon: SvgCalendarIcon,
    href: "/calendar",
  },
];
export const projectItems: INavItem[] = [
  {
    title: "Sprint Board",
    icon: SvgSprintIcon,
    href: "/projects/sprint-board",
  },
  {
    title: "Backlog",
    icon: SvgBacklogIcon,
    href: "/projects/backlog",
  },
  {
    title: "Roadmap",
    icon: SvgRoadmapIcon,
    href: "/projects/roadmap",
  },
  {
    title: "Releases",
    icon: SvgReleasesIcon,
    href: "/projects/releases",
  },
];
