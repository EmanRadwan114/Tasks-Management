import { notFound } from "next/navigation";
import {
  displayTaskForView,
  fetchTaskDetailData,
} from "../utils/board-helpers";
import TaskView from "../components/task-view/TaskView";

export default async function SprintTaskDetailPage({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  const { taskId } = await params;
  const id = Number(taskId);

  const { task, comments, users } = await fetchTaskDetailData(id);
  if (!task) {
    notFound();
  }

  const displayTask = displayTaskForView(task, users);
  if (!displayTask) {
    notFound();
  }

  return (
    <section className="bg-white min-h-[80vh] flex flex-col">
      <TaskView
        taskId={id}
        displayTask={displayTask}
        comments={comments}
        users={users}
      />
    </section>
  );
}
