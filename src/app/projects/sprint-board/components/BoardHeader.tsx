"use client";
import { DotsIcon, PlusIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import React from "react";
import { useHandleModal } from "../hooks/useHandleModal";
import TaskForm from "./TaskForm";

const BoardHeader: React.FC = () => {
  const { handleModalOpen, isModalOpen, handleModalClose } = useHandleModal();

  return (
    <>
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-2">
        <h1 className="text-size-xl font-bold">Sprint Board</h1>
        <div className="flex items-center gap-2 flex-1 sm:flex-none">
          <Button className="flex-1" onClick={handleModalOpen}>
            <PlusIcon className="text-white size-3.5" />
            New Task
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:bg-muted-background hover:text-primary"
          >
            <DotsIcon className="size-4" />
          </Button>
        </div>
      </header>

      {isModalOpen && <TaskForm handleModalClose={handleModalClose} />}
    </>
  );
};

export default BoardHeader;
