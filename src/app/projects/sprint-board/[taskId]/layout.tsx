import { notFound } from "next/navigation";
import {
  displayTaskForView,
  fetchTaskDetailData,
} from "../utils/board-helpers";
import ProjectsHeader from "../components/ProjectsHeader";

export default async function SprintTaskDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ taskId: string }>;
}) {
  const { taskId } = await params;
  const id = Number(taskId);

  const { task, users } = await fetchTaskDetailData(id);
  if (!task) {
    notFound();
  }

  const displayTask = displayTaskForView(task, users);
  if (!displayTask) {
    notFound();
  }
  return (
    <>
      <ProjectsHeader displayTask={displayTask} />
      <section className="pt-3 bg-muted-background space-y-4 sm:space-y-0">
        {children}
      </section>
    </>
  );
}
