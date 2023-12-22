import React from "react";

import { images } from "../../../config/images";
import "./HomeContent.scss";
import { Button } from "antd";
import { ReactComponent as PlayIcon } from "../../../assets/images/playIcon.svg";
import { ReactComponent as SaveIcon } from "../../../assets/images/save.svg";
import pauseSVG from "../../../assets/Home/pause.svg";
import playSVG from "../../../assets/Home/play.svg";
import audioSVG from "../../../assets/Home/audio.svg";
import progressGroup from "../../../assets/Home/progressGroup.svg";
import arrowRightSVG from "../../../assets/Home/arrow-right.svg";

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

const HomeContent = () => {
  return (
    <div className="home-container">
      <div className="poster-container">
        <img
          src={images.posterImage}
          alt="movie poster"
          className="posterImage"
        />
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
      <div className="continue-watching">
        <b className="continue-watching1">Continue Watching</b>
        <div className="film-list">
          <div className="card-film">
            <img className="image-icon" alt="" src={images.continueWatching} />

            <div className="overlay" />
            <div className="video">
              <img className="audio-icon" alt="" src={audioSVG} />
              <img className="video-child" alt="" src={progressGroup} />
              <div className="h4">02 : 23 : 45</div>
              <div className="h41">1 : 05</div>
              <img className="pause-icon" alt="" src={pauseSVG} />
            </div>
            <div className="title-years">
              <b className="the-batman">The Batman</b>
              <div className="label-year">2022</div>
            </div>
          </div>
          <div className="card-film">
            <img className="image-icon" alt="" src={images.continueWatching2} />
            <div className="overlay1" />
            <div className="title-years1">
              <b className="the-batman">Moon Knight</b>
              <div className="label-year">2022</div>
            </div>
            <img className="pause-icon1" alt="" src={playSVG} />
          </div>
          <div className="overlay3" />
          <img className="arrow-right-icon" alt="" src={arrowRightSVG} />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
