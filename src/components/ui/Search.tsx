"use client";

import React, { ReactNode } from "react";
import SearchIcon from "../icons/SearchIcon";
import { cn } from "@/lib/utils";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./input-group";

interface SearchProps {
  placeholder?: string;
  Key?: ReactNode;
  wrapperClassName?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({
  placeholder = "Search...",
  Key,
  wrapperClassName,
  value,
  defaultValue,
  onChange,
}) => {
  return (
    <InputGroup className={cn("flex-1 bg-muted-background", wrapperClassName)}>
      <InputGroupAddon>
        <SearchIcon className="text-muted-foreground size-3" />
      </InputGroupAddon>
      <InputGroupInput
        type="text"
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      />
      {Key && <InputGroupAddon align="inline-end">{Key}</InputGroupAddon>}
    </InputGroup>
  );
};

export default Search;
