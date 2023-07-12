import { Link } from "react-router-dom";
import { Tabs } from "../utils/helperUtils";

const ProfileTab = () => {
  return (
    <div className="profileTab">
      {Tabs.map((tab, index) => {
        return (
          <Link
            key={tab.id}
            className={`tab ${index !== 3 ? 'borderBottom' : ''}`}
            to={tab.navigateTo}
          >
            {tab.pageName}
          </Link>
        )
      })}
    </div>
  )
}

export default ProfileTab;