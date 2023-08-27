import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { grey } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";

export default function ChatHeader(props) {
  return (
    <div className="max-w-screen w-full h-15 px-4 py-1 flex justify-between items-center bg-panel-header-background z-10">
      <div className="flex justify-center items-center gap-4">
      <Avatar sx={{ width: 40, height: 40 }} src="https://pps.whatsapp.net/v/t61.24694-24/368074045_2626385527512200_112200463422694199_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTUBImLcJ8SG7mNHpOsFmEVX3PQtDmMqZTR-V1a5S2Csw&oe=64F2A8C4&_nc_cat=110" />
      <div className="flex flex-col">
        <span className="text-primary-strong">Harshul</span>
        <span className="text-secondary-strong text-sm">Online</span>
        </div>
      </div>
      <div className="flex gap-2">
      <IconButton>
          <SearchIcon sx={{ color: grey[50], width: 24, height: 24 }} title="Search" />
        </IconButton>
      <IconButton>
          <MoreVertIcon sx={{ color: grey[50], width: 24, height: 24 }} title="More Options"/>
        </IconButton>
      </div>
    </div>
  )
}