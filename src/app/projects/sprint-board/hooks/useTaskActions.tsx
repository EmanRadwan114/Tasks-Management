import { useState } from "react";
import { ITask } from "../types/interfaces";

export const useTaskActions = () => {
  const [editingTask, setEditingTask] = useState<ITask | null>(null);
  const [modalType, setModalType] = useState<"edit" | "create" | "archive">(
    "create",
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleEditClick = (task: ITask) => {
    setEditingTask(task);
    setModalType("edit");
    setModalOpen(true);
    setIsPopoverOpen(false);
  };

  const handleArchiveClick = () => {
    setIsPopoverOpen(false);
    setModalType("archive");
    setModalOpen(true);
  };

  return {
    editingTask,
    modalType,
    modalOpen,
    isPopoverOpen,
    handleEditClick,
    handleArchiveClick,
    setIsPopoverOpen,
    setEditingTask,
    setModalOpen,
    setModalType,
  };
};
