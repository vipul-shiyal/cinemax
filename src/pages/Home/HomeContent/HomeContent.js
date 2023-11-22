import React from "react";

import { images } from "../../../config/images";
import "./HomeContent.scss";
import { Button } from "antd";
import { ReactComponent as PlayIcon } from "../../../assets/images/playIcon.svg";
import { ReactComponent as SaveIcon } from "../../../assets/images/save.svg";

const cinemaCompany = [
  {
    companyLogo: images.disney,
  },
  {
    companyLogo: images.nationalgeographic,
  },
  {
    companyLogo: images.starWars,
  },
  {
    companyLogo: images.marvel,
  },
];
const continueWatching = [
  {
    moviePoster: images.continueWatching,
  },
  {
    moviePoster: images.continueWatching2,
  },
];

const HomeContent = () => {
  return (
    <div className="home-container">
      {/* <div className="parent"> */}
      <div className="poster-container">
        {/* <img
          src={images.posterImage}
          alt="movie poster"
          className="posterImage"
        /> */}
        <div className="poster-info-box">
          <span className="show-tag">Series</span>
          <h5 className="show-title"> MS. Marvel</h5>
          <ul className="show-desc-point">
            <li>1 Season</li>
            <li>6 Episodes</li>
            <li>Superhero</li>
            <li>Marvel</li>
          </ul>
          <div className="watch-info">
            <Button type="primary" className="watch-button">
              <PlayIcon />
              Watch Thriller
            </Button>
            <div className="watch-list-box">
              <SaveIcon />
              <span className="watch-list">Add Watchlist</span>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="componay-logo-section">
        {cinemaCompany.map((company, i) => (
          <div className="logo-card" key={i}>
            <div className="">
              <img
                src={company.companyLogo}
                alt="logo"
                className={i === 3 ? "img-logo" : ""}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="continue-wationg-sections">
        <h2>Continue Watching</h2>

        <div className="continue-watching-card">
          {continueWatching.map((image, i) => (
            <div key={i}>
              <img src={image.moviePoster} alt="continue watching" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
