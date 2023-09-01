import React from "react";
import { Avatar } from "@mui/material";
import Brightness1Icon from "@mui/icons-material/Brightness1";

 const List = ({data, selectedItem, onItemClick}) => {

  const formatDate = (date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    if (date === today) {
      return date([], { hour: "2-digit", minute: "2-digit" });
    } else if (date === yesterday) {
      return "Yesterday";
    } else {
      return date;
    }
  };

  return (
    <div className="bg-search-input-container-background flex flex-col overflow-hidden max-w-full max-h-full h-18 relative ">
      <div className="flex flex-col overflow-y-auto">
      {data.map((item) => (
          <div
            key={item.id}
            className={`flex items-center w-full pt-0 pb-2 cursor-pointer mb-1 hover:bg-panel-header-background ${
              selectedItem === item.id
                ? "bg-panel-header-background border-panel-header-background"
                : ""
            }`}
            onClick={() => onItemClick(item.id)}
          >
            <div className="pr-4 pl-3 ml--1">
              <Avatar
                sx={{ width: 49, height: 49 }}
                src={item.avatar}
                alt={item.name}
              />
            </div>
            {item.status === "Read" ? (
              <div className="flex flex-col max-w-xl pt-2 w-full border-t border-solid border-border-strong">
                <div className="flex flex-row justify-between ">
                  <div
                    className={`font-light text-[#e9edef] text-lg overflow-wrap break-words`}
                  >
                    {item.name}
                  </div>
                  <div className={`text-sm w-auto text-[#667781]`}>
                    {formatDate(item.timestamp)}
                  </div>
                </div>
                <div
                  className={`text-sm line-clamp-1 pr-3 overflow-hidden text-[#8696A0]`}
                >
                  {item.description}
                </div>
              </div>
            ) : (
              <div className="flex flex-col max-w-2xl pt-2 w-full border-t border-solid border-border-strong">
                <div className="flex flex-row w-full justify-between ">
                  <div
                    className={`font-semibold text-[#e9edef] text-lg overflow-wrap break-words`}
                  >
                    {item.name}
                  </div>
                  <div className={`text-sm w-auto text-[#00a884]`}>
                    {formatDate(item.timestamp)}
                  </div>
                </div>
                <div className="flex flex-row w-full justify-between ">
                  <div
                    className={`text-sm line-clamp-1 pr-3 overflow-hidden text-[#e9edef]`}
                  >
                    {item.description}
                  </div>
                  <div className="count-circle inline-flex overflow-visible">
                    <div className="relative flex items-center">
                      <Brightness1Icon
                        sx={{ color: "#00a884", width: 28, height: 28 }}
                      />
                      <span className="text-sm count-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#111b21] font-semibold">
                        {item.count}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;