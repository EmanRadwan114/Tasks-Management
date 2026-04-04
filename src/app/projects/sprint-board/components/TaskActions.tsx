"use client";
import React from "react";
import { ITask } from "../types/interfaces";
import { ArchiveIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DotsIcon, EditIcon } from "@/components/icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import TaskForm from "./TaskForm";
import { useTaskActions } from "../hooks/useTaskActions";
import ArchiveModal from "./ArchiveModal";

interface IProps {
  task: ITask;
}

const TaskActions: React.FC<IProps> = ({ task }) => {
  const {
    editingTask,
    modalType,
    modalOpen,
    isPopoverOpen,
    handleEditClick,
    handleArchiveClick,
    setIsPopoverOpen,
    setEditingTask,
    setModalOpen,
  } = useTaskActions();

  return (
    <>
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger
          type="button"
          aria-label="Task actions"
          className="text-muted-foreground hover:text-primary transition-colors cursor-pointer p-1"
        >
          <DotsIcon className="size-3" />
        </PopoverTrigger>
        <PopoverContent align="end" className="w-40 p-1">
          <div className="flex flex-col gap-0.5">
            <Button
              variant="ghost"
              className="justify-start gap-2 h-9 px-2 text-sm font-normal text-secondary-foreground hover:text-primary transition-colors"
              onClick={() => handleEditClick(task)}
            >
              <EditIcon className="size-3.5" />
              Edit Task
            </Button>
            <Button
              variant="ghost"
              className="justify-start gap-2 h-9 px-2 text-sm font-normal text-danger-foreground hover:text-danger-foreground hover:bg-danger-background/10 transition-colors"
              onClick={handleArchiveClick}
            >
              <ArchiveIcon className="size-3.5" />
              Archive Task
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      {modalOpen && modalType === "edit" && (
        <TaskForm
          type={modalType}
          title={modalType === "edit" ? "Edit Task" : "Archive Task"}
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
        />
      )}
    </>
  );
};

export default TaskActions;
