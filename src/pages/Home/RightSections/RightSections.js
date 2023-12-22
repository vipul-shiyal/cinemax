import React from "react";
import MovieCard from "../../../components/MovieCard/MovieCard";
import "./RightSections.scss";

const tagList = [
  "Action",
  "Fantasy",
  "Comedy",
  "Sci-Fi",
  "Drama",
  "Romance",
  "Mystery",
  "Horror",
];

const RightSections = () => {
  return (
    <div className="right-section-container">
      <p className="right-section-lable">Top Movies</p>
      <MovieCard />
      <div>
        <button className="CTA">
          <div className="large-label-medium">See All</div>
        </button>
      </div>
      <div className="favorite-genres-contaier">
        <p className="text-wrapper">Favorites Genres</p>
        <div className="tag-container">
          {tagList &&
            tagList.map((tag, i) => {
              return (
                <div className="tag" key={i}>
                  <div className="tag-lable">{tag}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RightSections;
