import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";


export default function Sidebar() {

  return (
    <div className="sidebar-container">
      <div></div>
      <div>
        <SidebarButton title="Playlist" to="/playlist" icon={<FaPlay />} />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <div></div>
      {/* <SidebarButton title="Sign Out" to=""   icon={<FaSignOutAlt />} /> */}
    </div>
  );
}