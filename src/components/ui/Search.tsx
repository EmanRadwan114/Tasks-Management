"use client";

import React, { ReactNode, useState } from "react";
import SearchIcon from "../icons/SearchIcon";

interface SearchProps {
  placeholder?: string;
  Key?: ReactNode;
  wrapperClassName?: string;
}

const Search: React.FC<SearchProps> = ({
  placeholder = "Search...",
  Key,
  wrapperClassName,
}) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div
      className={`flex-1 flex items-center justify-between gap-2 border border-secondary-background rounded-lg px-2.5 py-2 focus-within:border-primary bg-muted-background ${wrapperClassName}`}
    >
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <SearchIcon className="text-muted-foreground size-3" />
        <input
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={handleSearch}
          className="focus-within:outline-none text-size-sm w-full min-w-0"
        />
      </div>
      {Key}
    </div>
  );
};

export default Search;
