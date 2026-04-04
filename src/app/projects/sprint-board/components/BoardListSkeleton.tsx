import { Fragment } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { tableHeaders } from "../data/data";

const SECTIONS = 2;
const ROWS_PER_SECTION = 3;

function TaskRowSkeleton() {
  return (
    <TableRow className="border-y border-secondary-background">
      <TableCell>
        <div className="flex items-center gap-2">
          <Skeleton className="size-4 shrink-0 rounded-sm" />
          <Skeleton className="size-6 shrink-0 rounded-md" />
          <div className="min-w-0 flex-1 space-y-2">
            <Skeleton className="h-4 w-[min(100%,220px)]" />
            <Skeleton className="h-3 w-[min(100%,180px)]" />
          </div>
        </div>
      </TableCell>
      <TableCell>
        <Skeleton className="size-6 rounded-full" />
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-1.5">
          <Skeleton className="size-3 rounded-sm" />
          <Skeleton className="h-4 w-14" />
        </div>
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-20" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-20" />
      </TableCell>
      <TableCell>
        <div className="flex items-center justify-between gap-4">
          <Skeleton className="h-6 w-16 rounded-md" />
          <Skeleton className="h-8 w-8 rounded-md" />
        </div>
      </TableCell>
    </TableRow>
  );
}

export default function BoardListSkeleton() {
  return (
    <section className="pb-2" aria-busy="true" aria-label="Loading tasks">
      <Table className="mb-8 bg-white">
        {Array.from({ length: SECTIONS }, (_, sectionIdx) => (
          <Fragment key={sectionIdx}>
            <TableHeader>
              <TableRow className="border-b-0!">
                <TableHead className="mt-2 px-2 py-2 sm:px-7" colSpan={6}>
                  <div className="flex items-center gap-2">
                    <Skeleton className="size-4 rounded-sm" />
                    <Skeleton className="h-6 w-24 rounded-md" />
                    <Skeleton className="h-4 w-6" />
                  </div>
                </TableHead>
              </TableRow>
              <TableRow className="border-b-0!">
                {tableHeaders.map((header) => (
                  <TableHead key={header} className="capitalize">
                    <Skeleton className="h-3 w-14" />
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: ROWS_PER_SECTION }, (_, rowIdx) => (
                <TaskRowSkeleton key={rowIdx} />
              ))}
            </TableBody>
          </Fragment>
        ))}
      </Table>

      <div className="flex flex-col gap-4 bg-white px-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <Skeleton className="h-4 w-24" />
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {Array.from({ length: 4 }, (_, i) => (
            <Skeleton key={i} className="h-4 w-28" />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 py-6">
        <Skeleton className="size-8 rounded-md" />
        <Skeleton className="size-8 rounded-md" />
        <Skeleton className="size-8 rounded-md" />
        <Skeleton className="size-8 rounded-md" />
        <Skeleton className="size-8 rounded-md" />
      </div>
    </section>
  );
}
