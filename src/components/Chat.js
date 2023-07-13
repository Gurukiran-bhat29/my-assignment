import { useDispatch, useSelector } from "react-redux";
import { hide } from "../utils/popUpSlice";
import { useState } from "react";
const Chats = () => {
  const [showChat, setShowChat] = useState(false);

  const userList = useSelector(store => store.lists.userList);
  const dispatch = useDispatch();

  const toggleChat = () => {
    showChat && dispatch(hide());
    setShowChat(!showChat)
  }

  return (
    <div className="ChatContainer" onClick={() => toggleChat()}>
      <label className="chats">Chats</label>
      <div className='chatInboxContainer'>
        {showChat && userList.map((list) => {
          return (
            <div key={list.id} className="chatInbox">
              <img className='userDp' alt='userDp' src={list.profilepicture} />
              <label className="chatName">{list.name}</label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Chats;