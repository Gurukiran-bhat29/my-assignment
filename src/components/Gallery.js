import { useSelector } from "react-redux";
import Header from "./Header";

const Gallery = () => {
  const userDetails = useSelector(store => store.user.selectedUser);
  
  return (
    <div className="profile">
      <Header name='Gallery' user={userDetails} />
      <div className="centerItem"><p>Coming soon</p></div>
    </div>
  )
}

export default Gallery;