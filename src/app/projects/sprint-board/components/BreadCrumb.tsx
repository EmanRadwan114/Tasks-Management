"use client";
import { ChevronDown } from "@/components/icons";
import React from "react";
import useBreadCrumb from "../hooks/useBreadCrumb";

interface IProps {
  lastSegmentLabel?: string;
}

const BreadCrumb: React.FC<IProps> = ({ lastSegmentLabel }) => {
  const paths = useBreadCrumb();
  console.log("seg", lastSegmentLabel);

  const displayPaths = paths.map((path) => {
    if (lastSegmentLabel?.includes(path.name)) {
      return {
        ...path,
        name: lastSegmentLabel,
      };
    }
    return path;
  });

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        {displayPaths.map((path, index) => (
          <div className="flex items-center gap-md" key={index}>
            <span
              className={`capitalize ${
                path.isActive ? "font-semibold" : "text-tertiary-foreground"
              }`}
            >
              {path.name}
            </span>
            {index < displayPaths.length - 1 && (
              <ChevronDown className="rotate-270 text-muted-foreground -mt-1" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreadCrumb;
