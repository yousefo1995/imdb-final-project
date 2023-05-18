import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@mui/material";

import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
function ArrowNext(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosRoundedIcon sx={{ color: "blue", fontSize: "30px" }} />,
    </div>
  );
}

function ArrowBack(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosRoundedIcon sx={{ color: "blue", fontSize: "30px" }} />,
    </div>
  );
}
const SimpleSlider = ({ children }) => {
  var settings = {
    dots: false,
    infinite: false, // for main slide true
    speed: 500,
    slidesToShow: 6, // main slider props 1 for all
    slidesToScroll: 4,
    initialSlide: 0,
    // rtl: true,
    draggable: true,
    centerMode: false,
    touchThreshold: 10,
    touchMove: false,
    // autoplay: true, // main slider props
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowBack />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.25,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.25,
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
