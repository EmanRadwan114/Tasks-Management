"use client";
import React from "react";
import { boardNavsActions } from "../data/data";
import { Button } from "@/components/ui/Button";
import Search from "@/components/ui/Search";

const BoardActions: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <ul className="flex gap-x-2 flex-wrap">
        {boardNavsActions.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.title}>
              <Button
                className={`capitalize gap-1 font-normal px-2.5! py-1.25! rounded-md! text-size-sm!`}
                variant="outline"
              >
                <Icon className="size-3 text-tertiary-foreground" />
                {item.title}
              </Button>
            </li>
          );
        })}
      </ul>

      <Search
        wrapperClassName="bg-white p-2! flex-none"
        placeholder="Search Tasks..."
      />
    </div>
  );
};

export default BoardActions;
