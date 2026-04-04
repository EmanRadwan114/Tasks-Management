"use client";

import React from "react";
import { FilterIcon } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/Button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import {
  TaskCategoryOptions,
  TaskPriorityOptions,
  TaskStatusOptions,
} from "../data/data";
import { useSearchTasks } from "../hooks/useSearchTasks";
import { useAssigneeOptions } from "../hooks/useAssigneeOptions";
import { cn } from "@/lib/utils";

const BoardFilters: React.FC = () => {
  const FILTER_ALL = "All";
  const {
    handleFilter,
    clearFilters,
    currentStatus,
    currentPriority,
    currentAssigneeId,
    currentCategory,
    hasActiveFilters,
  } = useSearchTasks();

  const assigneeOptions = useAssigneeOptions();

  return (
    <li className="group">
      <Popover>
        <PopoverTrigger
          type="button"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "capitalize gap-1 font-normal px-2.5! py-1.25! rounded-md! text-size-sm! group-hover:text-primary hover:text-primary bg-white hover:bg-white!",
            hasActiveFilters && "border-primary/40 text-primary",
          )}
        >
          <FilterIcon className="size-3 text-tertiary-foreground group-hover:text-primary" />
          filters
        </PopoverTrigger>
        <PopoverContent align="start" className="w-80 gap-4 p-4 sm:w-96">
          <div className="flex flex-col gap-3.5">
            <div className="space-y-1.5">
              <span className="text-size-xs font-medium text-muted-foreground">
                Status
              </span>
              <Select
                value={currentStatus}
                onValueChange={(v) =>
                  handleFilter("status", v === FILTER_ALL ? "" : v ?? "")
                }
              >
                <SelectTrigger size="sm" className="w-full">
                  <SelectValue placeholder="All statuses" />
                </SelectTrigger>
                <SelectContent alignItemWithTrigger={false}>
                  <SelectItem value={FILTER_ALL}>All statuses</SelectItem>
                  {TaskStatusOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <span className="text-size-xs font-medium text-muted-foreground">
                Priority
              </span>
              <Select
                value={currentPriority}
                onValueChange={(v) =>
                  handleFilter("priority", v === FILTER_ALL ? "" : v ?? "")
                }
              >
                <SelectTrigger size="sm" className="w-full">
                  <SelectValue placeholder="All priorities" />
                </SelectTrigger>
                <SelectContent alignItemWithTrigger={false}>
                  <SelectItem value={FILTER_ALL}>All priorities</SelectItem>
                  {TaskPriorityOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <span className="text-size-xs font-medium text-muted-foreground">
                Category
              </span>
              <Select
                value={currentCategory}
                onValueChange={(v) =>
                  handleFilter("category", v === FILTER_ALL ? "" : v ?? "")
                }
              >
                <SelectTrigger size="sm" className="w-full">
                  <SelectValue placeholder="All categories" />
                </SelectTrigger>
                <SelectContent alignItemWithTrigger={false}>
                  <SelectItem value={FILTER_ALL}>All categories</SelectItem>
                  {TaskCategoryOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <span className="text-size-xs font-medium text-muted-foreground">
                Assignee
              </span>
              <Select
                value={currentAssigneeId}
                onValueChange={(v) =>
                  handleFilter("assigneeId", v === FILTER_ALL ? "" : v ?? "")
                }
              >
                <SelectTrigger size="sm" className="w-full">
                  <SelectValue placeholder="All assignees" />
                </SelectTrigger>
                <SelectContent alignItemWithTrigger={false}>
                  <SelectItem value={FILTER_ALL}>All assignees</SelectItem>
                  {assigneeOptions
                    .filter((o) => o.value)
                    .map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            size="sm"
            className="w-full"
            disabled={!hasActiveFilters}
            onClick={() => clearFilters()}
          >
            Reset filters
          </Button>
        </PopoverContent>
      </Popover>
    </li>
  );
};

export default BoardFilters;
