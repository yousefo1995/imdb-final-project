import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@mui/material";

import { ArrowBack, ArrowNext } from "./Arrows";

const SimpleSlider = ({ children, showOneSlide }) => {
  var settings = {
    dots: false,
    infinite: showOneSlide ? true : false, // for main slide true
    speed: 500,
    slidesToShow: showOneSlide ? 1 : 6,
    slidesToScroll: showOneSlide ? 1 : 4,
    initialSlide: 0,
    // rtl: true,
    draggable: true,
    centerMode: false,
    touchThreshold: 10,
    touchMove: false,
    autoplay: showOneSlide ? true : false,
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
    <Container maxWidth="lg">
      <h2> Single Item</h2>
      <Slider {...settings}>{children}</Slider>
    </Container>
  );
};

export default SimpleSlider;
