import React from "react";
import PlanCard from "./PlanCard";
import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <section className="subscribe-section">
      <div className="subscibe-title">CineMax</div>
      <div className="subscribe-content">
        <p className="access-title">Access Premium</p>
        <p className="easy-text">It’s easy to get started</p>
        <p className="plan-text">
          Choose the best plan to enjoy the best movies and series
        </p>
      </div>
      <div>
        <PlanCard />
      </div>
    </section>
  );
};

export default Subscribe;
