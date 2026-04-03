"use client";

import React from "react";
import Search from "./ui/Search";
import ChevronDown from "./icons/ChevronDown";
import { generalItems, projectItems } from "@/data/navItems";
import NavSection from "./ui/NavSection";
import { Button } from "./ui/Button";
import { LogoutIcon, MenuIcon, CloseIcon, PlusIcon } from "@/components/icons";
import useMobileNav from "@/hooks/useMobileNav";

const Navbar: React.FC = () => {
  const {
    isMobile,
    isMobileMenuOpen: isOpen,
    setIsMobileMenuOpen: setIsOpen,
  } = useMobileNav();

  const navDrawer = (
    <>
      {/* logo */}
      <div className="flex gap-2.5 justify-between px-md">
        <div className="flex gap-2.5">
          <div className="size-8 bg-primary rounded-lg uppercase flex items-center justify-center text-white font-bold text-size-md leading-none">
            E
          </div>
          <div className="flex flex-col">
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
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => setIsOpen(!isOpen)}
            className="text-muted-foreground hover:text-foreground"
          >
            <CloseIcon className="size-3" />
          </Button>
        )}
      </div>

      {/* searcg */}
      <div className="px-regular">
        <Search />
      </div>

      {/* navitems */}
      <div className="flex flex-col gap-y-lg">
        <NavSection title="General" items={generalItems} />
        <NavSection title="Projects" items={projectItems} icon={PlusIcon} />
      </div>

      {/* user */}
      <div className="flex gap-2.5 justify-between px-md mt-auto">
        <div className="flex gap-2.5">
          <div className="size-7 bg-brand-blue rounded-full uppercase flex items-center justify-center text-white font-medium text-size-xs leading-none">
            SC
          </div>
          <div className="flex flex-col">
            <p className="text-size-regular font-medium">Sarah Chen</p>
            <span className="text-size-xs text-muted-foreground">
              sarah@eng.co
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center p-0.5 cursor-pointer">
          <LogoutIcon className="text-muted-foreground" />
        </div>
      </div>
    </>
  );

  const desktopNav = (
    <nav className="fixed inset-y-0 inset-s-0 w-60 h-screen px-md py-lg flex flex-col gap-y-xl border-e border-secondary-background z-60 bg-white">
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
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="text-muted-foreground hover:bg-muted-background hover:text-primary transition-colors"
        >
          <MenuIcon className="size-5 " />
        </Button>
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
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-500 ease-in-out flex flex-col py-4 h-full ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-y-xl px-md h-full">{navDrawer}</div>
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
