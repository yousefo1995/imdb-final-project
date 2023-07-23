import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import MovingSharpIcon from "@mui/icons-material/MovingSharp";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import MovieRatingComponent from "./MovieRatingComponent";
import { toIntegar, toKValue } from "../../../functions/numberFunctions";
import RatingModal from "./RatingModal";

const MovieRating = ({
  rate = "0.0",
  numberOfRates = "00k",
  popularity = "00",
  movieId,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const populartyKvalue = toKValue(popularity);
  const intRate = toIntegar(rate);
  const numberOfRatesKvalue = toKValue(numberOfRates);
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
            {intRate}{" "}
            <Typography fontSize="16px" color="Rgba(255,255,255,0.7)">
              /10
            </Typography>
          </Typography>
          <Typography
            color="Rgba(255,255,255,0.7)"
            fontSize="12px"
            marginLeft={{ xs: "4px" }}
          >
            {numberOfRatesKvalue}
          </Typography>
        </Stack>
      </MovieRatingComponent>

      {/* Your Rate */}
      <MovieRatingComponent label="YOUR RATING" onClick={handleOpenModal}>
        <StarBorderRoundedIcon color="info" fontSize="large" />
        <Typography color="info" fontSize="20px">
          Rate
        </Typography>
      </MovieRatingComponent>
      <RatingModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        movieId={movieId}
      />

      {/* POPULARITY */}
      <MovieRatingComponent label="POPULARITY">
        <MovingSharpIcon color="secondary" fontSize="large" />
        <Typography color="#fff" fontSize="20px">
          {populartyKvalue}
        </Typography>
      </MovieRatingComponent>
    </Stack>
  );
};

export default MovieRating;
