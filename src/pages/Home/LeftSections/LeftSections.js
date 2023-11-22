import React from "react";
import LeftSideMenu from "../../../components/LeftSideMenu/LeftSideMenu";
import "./LeftSections.scss";
import starIcon from "../../../assets/images/star.svg";
import discover from "../../../assets/images/discover.png";
import timer from "../../../assets/images/timer.png";
import clock from "../../../assets/images/clock.png";
import documentDownload from "../../../assets/images/document-download.png";
import moon from "../../../assets/images/moon.png";
import setting from "../../../assets/images/setting.png";

const LeftSections = () => {
  const menuList = [
    {
      title: "Discovery",
      isSelected: true,
      iconImg: discover,
    },
    {
      title: "Top Rated",
      isSelected: false,
      iconImg: starIcon,
    },
    {
      title: "Coming Soon",
      isSelected: false,
      iconImg: timer,
    },
  ];
  const libraryList = [
    {
      title: "Recent Played",
      isSelected: false,
      iconImg: clock,
    },
    {
      title: "Download",
      isSelected: false,
      iconImg: documentDownload,
    },
    {
      title: "Dark Mode",
      isSelected: false,
      iconImg: moon,
    },
    {
      title: "Setting",
      isSelected: false,
      iconImg: setting,
    },
  ];
  return (
    <div className="left-section-container">
      <p className="menu-heading">Menu</p>
      <LeftSideMenu menuLists={menuList} />

      <p className="menu-heading second-heading">Library</p>
      <LeftSideMenu menuLists={libraryList} />

      {/* <ul>
        <div className="menu-content">
          <li className="menu-icon">
            <img src={StarIcon} alt="menu-icon" />
          </li>
          <li className="menu-selected">Discovery</li>
        </div>
        <div className="menu-content">
          <li className="menu-icon">
            <img src={StarIcon} alt="menu-icon" />
          </li>
          <li>Top Rated</li>
        </div>
        <div className="menu-content">
          <li className="menu-icon">
            <img src={StarIcon} alt="menu-icon" />
          </li>
          <li>Coming Soon</li>
        </div>
      </ul> */}
    </div>
  );
};

export default LeftSections;
