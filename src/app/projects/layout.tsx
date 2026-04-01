import BoardHeader from "./sprint-board/components/BoardHeader";

function TasksLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BoardHeader />
      {children}
    </>
  );
}

export default TasksLayout;
