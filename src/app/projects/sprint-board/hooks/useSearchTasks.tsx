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

  const handleFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    params.set("page", "1"); // Reset to page 1 on filter
    startTransition(() => {
      replace(`${pathname}?${params.toString()}`);
    });
  };

  const clearFilters = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("status");
    params.delete("priority");
    params.delete("assigneeId");
    params.delete("category");
    params.set("page", "1");
    startTransition(() => {
      replace(`${pathname}?${params.toString()}`);
    });
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    startTransition(() => {
      replace(`${pathname}?${params.toString()}`);
    });
  };

  const defaultValue = searchParams.get("search")?.toString() || "";
  const currentStatus = searchParams.get("status")?.toString() || "";
  const currentPriority = searchParams.get("priority")?.toString() || "";
  const currentAssigneeId = searchParams.get("assigneeId")?.toString() || "";
  const currentCategory = searchParams.get("category")?.toString() || "";
  const currentPage = Number(searchParams.get("page")) || 1;

  return {
    handleSearch,
    handleFilter,
    clearFilters,
    handlePageChange,
    defaultValue,
    currentStatus,
    currentPriority,
    currentAssigneeId,
    currentCategory,
    currentPage,
    isPending,
  };
};
