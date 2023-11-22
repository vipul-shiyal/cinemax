import React from "react";
import { Button } from "antd";
import "./NormalButton.scss";

const NormalButton = ({ value }) => {
  return (
    <Button type="primary" className="btn">
      {value}
    </Button>
  );
};

export default NormalButton;
