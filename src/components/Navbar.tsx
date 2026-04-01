"use client";

import React, { useEffect, useState } from "react";
import Search from "./ui/Search";
import ChevronDown from "./icons/ChevronDown";
import { generalItems, projectItems } from "@/data/navItems";
import NavSection from "./ui/NavSection";
import SvgLogoutIcon from "./icons/LogoutIcon";
import SvgMenuIcon from "./icons/MenuIcon";
import SvgCloseIcon from "./icons/CloseIcon";
import SvgPlusIcon from "./icons/PlusIcon";

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navDrawer = (
    <>
      {/* logo */}
      <div className="flex gap-2.5 justify-between px-md">
        <div className="flex gap-2.5">
          <div className="size-8 bg-primary rounded-lg uppercase flex items-center justify-center text-white font-bold text-size-md">
            E
          </div>
          <div className="flex flex-col gap-y-sm -mt-0.5">
            <p className="text-md font-semibold">Eng Tasks</p>
            <span className="text-size-xs text-muted-foreground">
              Engineering Team
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center p-0.5 cursor-pointer">
          <ChevronDown className="text-muted-foreground" />
        </div>
        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 cursor-pointer flex items-center justify-center size-7 border border-secondary-background rounded-lg text-muted-foreground hover:text-default-foreground transition-colors duration-300 ease-in-out"
          >
            <SvgCloseIcon />
          </button>
        )}
      </div>

      {/* searcg */}
      <div className="px-regular">
        <Search />
      </div>

      {/* navitems */}
      <div className="flex flex-col gap-y-lg">
        <NavSection title="General" items={generalItems} />
        <NavSection title="Projects" items={projectItems} icon={SvgPlusIcon} />
      </div>

      {/* user */}
      <div className="flex gap-2.5 justify-between px-md mt-auto">
        <div className="flex gap-2.5">
          <div className="size-7 bg-brand-blue rounded-full uppercase flex items-center justify-center text-white font-medium text-size-xs">
            SC
          </div>
          <div className="flex flex-col gap-y-sm -mt-0.5">
            <p className="text-size-regular font-medium">Sarah Chen</p>
            <span className="text-size-xs text-muted-foreground">
              sarah@eng.co
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center p-0.5 cursor-pointer">
          <SvgLogoutIcon className="text-muted-foreground" />
        </div>
      </div>
    </>
  );

  const desktopNav = (
    <nav className="w-60 h-screen px-md py-lg flex flex-col gap-y-xl border-e border-secondary-background">
      {navDrawer}
    </nav>
  );

  const mobileNav = (
    <>
      <nav className="flex items-center justify-between p-lg border-b border-secondary-background bg-white">
        <div className="flex gap-2.5 items-center">
          <div className="size-8 bg-primary rounded-lg uppercase flex items-center justify-center text-white font-bold text-size-md">
            E
          </div>
          <p className="text-md font-semibold">Eng Tasks</p>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 cursor-pointer text-muted-foreground hover:text-primary transition-colors duration-300 ease-in-out"
        >
          <SvgMenuIcon className="size-5" />
        </button>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-500 ease-in-out"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-500 ease-in-out flex flex-col pt-4 h-full ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-y-xl px-md">{navDrawer}</div>
      </div>
    </>
  );

  return (
    <header className={isMobile ? "bg-white" : ""}>
      {isMobile ? mobileNav : desktopNav}
    </header>
  );
};

export default Navbar;
