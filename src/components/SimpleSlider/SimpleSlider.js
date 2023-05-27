import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowNext, ArrowBack } from "./Arrows";
import "./style.css";

// for main slide (infinit , showOneSlide and autoplay )= true

const SimpleSlider = ({ children, showOneSlide, infinite, autoplay }) => {
  var settings = {
    dots: false,
    infinite: infinite | false,
    speed: 500,
    slidesToShow: showOneSlide ? 1 : 6,
    slidesToScroll: showOneSlide ? 1 : 4,
    initialSlide: 0,
    // rtl: true,
    draggable: true,
    centerMode: false,
    touchThreshold: 10,
    touchMove: true,
    autoplay: autoplay | false,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowBack />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: showOneSlide ? 1 : 4.5,
          slidesToScroll: showOneSlide ? 1 : 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: showOneSlide ? 1 : 2.25,
          slidesToScroll: showOneSlide ? 1 : 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: showOneSlide ? 1 : 2.25,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings} className="slider-container">
        {children}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
