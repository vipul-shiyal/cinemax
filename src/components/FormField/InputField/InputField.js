import React from "react";
import "./InputField.scss";

const InputField = ({ labelText, type, name, placeholder }) => {
  return (
    <>
      <p className="label-text">{labelText}</p>
      <input
        className="input-field"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputField;
