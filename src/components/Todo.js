import { useSelector } from "react-redux";
import Header from "./Header";

const Todo = () => {
  const userDetails = useSelector(store => store.user.selectedUser);
  const lists = useSelector(store => store.lists.userList);

  return (
    <div className="profile">
      <Header name='Todo' user={userDetails} lists={lists} />
      <div className="centerItem">
        <p className="message">Coming soon</p>
      </div>
    </div>
  )
}

export default Todo;