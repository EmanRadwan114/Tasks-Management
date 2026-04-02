"use client";
import { ChevronDown } from "@/components/icons";
import React from "react";
import useBreadCrumb from "../hooks/useBreadCrumb";

const BreadCrumb: React.FC = () => {
  const paths = useBreadCrumb();

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        {paths.map((path, index) => (
          <div className="flex items-center gap-md" key={index}>
            <span
              className={`capitalize ${
                path.isActive ? "font-semibold" : "text-tertiary-foreground"
              }`}
            >
              {path.name}
            </span>
            {index < paths.length - 1 && (
              <ChevronDown className="rotate-270 text-muted-foreground -mt-1" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreadCrumb;
