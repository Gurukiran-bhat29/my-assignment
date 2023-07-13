const PersonalInfo = ({ details }) => {
  return (
    <div className='profileDetails'>
      <div className="sectionOne">
        <div className='profileImage'>
          <img
            className="profilePic"
            alt='profilePic'
            src={details?.profilepicture}
          />
          <p>{details?.name}</p>
        </div>
        <div className="personalDetails detailsBorder">
          <div className="personalLabels">
            <p>Username :</p>
            <p>e-mail :</p>
            <p>Phone :</p>
            <p>Website :</p>
          </div>
          <div className="personalInfo">
            <p>{details?.username}</p>
            <p>{details?.email}</p>
            <p>{details?.phone}</p>
            <p>{details?.website}</p>
          </div>
        </div>
        <div className="personalDetails">
          <div className="personalLabels">
            <p>Company Name :</p>
            <p>catchphrase :</p>
            <p>bs :</p>
          </div>
          <div className="personalInfo">
            <p>{details?.company?.name}</p>
            <p>{details?.company?.catchPhrase}</p>
            <p>{details?.company?.bs}</p>
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
            <p>{details?.address?.street}</p>
            <p>{details?.address?.suite}</p>
            <p>{details?.address?.city}</p>
            <p>{details?.address?.zipcode}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo;