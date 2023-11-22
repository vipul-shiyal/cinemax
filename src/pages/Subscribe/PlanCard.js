import React from "react";
import "./PlanCard.scss";
import checkPng from "../../assets/images/check.png";
import checkDark from "../../assets/images/check-dark.png";
import checkBlack from "../../assets/images/check-black.png";

const PlanCard = () => {
  // const PlanCardBox = () => {
  //   return (
  //     <div className="plan-card-container">
  //       <p>Free Trial</p>
  //     </div>
  //   );
  // };

  return (
    <div className="plancard-wrapper">
      <div className="plan-card-container">
        <p>Free Trial</p>
        <div className="plan-price">
          <span className="price-text">$0</span>
          <span className="month-text">/Month</span>
        </div>
        <div className="divider">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="290"
            height="2"
            viewBox="0 0 290 2"
            fill="none"
          >
            <path d="M0 1H290" stroke="#29282F" />
          </svg>
        </div>
        <div className="plan-text-container">
          <div className="plan-text">
            <img src={checkPng} />
            Streaming in high quality
          </div>
          <div className="plan-text">
            <img src={checkPng} />
            With the best audio quality
          </div>
          <div className="plan-text plan-text-gray">
            <img src={checkDark} />
            Stream on multiple devices
          </div>
          <div className="plan-text plan-text-gray">
            <img src={checkDark} />
            Ad-free viewing experience
          </div>
          <div className="plan-text plan-text-gray">
            <img src={checkDark} />
            Download to watch later
          </div>
        </div>
        <button className="button">Get Started</button>
      </div>
      <div className="plan-card-container monthly-plan">
        <p>Monthly Subscription</p>
        <div className="plan-price">
          <span className="price-text">$4.99</span>
          <span className="month-text">/Month</span>
        </div>
        <div className="divider">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="290"
            height="2"
            viewBox="0 0 290 2"
            fill="none"
          >
            <path d="M0 1H290" stroke="#29282F" />
          </svg>
        </div>
        <div className="plan-text-container">
          <div className="plan-text">
            <img src={checkBlack} />
            Streaming in high quality
          </div>
          <div className="plan-text">
            <img src={checkBlack} />
            With the best audio quality
          </div>
          <div className="plan-text ">
            <img src={checkBlack} />
            Stream on multiple devices
          </div>
          <div className="plan-text ">
            <img src={checkBlack} />
            Ad-free viewing experience
          </div>
          <div className="plan-text ">
            <img src={checkBlack} />
            Download to watch later
          </div>
        </div>
        <button className="button button-monthly">Get Started</button>
      </div>
      <div className="plan-card-container">
        <p>Yearly Subscription</p>
        <div className="plan-price">
          <span className="price-text">$49.99</span>
          <span className="month-text">/Month</span>
        </div>
        <div className="divider">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="290"
            height="2"
            viewBox="0 0 290 2"
            fill="none"
          >
            <path d="M0 1H290" stroke="#29282F" />
          </svg>
        </div>
        <div className="plan-text-container">
          <div className="plan-text">
            <img src={checkPng} />
            Streaming in high quality
          </div>
          <div className="plan-text">
            <img src={checkPng} />
            With the best audio quality
          </div>
          <div className="plan-text">
            <img src={checkPng} />
            Stream on multiple devices
          </div>
          <div className="plan-text">
            <img src={checkPng} />
            Ad-free viewing experience
          </div>
          <div className="plan-text">
            <img src={checkPng} />
            Download to watch later
          </div>
        </div>
        <button className="button">Get Started</button>
      </div>
    </div>
  );
};

export default PlanCard;
