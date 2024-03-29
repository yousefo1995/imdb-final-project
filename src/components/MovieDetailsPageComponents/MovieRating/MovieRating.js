import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import MovingSharpIcon from "@mui/icons-material/MovingSharp";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import MovieRatingComponent from "./MovieRatingComponent";
import { toIntegar, toKValue } from "../../../functions/numberFunctions";
import RatingModal from "./RatingModal";
import { useParams } from "react-router-dom";

const MovieRating = ({
  rate = "0.0",
  numberOfRates = "00k",
  popularity = "00",
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [yourRates, setYourRates] = useState(null);
  const { movieId } = useParams();
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const populartyKvalue = toKValue(popularity);
  const intRate = toIntegar(rate);
  const numberOfRatesKvalue = toKValue(numberOfRates);
  const updateYourRates = (data) => {
    setYourRates(data);
  };

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
      {yourRates ? (
        <MovieRatingComponent label="YOUR RATING" onClick={handleOpenModal}>
          <StarRoundedIcon color="info" fontSize="large" />
          <Typography color="info" fontSize="20px">
            {yourRates?.rateValue}/10
          </Typography>
        </MovieRatingComponent>
      ) : (
        <MovieRatingComponent label="YOUR RATING" onClick={handleOpenModal}>
          <StarBorderRoundedIcon color="info" fontSize="large" />
          <Typography color="info" fontSize="20px">
            Rate
          </Typography>
        </MovieRatingComponent>
      )}
      <RatingModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        updateYourRates={updateYourRates}
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
