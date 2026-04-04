"use client";

import React from "react";
import { Calendar, Pencil, Trash2 } from "lucide-react";
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
import { PriorityIcon } from "@/components/icons";

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
      <header className="space-y-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
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
              className="h-9 px-3.5 rounded-lg border-secondary-background bg-primary-background text-secondary-foreground hover:bg-muted-background"
              onClick={() => handleEditClick(task)}
            >
              <Pencil className="size-3.5" />
              Edit
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-9 px-3.5 rounded-lg border-secondary-background bg-primary-background text-danger-foreground hover:bg-danger-background/20 hover:text-danger-foreground"
              onClick={handleArchiveClick}
            >
              <Trash2 className="size-3.5" />
              Archive
            </Button>
          </div>
        </div>

        <h1 className="text-[22px] sm:text-2xl md:text-[26px] font-bold text-secondary-foreground leading-snug tracking-tight pr-1">
          {task.title}
        </h1>

        <div className="flex flex-wrap gap-2">
          {status && (
            <Badge
              variant="outline"
              className={`${getTaskStatusColor(status)} border-0 gap-1.5 h-7 px-3 rounded-full font-medium`}
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
              className="border-0 gap-1.5 h-7 px-3 rounded-full font-medium bg-warning-background/90 text-warning-foreground"
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
              className={`border-0 gap-1.5 h-7 px-3 rounded-full font-medium ${
                task.isTaskLate
                  ? "bg-danger-background text-danger-foreground"
                  : "bg-danger-background/50 text-secondary-foreground"
              }`}
            >
              <Calendar className="size-3.5 text-danger-foreground shrink-0" />
              Due {task.displayedDueDate}
            </Badge>
          )}
          {task.category && (
            <Badge
              variant="outline"
              className={`${getCategoryColor(task.category)} border-0 h-7 px-3 rounded-full font-medium capitalize`}
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
