import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import SimpleSlider from "../../SimpleSlider/SimpleSlider";
import Title from "../../Core/Title/Title";
import Subtitle from "../../Core/Subtitle/Subtitle";
import MovieCard from "../../MovieCard/MovieCard/MovieCard";
import { arr } from "../Draft";

const TopPicksSec = () => {
  return (
    <Stack marginTop={6} maxWidth="100%">
      <Title marginBottom={2.5}>What to watch</Title>
      <Subtitle>Top picks</Subtitle>
      <Typography marginTop={1} color="#B3B3B3">
        TV shows and movies just for you
      </Typography>
      <Box display="flex" flexDirection="column" width="100%" marginTop={2}>
        <SimpleSlider buttonHeight="60%">
          {arr.map((item) => (
            <MovieCard />
          ))}
        </SimpleSlider>
      </Box>
    </Stack>
  );
};

export default TopPicksSec;
