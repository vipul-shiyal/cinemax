import React from "react";
import { Button } from "antd";
import "./SocialButton.scss";

const SocialButton = ({ value, imgURL }) => {
  return (
    <Button type="primary" className="social-btn">
      <img src={imgURL} alt="social icon" />
      <span>{value}</span>
    </Button>
  );
};

export default SocialButton;
