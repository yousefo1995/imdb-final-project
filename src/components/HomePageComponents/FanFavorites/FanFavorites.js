import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import SimpleSlider from "../../SimpleSlider/SimpleSlider";
import Subtitle from "../../Core/Subtitle/Subtitle";
import MovieCard from "../../MovieCard/MovieCard/MovieCard";
import { arr } from "../Draft";

const FanFavorites = () => {
  return (
    <Stack paddingTop={2.5} marginTop={3} maxWidth="100%">
      <Subtitle minWidth="100%">Fan favorites</Subtitle>
      <Typography marginTop={1} color="#B3B3B3">
        This week's top TV and movies{" "}
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

export default FanFavorites;
