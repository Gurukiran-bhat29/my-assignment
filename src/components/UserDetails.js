import { Outlet } from "react-router-dom";
import ProfileTab from "./ProfileTab";

const UserDetails = () => {
  return (
    <div className="detailsContainer">
      <ProfileTab />
      <Outlet />
    </div>
  )
}

export default UserDetails;