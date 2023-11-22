import React from "react";
import { Col, Row, Form, Input } from "antd";
import "./Login.scss";
import { images } from "../../config/images";
import googleIcon from "../../assets/images/googleIcon.svg";
import facebookIcon from "../../assets/images/facebookIcon.svg";
import SocialButton from "../../components/SocialButton/SocialButton";
import NormalButton from "../../components/NormalButton/NormalButton";

import CarouselSlider from "../../components/CarouselSlider/CarouselSlider";

const Login = () => {
  const [form] = Form.useForm();
  return (
    <section className="login-section">
      {/* <div className="left-section">
        <div className="carousel-slider">
          <p>text tet</p>
        </div>
        <div className="login-img">
          <img src={images.loginPage} alt="login screen" />
        </div>
      </div>
      <div className="right-section"> */}
      {/* <div className="right-container"> */}
      {/* <h2>CineMax</h2>
        <div className="login-form-container">
          <h2 className="login-title">
            <span>Hey there,</span>
            <spa>welcome back</spa>
          </h2>
          <div className="social-login">
            <SocialButton value="Login with Google" imgURL={googleIcon} />
            <SocialButton value="Login with Facebook" imgURL={facebookIcon} />
          </div>
          <div className="divider">Or login with</div>
          <div className="login-form">
            <Form form={form} name="control-hooks" layout="vertical">
              <Form.Item name="fullName" label="Full Name">
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Form.Item name="password" label="Password">
                <Input.Password placeholder="Enter your password" />
              </Form.Item>
              <a href="#" className="forgot-link">
                Forgot Password
              </a>
              <Form.Item>
                <NormalButton value="Login" />
              </Form.Item>
            </Form>
            <p className="accoutn-text">
              Don’t have an account?
              <a href="#" className="register-link">
                Register
              </a>
            </p>
          </div>
        </div> */}
      {/* </div> */}
      {/* </div> */}

      <Row>
        <Col span={12} className="login-section-left">
          <CarouselSlider />
          <div className="login-img">
            {/* <img src={images.loginPage} alt="login screen" /> */}
          </div>
        </Col>
        <Col span={12} className="login-section-right">
          <div className="right-container">
            <h2>CineMax</h2>
            <div className="login-form-container">
              <h2 className="login-title">
                <span>Hey there,</span>
                <spa>welcome back</spa>
              </h2>
              <div className="social-login">
                <SocialButton value="Login with Google" imgURL={googleIcon} />
                <SocialButton
                  value="Login with Facebook"
                  imgURL={facebookIcon}
                />
              </div>
              <div className="divider">Or login with</div>
              <div className="login-form">
                <Form form={form} name="control-hooks" layout="vertical">
                  <Form.Item name="fullName" label="Full Name">
                    <Input placeholder="Enter your name" />
                  </Form.Item>
                  <Form.Item name="password" label="Password">
                    <Input.Password placeholder="Enter your password" />
                  </Form.Item>
                  <a href="#" className="forgot-link">
                    Forgot Password
                  </a>
                  <Form.Item>
                    <NormalButton value="Login" />
                  </Form.Item>
                </Form>
                <p className="accoutn-text">
                  Don’t have an account?
                  <a href="/register" className="register-link">
                    Register
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Login;
