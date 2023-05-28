import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, BackArrow } from "./Arrows";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import "./style.css";

const SimpleSlider = ({
  children,
  infinite = false,
  autoplay = false,
  slidesToShow = 6,
  slidesOnSm = 2.25,
  slidesOnMd = 2.25,
  slidesOnLg = 4.5,
  slidesScroll = 4,
  slidesScrollOnSm = 1, // 1 for all
  slidesScrollOnMd = 2,
  slidesScrollOnLg = 3,
  buttonHeight = "250px",
  ButtonsDisplay = { md: "none", lg: "block" },
}) => {
  var settings = {
    dots: false,
    infinite: infinite,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesScroll,
    initialSlide: 0,
    draggable: true,
    centerMode: false,
    touchThreshold: 10,
    touchMove: true,
    autoplay: autoplay,
    nextArrow: (
      <NextArrow
        buttonHeight={buttonHeight}
        ButtonsDisplay={ButtonsDisplay}
        slidesToShow={slidesToShow}
      >
        <ArrowForwardIosRoundedIcon />
      </NextArrow>
    ),
    prevArrow: (
      <BackArrow buttonHeight={buttonHeight} ButtonsDisplay={ButtonsDisplay}>
        <ArrowBackIosRoundedIcon />
      </BackArrow>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesOnLg,
          slidesToScroll: slidesScrollOnLg,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: slidesOnMd,
          slidesToScroll: slidesScrollOnMd,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: slidesOnSm,
          slidesToScroll: slidesScrollOnSm,
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
