import React from "react";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import { IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const MessageBar = () => {
  return (
    <div className=" h-15 bg-panel-header-background py-4 flex items-center gap-4 relative">
        <div className="flex gap-2">
          <IconButton>
            <AddReactionOutlinedIcon sx={{ color: grey[50] }}/>
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon sx={{ color: grey[50] }}  />
          </IconButton>
        </div>

        <div className="w-full rounded-lg h-10 items-center">
          <input
            type="text"
            placeholder="Type A Message!"
            className="bg-input-background text-sm focus:outline-none text-white  h-10 px-4 rounded-lg items-center w-full border-1"
          ></input>
        </div>
          <IconButton>
            <SendOutlinedIcon sx={{ color: grey[50] }} />
          </IconButton>
    </div>
  );
}

export default MessageBar;