import { useSelector } from "react-redux";
import Header from "./Header";
import PersonalInfo from "./PersonalInfo";

const Profile = () => {
  const userDetails = useSelector(store => store.user.selectedUser);
  const lists = useSelector(store => store.lists.userList);

  return (
    <div className="profile">
      <Header name='Profile' user={userDetails} lists={lists} />
      <PersonalInfo details={userDetails} />
    </div>
  )
}

export default Profile;