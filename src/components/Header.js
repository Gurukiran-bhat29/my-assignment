import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../utils/popUpSlice";
import SignOutPopUp from "./SignOutPopUp";

const Header = ({ name, user, lists }) => {
  const dispatch = useDispatch();

  const popUp = useSelector(store => store.popUp.headerPopUp);

  return (
    <div>
      <div className="header">
        <p className="headerName">{name}</p>
        <div className="userProfile"
          onClick={() => dispatch(toggle())}
        >
          <img className='userImage' alt='user' src={user?.profilepicture} />
          <p className="profileName">{user?.name}</p>
        </div>
      </div>
      {popUp && (
        <SignOutPopUp lists={lists} user={user} />
      )}
    </div>
  )
}

export default Header;