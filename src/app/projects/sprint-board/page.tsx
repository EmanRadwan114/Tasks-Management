import BoardActions from "./components/BoardActions";
import BoardList from "./components/BoardList";
import { fetchBoardData } from "./utils/board-helpers";
import HydrateAssignees from "@/store/HydrateAssignees";

async function SprintBoard({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const search = (await searchParams).search as string;
  const page = Number((await searchParams).page) || 1;
  const limit = 4;
  const boardData = await fetchBoardData(search, page, limit);
  return (
    <section>
      <HydrateAssignees assignees={boardData?.users?.data || []} />
      <div className="px-2 sm:px-7">
        <BoardActions />
      </div>
      <BoardList users={boardData?.users} tasks={boardData?.tasks} />
    </section>
  );
}

export default SprintBoard;
