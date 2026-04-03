"use client";
import Modal from "@/components/ui/Modal";
import React from "react";
import { useArchiveTaskAction } from "../hooks/useHandleActions";
import { Button } from "@/components/ui/Button";

interface IProps {
  handleModalClose: () => void;
  id: number | undefined;
}

const ArchiveModal: React.FC<IProps> = ({ handleModalClose, id }) => {
  const { handleArchiveTask, isPending } = useArchiveTaskAction(id);
  return (
    <Modal onClose={handleModalClose} title="Archive Task">
      <div className="flex items-center justify-center">
        <p className="text-size-lg text-secondary-foreground font-medium py-8 text-center">
          Are you sure you want to archive this task?
        </p>
      </div>
      <div className="border-t border-secondary-background flex justify-end gap-3 px-7 py-3 mt-2">
        <Button variant="outline" onClick={handleModalClose}>
          Cancel
        </Button>
        <Button
          onClick={handleArchiveTask}
          disabled={isPending}
          variant="destructive"
        >
          {isPending ? "Processing..." : "Archive Task"}
        </Button>
      </div>
    </Modal>
  );
};

export default ArchiveModal;
