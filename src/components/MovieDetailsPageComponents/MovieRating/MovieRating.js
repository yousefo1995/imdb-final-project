import React from "react";
import StyledCardButton from "../../MovieCard/StyledCardButton/StyledCardButton";
import { Stack, Typography, Box } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import MovingSharpIcon from "@mui/icons-material/MovingSharp";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import MovieRatingComponent from "./MovieRatingComponent";

const MovieRating = ({
  rate = "0.0",
  numberOfRates = "00k",
  popularity = "00",
}) => {
  return (
    <Stack flexDirection="row">
      {/* IMDB Rate */}
      <MovieRatingComponent label="IMDb RATING">
        <StarRateRoundedIcon color="secondary" fontSize="large" />
        <Stack flexDirection={{ xs: "row", lg: "column" }} alignItems="center">
          <Typography
            color="#fff"
            fontSize="20px"
            display="flex"
            alignItems="center"
          >
            {rate}{" "}
            <Typography fontSize="16px" color="Rgba(255,255,255,0.7)">
              /10
            </Typography>
          </Typography>
          <Typography
            color="Rgba(255,255,255,0.7)"
            fontSize="12px"
            marginLeft={{ xs: "4px" }}
          >
            {numberOfRates}
          </Typography>
        </Stack>
      </MovieRatingComponent>

      {/* Your Rate */}
      <MovieRatingComponent label="YOUR RATING">
        <StarBorderRoundedIcon color="info" fontSize="large" />
        <Typography color="info" fontSize="20px">
          Rate
        </Typography>
      </MovieRatingComponent>

      {/* POPULARITY */}
      <MovieRatingComponent label="POPULARITY">
        <MovingSharpIcon color="secondary" fontSize="large" />
        <Typography color="#fff" fontSize="20px">
          {popularity}
        </Typography>
      </MovieRatingComponent>
    </Stack>
  );
};

export default MovieRating;
