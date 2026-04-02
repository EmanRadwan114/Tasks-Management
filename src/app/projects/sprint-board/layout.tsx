import BoardHeader from "./components/BoardHeader";
import BoardNavs from "./components/BoardNavs";

export default function SprintBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-3 px-2 sm:px-7 bg-muted-background space-y-4 sm:space-y-0">
      <BoardHeader />
      <BoardNavs />
      {children}
    </section>
  );
}
