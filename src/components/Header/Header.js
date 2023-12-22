import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../config/images";
import "./Header.scss";
import searchIcon from "../../assets/images/searchIcon.svg";
import notification from "../../assets/images/notification.svg";
import arrowDown from "../../assets/images/arrow-down.svg";

import { Button } from "antd";
import { UserAvatar } from "../UserAvatar/UserAvatar";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <p className="header-logo-text">CineMax</p>
      </div>

      <nav className="header-menu-container">
        <ul className="header-menu">
          <li>Movies</li>
          <li>Series</li>
          <li>Animation</li>
          <li>Genres</li>
        </ul>
        <img src={searchIcon} alt="movie search" className="searchIcon" />
      </nav>
      <div className="right-aside">
        <Button className="subscribe-btn">
          <Link to="/subscribe">Subscribe</Link>
        </Button>
        <div className="notification">
          <img
            src={notification}
            alt="notifications"
            className="notification-icon"
          />
          <span className="notification-counter">3</span>
        </div>
        <div className="profile-image">
          <UserAvatar avatarImage={images.userAvatar} />
          <img src={arrowDown} alt="arrow-down" />
        </div>
      </div>

      {/* <Row>
        <Col span={24}>
          <Row className="row-container">
            <Col flex="257px" className="logo-text">
              CineMax
            </Col>
            <Col flex="auto">Fill Rest</Col>
          </Row>
        </Col>
      </Row> */}
    </header>
  );
};

export default Header;
