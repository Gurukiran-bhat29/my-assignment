import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useDispatch, useSelector } from "react-redux";
import { storeDetails } from "../store/listSlice";

const LandingPage = () => {
  const lists = useSelector(store => store.lists.userList);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getDetails = async () => {
    const response = await fetch('https://panorbit.in/api/users.json');
    const jsonResponse = await response.json();
    dispatch(storeDetails(jsonResponse.users));
  }

  useEffect(() => {
    lists.length === 0 && getDetails();
  }, [])

  return (
    <div className='landingContainer'>
      <div className='selectAccount'>
        <div className='header'>
          <span >Select Account</span>
        </div>

        <div className="listsContainer">
          <Scrollbars style={{ width: '100%', height: '100%' }}>
            {lists.map((list, index) => {
              return (
                <div
                  onClick={() => navigate('details')}
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