import React from "react";
import Header from "../../components/Header/Header";
import "./Home.scss";
import HomeContent from "./HomeContent/HomeContent";
import LeftSections from "./LeftSections/LeftSections";
import RightSections from "./RightSections/RightSections";

const Home = () => {
  return (
    <main className="main-container">
      <Header />
      <div className="main-wrapper">
        <div className="left-section">
          <LeftSections />
        </div>
        <div className="main-section">
          <HomeContent />
        </div>
        <div className="right-section">
          <RightSections />
        </div>
      </div>
    </main>
  );
};

export default Home;
