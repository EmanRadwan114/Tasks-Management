"use client";
import React from "react";
import { boardNavsItems } from "../data/data";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BoardNavs: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav className="border-b border-secondary-background">
      <ul className="flex gap-x-2 flex-wrap px-2 sm:px-7">
        {boardNavsItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.href === pathname;
          return (
            <li key={item.title}>
              <Link
                href={item.href}
                className={`p-3.5 flex gap-2 capitalize items-center font-medium cursor-pointer hover:text-primary ${
                  isActive
                    ? "text-primary border-b border-primary"
                    : "text-tertiary-foreground"
                }`}
              >
                <Icon className="size-4" />
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BoardNavs;
