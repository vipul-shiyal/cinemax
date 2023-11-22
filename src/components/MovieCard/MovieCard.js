import React from "react";
import { images } from "../../config/images";
import "./MovieCard.scss";

const MovieCard = () => {
  const moviesData = [
    {
      tag: "PG-13",
      title: "The Shawshank Redemption (1994)",
      category: "Drama",
      rating: "9.2",
      poster: images.moviePosterOne,
    },
    {
      tag: "PG-13",
      title: "The Godfather",
      category: "Crime • Drama",
      rating: "9.2",
      poster: images.moviePosterTwo,
    },
    {
      tag: "PG-13",
      title: "The Dark Knight (2008)",
      category: "Action • Crime",
      rating: "9.0",
      poster: images.moviePosterThree,
    },
  ];
  return (
    <>
      {moviesData &&
        moviesData.map((movie, i) => (
          <div className="movie-card-container" key={i}>
            <div className="movie-card-wrapper">
              <img
                className="movie-image"
                src={movie.poster}
                alt="movie-show"
              />
              <div className="movie-info">
                <p className="movie-tag">{movie.tag}</p>
                <p className="movie-title">{movie.title}</p>
                <p className="movie-category">
                  <img src={images.filmroll} alt="film roll" />
                  <span>{movie.category}</span>
                </p>
                <p className="movie-rating">
                  <img src={images.star} alt="rating star" />
                  {movie.rating}
                </p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default MovieCard;
