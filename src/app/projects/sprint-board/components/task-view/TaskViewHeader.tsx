"use client";

import React from "react";
import { ArchiveIcon, Pencil } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { IDisplayTask } from "../../types/interfaces";
import {
  formatLabelFromSlug,
  formatTaskRef,
  getCategoryColor,
  getPriorityColor,
  getTaskStatusColor,
} from "../../utils/board-helpers";
import { TTaskStatus } from "../../types/types";
import TaskForm from "../TaskForm";
import ArchiveModal from "../ArchiveModal";
import { useTaskActions } from "../../hooks/useTaskActions";
import { PriorityIcon } from "@/components/icons";
import { Calendar } from "lucide-react";

interface IProps {
  displayTask: IDisplayTask;
}

const TaskViewHeader: React.FC<IProps> = ({ displayTask }) => {
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
      <header className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <div
              className={`shrink-0 rounded-md size-8 flex items-center justify-center text-white text-size-xs font-bold ${task.taskColor}`}
            >
              {task.taskInitials}
            </div>
            <span className="text-size-sm text-tertiary-foreground font-medium truncate">
              {formatTaskRef(task)}
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="h-8"
              onClick={() => handleEditClick(task)}
            >
              <Pencil className="size-3.5" />
              Edit
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 text-danger-foreground border-danger-foreground/20 hover:bg-danger-background/30"
              onClick={handleArchiveClick}
            >
              <ArchiveIcon className="size-3.5" />
              Archive
            </Button>
          </div>
        </div>

        <h1 className="text-size-xl sm:text-2xl font-semibold text-secondary-foreground leading-tight pr-2">
          {task.title}
        </h1>

        <div className="flex flex-wrap gap-2">
          {status && (
            <Badge
              variant="outline"
              className={`${getTaskStatusColor(status)} border-0 gap-1.5 h-6 px-2.5`}
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
              className={`border-0 gap-1.5 h-6 px-2.5 bg-warning-background/80 text-warning-foreground`}
            >
              <PriorityIcon className={`size-3 ${getPriorityColor(task.priority)}`} />
              <span className="capitalize">{task.priority}</span>
            </Badge>
          )}
          {task.dueDate && (
            <Badge
              variant="outline"
              className={`border-0 gap-1.5 h-6 px-2.5 ${
                task.isTaskLate
                  ? "bg-danger-background text-danger-foreground"
                  : "bg-danger-background/40 text-secondary-foreground"
              }`}
            >
              <Calendar className="size-3 text-danger-foreground shrink-0" />
              Due {task.displayedDueDate}
            </Badge>
          )}
          {task.category && (
            <Badge
              variant="outline"
              className={`${getCategoryColor(task.category)} border-0 h-6 px-2.5`}
            >
              <span className="capitalize">{task.category}</span>
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
