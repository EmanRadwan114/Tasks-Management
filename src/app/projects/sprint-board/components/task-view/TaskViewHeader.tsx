"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { IDisplayTask } from "../../types/interfaces";
import {
  formatLabelFromSlug,
  getCategoryColor,
  getPriorityColor,
  getTaskStatusColor,
} from "../../utils/board-helpers";
import { TTaskStatus } from "../../types/types";
import TaskForm from "../TaskForm";
import ArchiveModal from "../ArchiveModal";
import { useTaskActions } from "../../hooks/useTaskActions";
import {
  CalendarIcon,
  EditIcon,
  PriorityIcon,
  TrashIcon,
} from "@/components/icons";

interface IProps {
  displayTask: IDisplayTask;
  taskRef: string;
}

const TaskViewHeader: React.FC<IProps> = ({ displayTask, taskRef }) => {
  const {
    editingTask,
    modalType,
    modalOpen,
    handleEditClick,
    handleArchiveClick,
    setEditingTask,
    setModalOpen,
  } = useTaskActions();

  const task = displayTask;
  const status = task.status as TTaskStatus | undefined;

  return (
    <>
      <header className="space-y-3 px-2 sm:px-7">
        <div className="flex flex-col gap-3.5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <div className="shrink-0 rounded-lg size-9 flex items-center justify-center text-white text-size-sm font-bold bg-primary shadow-sm">
              {task.taskInitials}
            </div>
            <span className="text-size-sm text-tertiary-foreground font-medium truncate tabular-nums">
              {taskRef}
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="px-2.5 py-1.25 rounded-[6px] border-secondary-background bg-white text-secondary-foreground hover:bg-muted-background font-normal!"
              onClick={() => handleEditClick(task)}
            >
              <EditIcon className="size-3" />
              Edit
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="px-2.5 py-1.25 rounded-[6px] border-secondary-background bg-white  hover:bg-muted-background text-danger-foreground font-normal!"
              onClick={handleArchiveClick}
            >
              <TrashIcon className="size-3" />
              Archive
            </Button>
          </div>
        </div>

        <h1 className="text-xl font-bold text-secondary-foreground leading-snug tracking-tight">
          {task.title}
        </h1>

        <div className="flex flex-wrap gap-2">
          {status && (
            <Badge
              variant="outline"
              className={`${getTaskStatusColor(status)} border-0`}
            >
              <span
                className="size-1.5 rounded-full bg-current opacity-90"
                aria-hidden
              />
              {formatLabelFromSlug(status)}
            </Badge>
          )}
          {task.priority && (
            <Badge
              variant="outline"
              className="border border-secondary-background text-secondary-foreground"
            >
              <PriorityIcon
                className={`size-3 ${getPriorityColor(task.priority)}`}
              />
              <span className="capitalize">{task.priority}</span>
            </Badge>
          )}
          {task.dueDate && (
            <Badge
              variant="outline"
              className={`border border-secondary-background text-secondary-foreground`}
            >
              <CalendarIcon className="size-3 text-danger-foreground shrink-0" />
              Due <span className="font-bold">{task.displayedDueDate}</span>
            </Badge>
          )}
          {task.category && (
            <Badge
              variant="outline"
              className={`${getCategoryColor(task.category)} border-0`}
            >
              {task.category}
            </Badge>
          )}
        </div>
      </header>

      {modalOpen && modalType === "edit" && (
        <TaskForm
          type="edit"
          title="Edit Task"
          task={editingTask || undefined}
          handleModalClose={() => {
            setModalOpen(false);
            setEditingTask(null);
          }}
        />
      )}

      {modalOpen && modalType === "archive" && (
        <ArchiveModal
          handleModalClose={() => {
            setModalOpen(false);
            setEditingTask(null);
          }}
          id={task.id}
          redirectOnSuccessTo="/projects/sprint-board"
        />
      )}
    </>
  );
};

export default TaskViewHeader;
