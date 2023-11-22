import React from "react";
import InputField from "../../components/FormField/InputField/InputField";
import NormalButton from "../../components/NormalButton/NormalButton";
import "./ResetPassword.scss";

const ResetPassword = () => {
  return (
    <main className="reset-password-section">
      <header className="header-title">
        <p>CineMax</p>
      </header>
      <div className="reset-password-container">
        <div className="form-container">
          <h2>Reset Password</h2>
          <p className="sub-headig">Recover your account password</p>
          <div className="form-field">
            {/* <p className="label-text">Email Address</p>
            <input
              className="input-field"
              type="email"
              name="email"
              placeholder="Enter your email address"
            /> */}
            <InputField
              labelText="Email Address"
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
            <div className="reset-button">
              <NormalButton value="Reset Password" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResetPassword;
