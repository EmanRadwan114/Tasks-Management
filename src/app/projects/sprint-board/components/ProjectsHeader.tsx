"use client";
import React, { useState } from "react";
import BreadCrumb from "./BreadCrumb";
import Search from "@/components/ui/Search";
import { BellIcon, SettingsIcon, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";

const ProjectsHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between px-4 md:px-6 py-2 border-b border-secondary-background">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <BreadCrumb />

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="text-muted-foreground hover:bg-muted-background hover:text-primary transition-colors lg:hidden"
        >
          <MenuIcon className="size-5" />
        </Button>
      </div>

      <div
        className={`${
          isOpen
            ? "absolute top-full inset-e-4 flex flex-col items-center p-4 bg-primary-background border-b border-secondary-background z-50 shadow-md"
            : "hidden"
        } lg:static lg:flex lg:flex-row lg:w-auto lg:p-0 lg:bg-transparent lg:border-none lg:z-auto lg:shadow-none gap-lg lg:items-center`}
      >
        {/* search */}
        <Search
          placeholder="Search tasks..."
          wrapperClassName="w-50"
          Key={
            <div className="bg-default-background! text-muted-foreground px-1.75 py-0.75 rounded-sm">
              <span className="text-[9px]">Ctrl K</span>
            </div>
          }
        />

        <div className="flex gap-lg items-center">
          {/* notification */}
          <Button
            variant="outline"
            size="icon"
            className="text-tertiary-foreground hover:text-primary"
          >
            <BellIcon />
          </Button>

          {/* settings */}
          <Button
            variant="outline"
            size="icon"
            className="text-tertiary-foreground hover:text-primary"
          >
            <SettingsIcon />
          </Button>

          {/* profile */}
          <div className="rounded-full bg-primary flex items-center justify-center size-8.5 cursor-pointer shrink-0 hover:scale-105 transition-transform duration-300 ease-in-out">
            <span className="font-medium text-white leading-none">SC</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProjectsHeader;
