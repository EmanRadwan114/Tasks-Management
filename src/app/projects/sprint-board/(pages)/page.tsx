import BoardActions from "../components/BoardActions";
import BoardListWithPending from "../components/BoardListWithPending";
import { fetchBoardData } from "../utils/board-helpers";
import HydrateAssignees from "@/store/HydrateAssignees";

async function SprintBoard({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const search = (await searchParams).search as string;
  const status = (await searchParams).status as string;
  const priority = (await searchParams).priority as string;
  const assigneeId = (await searchParams).assigneeId as string;
  const category = (await searchParams).category as string;
  const page = Number((await searchParams).page) || 1;
  const limit = 4;
  const boardData = await fetchBoardData(
    search,
    page,
    limit,
    status,
    priority,
    assigneeId,
    category,
  );
  return (
    <section className="bg-muted-background min-h-[80vh] flex flex-col">
      <HydrateAssignees assignees={boardData?.users?.data || []} />
        <div className="px-2 sm:px-7">
          <BoardActions />
        </div>
        <BoardListWithPending
          users={boardData?.users}
          tasks={boardData?.tasks}
        />
    </section>
  );
}

export default SprintBoard;
