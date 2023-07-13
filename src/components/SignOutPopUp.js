import { useNavigate } from "react-router-dom";

const SignOutPopUp = ({ user, lists }) => {
  const navigate = useNavigate();

  return (
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
  )
}

export default SignOutPopUp;