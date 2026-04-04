import BoardActions from "./components/BoardActions";
import BoardListSkeleton from "./components/BoardListSkeleton";

export default function SprintBoardLoading() {
  return (
    <section>
      <div className="px-2 sm:px-7">
        <BoardActions />
      </div>
      <BoardListSkeleton />
    </section>
  );
}
