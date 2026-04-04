import BoardHeader from "./components/BoardHeader";
import BoardNavs from "./components/BoardNavs";
import { SearchTasksProvider } from "./hooks/useSearchTasks";

export default function SprintBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="pt-3 bg-muted-background space-y-4 sm:space-y-0">
      <div className="px-2 sm:px-7">
        <BoardHeader />
      </div>
      <BoardNavs />

      <SearchTasksProvider>
        <div>{children}</div>
      </SearchTasksProvider>
    </section>
  );
}
