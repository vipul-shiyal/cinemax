import React from "react";
import "./UserAvatar.scss";

export const UserAvatar = ({ avatarImage }) => {
  return <img src={avatarImage} alt="User Avatar" className="user-avatar" />;
};
