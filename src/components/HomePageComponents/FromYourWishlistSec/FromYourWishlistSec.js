import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import SimpleSlider from "../../SimpleSlider/SimpleSlider";
import Subtitle from "../../Core/Subtitle/Subtitle";
import MovieCard from "../../MovieCard/MovieCard/MovieCard";
import { arr } from "../Draft";

const FromYourWishlistSec = () => {
  return (
    <Stack paddingTop={2.5} marginTop={3} width="100%">
      <Subtitle minWidth="100%">From your Watchlist</Subtitle>
      <Typography marginTop={1} color="#B3B3B3">
        Movies and TV shows that you have watchlisted{" "}
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

export default FromYourWishlistSec;
