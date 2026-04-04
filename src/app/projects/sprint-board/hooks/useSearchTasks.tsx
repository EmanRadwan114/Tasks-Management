"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef, useTransition } from "react";

export const useSearchTasks = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [isPending, startTransition] = useTransition();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleSearch = (term: string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    params.set("page", "1"); // Reset to page 1 on search

    timerRef.current = setTimeout(() => {
      startTransition(() => {
        replace(`${pathname}?${params.toString()}`);
      });
    }, 400);
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    startTransition(() => {
      replace(`${pathname}?${params.toString()}`);
    });
  };

  const defaultValue = searchParams.get("search")?.toString() || "";
  const currentPage = Number(searchParams.get("page")) || 1;

  return {
    handleSearch,
    handlePageChange,
    defaultValue,
    currentPage,
    isPending,
  };
};
