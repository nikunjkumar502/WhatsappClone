import React from "react";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import GroupsIcon from "@mui/icons-material/Groups";
import { grey } from "@mui/material/colors";
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';

const ChatListHeader = () => {
  return (
    <div className="max-w-screen w-full h-15 px-1 py-1 flex justify-between items-center bg-panel-header-background">
      <div className="cursor-pointer ml-3">
        <Avatar sx={{ color: grey[50], width: 40, height: 40 }} src="https://pps.whatsapp.net/v/t61.24694-24/325769428_885629199389199_2889659283925403470_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQ5x3m6-1fMTdlpTlEqU0qwJhayP2cy0PP_-8_gEeGxeQ&oe=64F2BB5C&_nc_cat=105"/>
      </div>
      <span className="cursor-pointer gap-x-3">
        <IconButton>
          <GroupsIcon sx={{ color: grey[50], width: 28, height: 28 }} title="Group Chat" className="ml-3" />
        </IconButton>
        <IconButton>
          <WifiTetheringIcon sx={{ color: grey[50], width: 28, height: 28 }} title="Group Chat" className="ml-3" />
        </IconButton>
        <IconButton>
          <ChatIcon sx={{ color: grey[50], width: 24, height: 24 }} title="New Chat" className="ml-3" />
        </IconButton>
        <IconButton>
          <MoreVertIcon sx={{ color: grey[50], width: 24, height: 24 }} title="More Options" className="ml-3" />
        </IconButton>
      </span>
    </div>
  );
}

export default ChatListHeader;