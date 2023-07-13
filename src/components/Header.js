import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../utils/popUpSlice";

const Header = ({ name, user, lists }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const popUp = useSelector(store => store.popUp.headerPopUp);
  return (
    <div>
      <div className="header">
        <p>{name}</p>
        <div className="userProfile"
          onClick={() => dispatch(toggle())}
        >
          <img className='userImage' alt='user' src={user?.profilepicture} />
          <p className="profileName">{user?.name}</p>
        </div>
      </div>
      {popUp && (
        <div className="headerProfile">
          <img className='headerImage' alt='user' src={user?.profilepicture} />
          <p className="profileName">{user?.name}</p>
          <p className="profileName">{user?.email}</p>
          <div className="otherUser">
            <img
              className="userImage"
              alt='other'
              src={lists[0]?.profilepicture}
            />
            <p className="paddingLeft">{lists[0]?.name}</p>
          </div>
          <div className="otherUser">
            <img
              className="userImage"
              alt='otherUser'
              src={lists[1]?.profilepicture}
            />
            <p className="paddingLeft">{lists[1]?.name}</p>
          </div>
          <div></div>
          <button className="signOut" onClick={() => navigate('/')}>Sign out</button>
        </div>
      )}
    </div>
  )
}

export default Header;