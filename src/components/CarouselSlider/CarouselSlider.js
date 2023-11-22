import React from "react";
import { Carousel } from "antd";
import "./CarouselSlider.scss";

const CarouselSlider = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel>
        <div className="carousel">
          <p className="carosel-content">
            The biggest international and local film streaming
          </p>
          <p>
            Semper in cursus magna et eu varius nunc adipiscing. Elementum
            justo, laoreet id sem semper parturient.
          </p>
        </div>
        <div className="carousel">
          <h2 className="carosel-content">
            Offers ad-free viewing of high quality
          </h2>
          <p>
            Semper in cursus magna et eu varius nunc adipiscing. Elementum
            justo, laoreet id sem semper parturient.
          </p>
        </div>
        <div className="carousel">
          <h2 className="carosel-content">
            Offers ad-free viewing of high quality
          </h2>
          <p>
            Semper in cursus magna et eu varius nunc adipiscing. Elementum
            justo, laoreet id sem semper parturient.{" "}
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
