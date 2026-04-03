import ProjectsHeader from "./sprint-board/components/ProjectsHeader";

function TasksLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProjectsHeader />
      {children}
    </>
  );
}

export default TasksLayout;
