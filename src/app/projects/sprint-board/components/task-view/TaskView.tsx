import React from "react";
import HydrateAssignees from "@/store/HydrateAssignees";
import { IDisplayTask, IComment, IUser } from "../../types/interfaces";
import { formatTaskRef } from "../../utils/board-helpers";
import TaskViewHeader from "./TaskViewHeader";
import TaskActivity from "./TaskActivity";
import TaskDescriptionSection from "./TaskDescriptionSection";
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
  const taskRef = formatTaskRef(displayTask);

  return (
    <>
      <HydrateAssignees assignees={users} />
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_300px] xl:gap-10 gap-8 items-start">
        <article className="space-y-7 sm:space-y-8">
          <TaskViewHeader displayTask={displayTask} taskRef={taskRef} />
          <div className="h-px w-full bg-secondary-background" aria-hidden />
          <TaskDescriptionSection description={displayTask.description} />
          <div className="h-px w-full bg-secondary-background" aria-hidden />
          <TaskActivity
            taskId={taskId}
            task={displayTask}
            comments={comments}
            users={users}
          />
        </article>

        <TaskDetailsSidebar displayTask={displayTask} />
      </div>
    </>
  );
};

export default TaskView;
