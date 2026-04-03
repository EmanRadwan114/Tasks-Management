import BoardActions from "./components/BoardActions";
import BoardList from "./components/BoardList";
import { fetchBoardData } from "./utils/board-helpers";
import HydrateAssignees from "@/store/HydrateAssignees";

async function SprintBoard() {
  const boardData = await fetchBoardData();
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
