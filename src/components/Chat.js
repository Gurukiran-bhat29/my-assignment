import { useState } from "react";
import { useSelector } from "react-redux";

const Chats = () => {
  const [showChat, setShowChat] = useState(false);

  const userList = useSelector(store => store.lists.userList);

  return (
    <div className="ChatContainer" onClick={() => setShowChat(!showChat)}>
      <label className="chats">Chats</label>
      <div className='chatInboxContainer'>
        {showChat && userList.map((list) => {
          return (
            <div className="chatInbox">
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