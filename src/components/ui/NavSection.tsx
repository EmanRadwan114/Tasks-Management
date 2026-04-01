"use client";
import React, { ComponentType } from "react";
import { IIcon, INavItem } from "@/types/interfaces";
import { usePathname } from "next/navigation";

interface IProps {
  title: string;
  items: INavItem[];
  icon?: ComponentType<IIcon>;
}

const NavSection: React.FC<IProps> = ({ title, items, icon: Icon }) => {
  const pathname = usePathname();

  return (
    <section className="flex flex-col gap-y-0.5">
      <div className="flex items-center justify-between px-regular">
        <h3 className="text-[10px] font-bold text-muted-foreground uppercase py-md ">
          {title}
        </h3>
        {Icon && (
          <div className="p-0.5 cursor-pointer">
            <Icon className="text-muted-foreground" />
          </div>
        )}
      </div>
      <ul className="flex flex-col gap-y-0.5">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = item.href === `/${pathname.split("/").pop()}`;
          return (
            <li
              key={item.title}
              className={`flex items-center gap-x-2.5 py-md cursor-pointer group px-md rounded-lg transition-colors ${
                isActive ? "text-primary bg-active-background" : ""
              }`}
            >
              <Icon
                className={`group-hover:text-primary size-xl ${
                  isActive ? "text-primary" : "text-tertiary-foreground"
                }`}
              />
              <span
                className={`text-size-regular group-hover:text-primary inline-block mt-0.5 ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-secondary-foreground"
                }`}
              >
                {item.title}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default NavSection;
