import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import SimpleSlider from "../../SimpleSlider/SimpleSlider";
import Title from "../../Core/Title/Title";
import Subtitle from "../../Core/Subtitle/Subtitle";
import TodayDate from "./TodayDate";
import AvatarCard from "../../AvatarCard/AvatarCard";
import { arr } from "../Draft";

const BornTodaySection = () => {
  return (
    <Stack marginTop={4} maxWidth="100%">
      <Title marginBottom={2.5}>More to explore</Title>
      <Subtitle>Born today</Subtitle>
      <Stack color="#B3B3B3" marginTop={1} flexDirection="row">
        <Typography marginRight={1}>People born on</Typography>
        <Typography>{TodayDate()}</Typography>
      </Stack>
      <Box display="flex" flexDirection="column" width="100%" marginTop={2}>
        <SimpleSlider
          slidesOnSm={2.4}
          slidesOnMd={3}
          slidesOnLg={5}
          slidesOnXl={6}
          slidesToShow={6}
          buttonHeight="50%"
        >
          {arr.map((item) => (
            <AvatarCard />
          ))}
        </SimpleSlider>
      </Box>
    </Stack>
  );
};

export default BornTodaySection;
