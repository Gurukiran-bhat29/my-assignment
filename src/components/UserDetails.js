import { Outlet } from "react-router-dom";
import ProfileTab from "./ProfileTab";
import Chats from "./Chat";

const UserDetails = () => {
  return (
    <div className="detailsContainer">
      <ProfileTab />
      <Outlet />
      <Chats />
    </div>
  )
}

export default UserDetails;