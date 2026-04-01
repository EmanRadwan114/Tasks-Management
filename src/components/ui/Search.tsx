"use client";

import React, { useState } from "react";
import SearchIcon from "../icons/SearchIcon";

const Search: React.FC = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex items-center gap-2 border border-secondary-background rounded-lg px-2.5 py-2 focus-within:border-primary bg-muted-background">
      <SearchIcon className="text-muted-foreground size-3" />
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
        className=" focus-within:outline-none text-size-sm"
      />
    </div>
  );
};

export default Search;
