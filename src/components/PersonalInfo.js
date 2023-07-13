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
          <label className="userName margin">{details?.name}</label>
        </div>
        <div className="detailsBorder">
          <div className="personalDetails">
            <div className="personalLabels"><label className="userLabel">Username :</label></div>
            <div className="personalInfo"><label className="userName">{details?.username}</label></div>
          </div>
          <div className="personalDetails">
            <div className="personalLabels"><label className="userLabel">e-mail :</label></div>
            <div className="personalInfo"><label className="userName">{details?.email}</label></div>
          </div>
          <div className="personalDetails">
            <div className="personalLabels" ><label className="userLabel">Phone :</label></div>
            <div className="personalInfo"><label className="userName">{details?.phone}</label></div>
          </div>
          <div className="personalDetails">
            <div className="personalLabels" ><label className="userLabel">Website :</label></div>
            <div className="personalInfo"><label className="userName">{details?.website}</label></div>
          </div>
        </div>
        <>
          <div className="personalDetails">
            <div className="personalLabels"><label className="userLabel">Company Name :</label></div>
            <div className="personalInfo"><label className="userName">{details?.company?.name}</label></div>
          </div>
          <div className="personalDetails">
            <div className="personalLabels"><label className="userLabel">catchphrase :</label></div>
            <div className="personalInfo"><label className="userName">{details?.company?.catchPhrase}</label></div>
          </div>
          <div className="personalDetails">
            <div className="personalLabels" ><label className="userLabel">bs :</label></div>
            <div className="personalInfo"><label className="userName">{details?.company?.bs}</label></div>
          </div>
        </>
      </div>
      <div className="sectionTwo">
        <p className="userLabel">Address :</p>
        <div className="addressWidth">
          <div className="personalDetails">
            <div className="personalLabels"><label className="userLabel">Street :</label></div>
            <div className="personalInfo"><label className="userName">{details?.address?.street}</label></div>
          </div>
          <div className="personalDetails">
            <div className="personalLabels"><label className="userLabel">Suite :</label></div>
            <div className="personalInfo"><label className="userName">{details?.address?.suite}</label></div>
          </div>
          <div className="personalDetails">
            <div className="personalLabels" ><label className="userLabel">City :</label></div>
            <div className="personalInfo"><label className="userName">{details?.address?.city}</label></div>
          </div>
          <div className="personalDetails">
            <div className="personalLabels" ><label className="userLabel">Zipcode :</label></div>
            <div className="personalInfo"><label className="userName">{details?.address?.zipcode}</label></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo;