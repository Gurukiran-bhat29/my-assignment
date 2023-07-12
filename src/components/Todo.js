import { useSelector } from "react-redux";
import Header from "./Header";

const Todo = () => {
  const userDetails = useSelector(store => store.user.selectedUser);

  return (
    <div className="profile">
      <Header name='Todo' user={userDetails} />
      <div className="centerItem"><p>Coming soon</p></div>
    </div>
  )
}

export default Todo;