import { useSelector } from "react-redux";
import Header from "./Header";

const Posts = () => {
  const userDetails = useSelector(store => store.user.selectedUser);

  return (
    <div className="profile">
      <Header name='Posts' user={userDetails} />
      <div className="centerItem"><p>Coming soon</p></div>
    </div>
  )
}

export default Posts;