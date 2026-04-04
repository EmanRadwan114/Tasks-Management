"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight } from "@/components/icons";
import { useSearchTasks } from "../hooks/useSearchTasks";

interface PaginationProps {
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const { currentPage, handlePageChange } = useSearchTasks();

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 py-6">
      <Button
        variant="outline"
        size="icon-sm"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <ChevronLeft className="size-4" />
      </Button>

      {pages.map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? "default" : "outline"}
          size="icon-sm"
          onClick={() => handlePageChange(page)}
          className="text-xs"
        >
          {page}
        </Button>
      ))}

      <Button
        variant="outline"
        size="icon-sm"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <ChevronRight className="size-4" />
      </Button>
    </div>
  );
};

export default Pagination;
