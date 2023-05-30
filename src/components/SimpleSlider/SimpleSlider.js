import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Arrow } from "./Arrows";
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
  slidesOnXl = 6,
  slidesScroll = 6,
  slidesScrollOnSm = 1, // 1 for all
  slidesScrollOnMd = 2,
  slidesScrollOnLg = 4,
  slidesScrollOnXl = 6,

  buttonHeight = "250px",
  ButtonsDisplay = { xs: "none", md: "none", lg: "block" },
  currentSlide,
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
      <Arrow
        buttonHeight={buttonHeight}
        ButtonsDisplay={ButtonsDisplay}
        slidesToShow={slidesToShow}
        isLeft={false}
      >
        <ArrowForwardIosRoundedIcon />
      </Arrow>
    ),
    prevArrow: (
      <Arrow buttonHeight={buttonHeight} ButtonsDisplay={ButtonsDisplay}>
        <ArrowBackIosRoundedIcon />
      </Arrow>
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: slidesOnXl,
          slidesToScroll: slidesScrollOnXl,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesOnLg,
          slidesToScroll: slidesScrollOnLg,
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
