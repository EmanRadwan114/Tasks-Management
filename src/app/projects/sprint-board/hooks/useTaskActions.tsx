import { useState } from "react";
import { ITask } from "../types/interfaces";
import { useArchiveTaskAction } from "./useHandleActions";

export const useTaskActions = (task: ITask) => {
  const [editingTask, setEditingTask] = useState<ITask | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const { handleArchiveTask } = useArchiveTaskAction(task.id || 0);

  const handleEditClick = (task: ITask) => {
    setEditingTask(task);
    setIsEditModalOpen(true);
    setIsPopoverOpen(false);
  };

  const handleArchiveClick = () => {
    handleArchiveTask();
    setIsPopoverOpen(false);
  };

  return {
    editingTask,
    isEditModalOpen,
    isPopoverOpen,
    handleEditClick,
    handleArchiveClick,
    setIsPopoverOpen,
    setEditingTask,
    setIsEditModalOpen,
  };
};
