import React from "react";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { grey } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ChatHeader = ({ name, Presence, avatar, onItemClick }) => {
  return (
    <div className="max-w-screen w-full h-15 px-4 py-1 flex justify-between items-center bg-panel-header-background z-10">
      <div className="flex justify-center items-center gap-4">
        <IconButton onClick={() => onItemClick(null)} className="sm:hidden p-0 m-0 right-0 left-0 top-0 bottom-0">
          <ArrowBackIcon sx={{ color: grey[50], width: 30, height: 30 }} />
        </IconButton>
     
        <Avatar
          sx={{ width: 40, height: 40 }}
          src={avatar}
          alt={name}
        />
        <div className="flex flex-col">
          <span className="text-primary-strong">{name}</span>
          <span className="text-secondary-strong text-sm">
            {Presence}
          </span>
        </div>
      </div>
      <div className="flex mr-[-20px]">
        <IconButton>
          <SearchIcon
            sx={{ color: grey[50], width: 24, height: 24 }}
            title="Search"
          />
        </IconButton>
        <IconButton>
          <MoreVertIcon
            sx={{ color: grey[50], width: 24, height: 24 }}
            title="More Options"
          />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatHeader;
