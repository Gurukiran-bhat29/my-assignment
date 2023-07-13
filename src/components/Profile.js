import { useSelector } from "react-redux";
import Header from "./Header";

const Profile = () => {
  const userDetails = useSelector(store => store.user.selectedUser);
  const lists = useSelector(store => store.lists.userList);

  return (
    <div className="profile">
      <Header name='Profile' user={userDetails} lists={lists} />
      <div className='profileDetails'>
        <div className="sectionOne">
          <div className='profileImage'>
            <img
              className="profilePic"
              alt='profilePic'
              src={userDetails?.profilepicture}
            />
            <p>{userDetails?.name}</p>
          </div>
          <div className="personalDetails detailsBorder">
            <div className="personalLabels">
              <p>Username :</p>
              <p>e-mail :</p>
              <p>Phone :</p>
              <p>Website :</p>
            </div>
            <div className="personalInfo">
              <p>{userDetails?.username}</p>
              <p>{userDetails?.email}</p>
              <p>{userDetails?.phone}</p>
              <p>{userDetails?.website}</p>
            </div>
          </div>
          <div className="personalDetails">
            <div className="personalLabels">
              <p>Company Name :</p>
              <p>catchphrase :</p>
              <p>bs :</p>
            </div>
            <div className="personalInfo">
              <p>{userDetails?.company?.name}</p>
              <p>{userDetails?.company?.catchPhrase}</p>
              <p>{userDetails?.company?.bs}</p>
            </div>
          </div>
        </div>
        <div className="sectionTwo">
          <p>Address :</p>
          <div className="personalDetails">
            <div className="personalLabels">
              <p>Street :</p>
              <p>Suite :</p>
              <p>City :</p>
              <p>Zipcode :</p>
            </div>
            <div className="personalInfo">
              <p>{userDetails?.address?.street}</p>
              <p>{userDetails?.address?.suite}</p>
              <p>{userDetails?.address?.city}</p>
              <p>{userDetails?.address?.zipcode}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;