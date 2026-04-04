import BoardHeader from "../components/BoardHeader";
import BoardNavs from "../components/BoardNavs";
import ProjectsHeader from "../components/ProjectsHeader";

export default async function SprintBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProjectsHeader />
      <section className="pt-3 bg-muted-background space-y-4 sm:space-y-0">
        <div className="px-2 sm:px-7">
          <BoardHeader />
        </div>
        <BoardNavs />
        {children}
      </section>
    </>
  );
}
