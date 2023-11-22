import React from "react";
import { Col, Row, Form, Input } from "antd";
import "./Register.scss";
import { images } from "../../config/images";
import NormalButton from "../../components/NormalButton/NormalButton";
import CarouselSlider from "../../components/CarouselSlider/CarouselSlider";

const Register = () => {
  const [form] = Form.useForm();
  return (
    <section className="register-section">
      <Row>
        <Col span={12} className="register-section-left">
          <CarouselSlider />
          <div className="register-img">
            {/* <img src={images.registerPage} alt="Register screen" /> */}
          </div>
        </Col>
        <Col span={12} className="register-section-right">
          <div className="right-container">
            <h2>CineMax</h2>
            <div className="register-form-container">
              <h2 className="register-title">Register</h2>
              <div className="register-form">
                <Form form={form} name="control-hooks" layout="vertical">
                  <Form.Item name="fullName" label="Full Name">
                    <Input placeholder="Enter your name" />
                  </Form.Item>
                  <Form.Item name="email" label="Email Address">
                    <Input placeholder="Enter your email Address" />
                  </Form.Item>
                  <Form.Item name="password" label="Password">
                    <Input.Password placeholder="Enter your password" />
                  </Form.Item>
                  <Form.Item name="confirmPassword" label="Confirm Password">
                    <Input.Password placeholder="Enter your password" />
                  </Form.Item>

                  <Form.Item>
                    <NormalButton value="Register" />
                  </Form.Item>
                </Form>
                <p className="accoutn-text">
                  Already have an account?
                  <a href="/login" className="login-link">
                    Login
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

export default Register;
