import { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs } from "../utils/helperUtils";

const ProfileTab = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="profileTab">
      {Tabs.map((tab, index) => {
        return (
          <Link
            onClick={() => setTabIndex(index)}
            key={tab.id}
            className={`tab ${tabIndex === index ? 'selectedTab' : ''} ${index !== 3 ? 'borderBottom' : ''}`}
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