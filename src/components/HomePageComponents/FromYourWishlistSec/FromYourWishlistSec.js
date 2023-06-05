import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import SimpleSlider from "../../SimpleSlider/SimpleSlider";
import Subtitle from "../../Core/Subtitle/Subtitle";
import MovieCard from "../../MovieCard/MovieCard/MovieCard";
import { useContext } from "react";
import { WatchListContext } from "../../../WatchListContext";
import { useNavigate } from "react-router";

const FromYourWishlistSec = () => {
  const { watchList } = useContext(WatchListContext);
  const navigate = useNavigate();

  return (
    <Stack paddingTop={2.5} marginTop={3} width="100%">
      <Subtitle onClick={() => navigate("/wlist")} minWidth="100%">
        From your Watchlist
      </Subtitle>
      <Typography marginTop={1} color="#B3B3B3">
        Movies and TV shows that you have watchlisted{" "}
      </Typography>
      <Box display="flex" flexDirection="column" width="100%" marginTop={2}>
        <SimpleSlider buttonHeight="60%">
          {watchList.map((item) => {
            const imagePath = item.poster_path;
            const imageUrl = `https://image.tmdb.org/t/p/w500${imagePath}`;
            return (
              <Stack key={item.id}>
                <MovieCard
                  title={item.title}
                  rate={item.vote_average}
                  image={imageUrl}
                  movieId={item.id}
                  movieData={item}
                  inWatchList={true}
                />
              </Stack>
            );
          })}
        </SimpleSlider>
      </Box>
    </Stack>
  );
};

export default FromYourWishlistSec;
