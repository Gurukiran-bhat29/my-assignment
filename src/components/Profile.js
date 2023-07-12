import { useSelector } from "react-redux";
import Header from "./Header";

const Profile = () => {
  const userDetails = useSelector(store => store.user.selectedUser);

  return (
    <div className="profile">
      <Header name='Profile' user={userDetails} />
    </div>
  )
}

export default Profile;