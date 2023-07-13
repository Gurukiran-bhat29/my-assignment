import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useDispatch, useSelector } from "react-redux";
import { storeDetails, UpdateList } from "../utils/listSlice";
import { selectedUser } from "../utils/userSlice";
import { hide } from "../utils/popUpSlice";

const LandingPage = () => {
  const lists = useSelector(store => store.lists.userList);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getDetails = async () => {
    const response = await fetch('https://panorbit.in/api/users.json');
    const jsonResponse = await response.json();
    dispatch(storeDetails(jsonResponse.users));
  }

  const navigationToProfile = (index) => {
    dispatch(UpdateList(index));
    dispatch(selectedUser(lists[index]));

    navigate('profile');
  }

  useEffect(() => {
    getDetails();
    dispatch(hide());
  }, [])

  return (
    <div className='landingContainer centerItem'>
      <div className='selectAccount'>
        <div className='accountHeader'>
          <label className="landingHeader">Select an account</label>
        </div>
        <div className="listsContainer">
          <Scrollbars className="srollBar">
            {lists.map((list, index) => {
              return (
                <div
                  onClick={() => navigationToProfile(index)}
                  key={list.id}
                  className='userDetails'
                >
                  <img className='userImage' alt='user' src={list.profilepicture} />
                  <p className="list">
                    {list.name}
                  </p>
                </div>
              )
            })}
          </Scrollbars>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;