import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import HydrateAssignees from "@/store/HydrateAssignees";
import { IDisplayTask, IComment, IUser } from "../../types/interfaces";
import TaskViewHeader from "./TaskViewHeader";
import TaskDescriptionSection from "./TaskDescriptionSection";
import TaskActivity from "./TaskActivity";
import TaskDetailsSidebar from "./TaskDetailsSidebar";

interface IProps {
  taskId: number;
  displayTask: IDisplayTask;
  comments: IComment[];
  users: IUser[];
}

const TaskView: React.FC<IProps> = ({
  taskId,
  displayTask,
  comments,
  users,
}) => {
  return (
    <>
      <HydrateAssignees assignees={users} />
      <div className="px-2 sm:px-7 pb-10 max-w-[1400px] mx-auto w-full">
        <Link
          href="/projects/sprint-board"
          className="inline-flex items-center gap-1.5 text-size-sm text-tertiary-foreground hover:text-primary transition-colors mb-4 sm:mb-6"
        >
          <ChevronLeft className="size-4 shrink-0" />
          Back to board
        </Link>

        <div className="flex flex-col xl:flex-row xl:items-start gap-8 xl:gap-10">
          <div className="min-w-0 flex-1 space-y-6 sm:space-y-8">
            <TaskViewHeader displayTask={displayTask} />
            <TaskDescriptionSection description={displayTask.description} />
            <TaskActivity
              taskId={taskId}
              task={displayTask}
              comments={comments}
              users={users}
            />
          </div>

          <TaskDetailsSidebar displayTask={displayTask} />
        </div>
      </div>
    </>
  );
};

export default TaskView;
