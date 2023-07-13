import { Outlet } from "react-router-dom";
import ProfileTab from "./ProfileTab";
import Chats from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { hide } from "../utils/popUpSlice";

const UserDetails = () => {
  const popUp = useSelector(store => store.popUp.headerPopUp);

  const dispatch = useDispatch();

  return (
    <div className="detailsContainer" onClick={() => popUp && dispatch(hide())}>
      <ProfileTab />
      <Outlet />
      <Chats />
    </div>
  )
}

export default UserDetails;