import React from "react";
import "./LeftSideMenu.scss";
import StarIcon from "../../assets/images/star.svg";

const LeftSideMenu = (props) => {
  const { menuLists } = props;

  return (
    <ul>
      {menuLists.map((menu, i) => {
        return (
          <div className="menu-content" key={i}>
            <li className="menu-icon">
              <img src={menu.iconImg} alt="menu-icon" />
            </li>
            <li className={menu.isSelected ? "menu-selected" : ""}>
              {menu.title}
            </li>
          </div>
        );
      })}

      {/* <div className="menu-content">
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
      </div> */}
    </ul>
  );
};

export default LeftSideMenu;
