import React from "react";
import { IDisplayTask } from "../types/interfaces";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  getCategoryColor,
  getPriorityColor,
  getTaskStatusColor,
} from "../utils/board-helpers";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DotsIcon, PlusIcon, PriorityIcon } from "@/components/icons";
import { TTaskStatus } from "../types/types";
import { tableHeaders } from "../data/data";
import TaskActions from "./TaskActions";

interface IProps {
  title: "in progress" | "backlog" | "blocked" | "done";
  tasks: IDisplayTask[];
  status: TTaskStatus;
}

const ListSection: React.FC<IProps> = ({ tasks, title, status }) => {
  return (
    <>
      <TableHeader>
        <TableRow className="border-b-0! bg-muted-background hover:bg-muted-background!">
          <TableHead className=" px-2 sm:px-7 py-2 mt-2" colSpan={8}>
            <div className="flex items-center gap-2">
              <Checkbox
                className={`border-0! ${getTaskStatusColor(status, true)} `}
              />
              <Badge
                variant="outline"
                className={`${getTaskStatusColor(status)} border-0`}
              >
                {title}
              </Badge>
              <span className="font-medium text-size-sm text-tertiary-foreground!">
                {tasks?.length}
              </span>
            </div>
          </TableHead>
          <TableHead className=" px-2 sm:px-7 py-2 mt-2" colSpan={3}>
            <div className="flex items- justify-end gap-1">
              <PlusIcon className="size-4 text-muted-foreground hover:text-primary hover:bg-transparent cursor-pointer" />
              <DotsIcon className="size-4 text-muted-foreground hover:text-primary hover:bg-transparent cursor-pointer" />
            </div>
          </TableHead>
        </TableRow>
        <TableRow className="border-b-0! bg-muted-background hover:bg-muted-background!">
          <TableHead colSpan={3}>Name</TableHead>
          <TableHead></TableHead>
          <TableHead></TableHead>
          {tableHeaders.slice(1).map((header) => (
            <TableHead
              key={header}
              className={`text-xs font-medium text-muted-foreground capitalize
              }`}
            >
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks?.map((task) => (
          <TableRow
            key={task.id}
            className="bg-white border-y border-secondary-background hover:bg-slate-50/50 transition-colors"
          >
            {/* title & desc */}
            <TableCell colSpan={3}>
              <div className="flex items-center gap-2">
                <div className="shrink-0">
                  <Checkbox
                    className={`${
                      task?.status === TTaskStatus.DONE
                        ? "border-brand-green!  data-checked:text-brand-green! data-checked:bg-transparent!"
                        : ""
                    }`}
                  />
                </div>
                <div
                  className={`shrink-0 rounded-md w-6 h-6 flex items-center justify-center text-white ${task.taskColor}`}
                >
                  <span className="text-[9px] font-bold">
                    {task?.taskInitials}
                  </span>
                </div>
                <div className="min-w-0 space-y-px">
                  <h3 className="text-sm font-semibold text-secondary-foreground">
                    {task.title}
                  </h3>
                  <p className="text-muted-foreground text-size-xs font-normal">
                    {task.description}
                  </p>
                </div>
              </div>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>

            {/* assignee */}
            <TableCell>
              {task.assignee ? (
                <div
                  className={`rounded-full w-6 h-6 flex items-center justify-center text-white ${task.assigneeColor}`}
                >
                  <span className="text-[9px] font-bold">
                    {task?.assigneeInitials}
                  </span>
                </div>
              ) : (
                <div className="w-6 h-6 rounded-full border border-dashed border-muted-foreground/30" />
              )}
            </TableCell>

            {/* priority */}
            <TableCell>
              <div className="flex items-center gap-1.5">
                <PriorityIcon
                  className={`size-3 ${getPriorityColor(task.priority)}`}
                />
                <span className="capitalize font-normal text-secondary-foreground text-size-sm">
                  {task.priority}
                </span>
              </div>
            </TableCell>

            {/* start date */}
            <TableCell>
              <span className="text-tertiary-foreground! text-size-sm! font-normal">
                {task.startDate ? task.displayedStartDate : "--"}
              </span>
            </TableCell>

            {/* due date */}
            <TableCell>
              <span
                className={`${
                  task.isTaskLate
                    ? "text-danger-foreground!"
                    : "text-secondary-foreground!"
                } text-size-sm! font-normal`}
              >
                {task.displayedDueDate}
              </span>
            </TableCell>

            {/* category & actions */}
            <TableCell>
              <div className="flex items-center justify-between lg:justify-start gap-3">
                <Badge
                  variant="outline"
                  className={` ${getCategoryColor(task.category)} border-0`}
                >
                  {task.category}
                </Badge>
                <div className="flex-1 text-end lg:text-end me-4">
                  <TaskActions task={task} />
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default ListSection;
