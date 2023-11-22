import React from "react";
import { Input } from "antd";

import "./InputFiled.scss";

const InputFiled = ({ placeholder, type, lableText, name }) => {
  return (
    <>
      {type === "password"} && (
      {/* <Form.Item name={name} label={lableText}> */}
      <Input.Password placeholder={placeholder} /> :{/* </Form.Item> */})
      {type === "input"} && ({/* <Form.Item name={name} label={lableText}> */}
      <Input placeholder={placeholder} />
      {/* </Form.Item> */})
    </>
  );
};

export default InputFiled;
