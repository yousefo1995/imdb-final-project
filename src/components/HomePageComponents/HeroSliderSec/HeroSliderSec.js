import React from "react";
import { Stack } from "@mui/material";
import SimpleSlider from "../../SimpleSlider/SimpleSlider";
import HeaderCard from "../../HeaderCard/HeaderCard";
import { arr } from "../Draft";

const HeroSliderSec = () => {
  return (
    <Stack
      // maxWidth={{ md: "100%", lg: "678px", xl: "848px" }}
      maxWidth={{ lg: "65%" }}
      width="100%"
    >
      <Stack maxWidth="1004px">
        <SimpleSlider
          autoplay={true}
          infinite={true}
          slidesToShow={1}
          slidesScroll={1}
          slidesOnSm={1}
          slidesOnMd={1}
          slidesOnLg={1}
          slidesOnXl={1}
          slidesScrollOnSm={1}
          slidesScrollOnMd={1}
          slidesScrollOnLg={1}
          slidesScrollOnXl={1}
          ButtonsDisplay={{ xs: "none", md: "block" }}
          buttonHeight={{ sm: "45%", md: "50%", lg: "55%", xl: "65%" }}
        >
          {arr.map((item) => (
            <HeaderCard />
          ))}
        </SimpleSlider>
      </Stack>
    </Stack>
  );
};

export default HeroSliderSec;
