"use client";
import React from "react";
import { boardNavsActions } from "../data/data";
import { Button } from "@/components/ui/Button";
import Search from "@/components/ui/Search";

const BoardActions: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-y-2.5 py-2.5">
      <ul className="flex gap-2 flex-wrap">
        {boardNavsActions.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.title} className="group">
              <Button
                className={`capitalize gap-1 font-normal px-2.5! py-1.25! rounded-md! text-size-sm! group-hover:text-primary hover:text-primary bg-white hover:bg-white!`}
                variant="outline"
              >
                <Icon className="size-3 text-tertiary-foreground group-hover:text-primary" />
                {item.title}
              </Button>
            </li>
          );
        })}
      </ul>

      <Search
        wrapperClassName="bg-white! flex-none w-fit"
        placeholder="Search Tasks..."
      />
    </div>
  );
};

export default BoardActions;
