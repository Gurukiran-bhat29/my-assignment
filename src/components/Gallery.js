import { useSelector } from "react-redux";
import Header from "./Header";

const Gallery = () => {
  const userDetails = useSelector(store => store.user.selectedUser);
  const lists = useSelector(store => store.lists.userList);

  return (
    <div className="profile">
      <Header name='Gallery' user={userDetails} lists={lists} />
      <div className="centerItem"><p>Coming soon</p></div>
    </div>
  )
}

export default Gallery;