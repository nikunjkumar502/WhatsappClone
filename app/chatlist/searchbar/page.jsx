import React, { useState } from "react";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { grey } from "@mui/material/colors";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const clearInput = () => {
    setInputValue(" ");
  };

  return (
    <div className=" h-20 bg-search-input-container-background justify-between flex items-center p-1 w-full">
      <div className="bg-panel-header-background flex pr-2 pl-2 h-10 text-white rounded-lg">
        <IconButton>
          <SearchIcon sx={{ color: grey[50], width: 24, height: 24 }} />
        </IconButton>
        <input
          className="bg-transparent max-w-full pl-6 pr-14 border-none outline-none placeholder-gray-400"
          type="text"
          placeholder="Search or start new chat."
          value={inputValue}
          onChange={handleInputChange}
          onFocus={clearInput}
        />
      </div>
      <div className="items-center ml-4">
        <IconButton>
          <FilterListIcon sx={{ color: grey[500], width: 24, height: 24 }} />
        </IconButton>
      </div>
    </div>
  );
}
