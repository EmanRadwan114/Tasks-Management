"use client";
import React from "react";
import { CloseIcon } from "../icons";

interface IProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<IProps> = ({ onClose, children, title }) => {
  return (
    <section
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-125 overflow-y-auto max-h-[calc(100vh-4rem)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <header className="flex items-center justify-between px-7 py-3 border-b border-secondary-background">
          <h3 className="font-bold text-size-lg">{title}</h3>
          <div
            className="cursor-pointer border border-secondary-background rounded-sm p-2.5 transition-colors duration-200 text-tertiary-foreground hover:text-muted-foreground"
            onClick={onClose}
          >
            <CloseIcon className="size-3" />
          </div>
        </header>
        {children}
      </div>
    </section>
  );
};

export default Modal;
