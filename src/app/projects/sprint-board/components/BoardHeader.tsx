import { DotsIcon, PlusIcon } from "@/components/icons";
import { LinkButton } from "@/components/ui/LinkButton";
import { Button } from "@/components/ui/Button";
import React from "react";

const BoardHeader: React.FC = () => {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-2">
      <h1 className="text-size-xl font-bold">Sprint Board</h1>
      <div className="flex items-center gap-2 flex-1 sm:flex-none">
        <LinkButton href="/projects/sprint-board/new-task" className="flex-1">
          <PlusIcon className="text-white size-3.5" />
          New Task
        </LinkButton>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:bg-muted-background hover:text-primary"
        >
          <DotsIcon className="size-4" />
        </Button>
      </div>
    </header>
  );
};

export default BoardHeader;
