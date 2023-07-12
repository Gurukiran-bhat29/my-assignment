const Header = ({ name, user }) => {
  return (
    <div className="header">
      <p>{name}</p>
      <div className="userProfile">
        <img className='userImage' alt='user' src={user.profilepicture} />
        <p className="profileName">{user.name}</p>
      </div>
    </div>
  )
}

export default Header;