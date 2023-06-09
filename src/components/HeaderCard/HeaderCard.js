import React from "react";
import { CardActionArea, CardMedia, Box, Stack } from "@mui/material";

import MovieCard from "../MovieCard/MovieCard/MovieCard";
import StyledHeaderCard from "./StyledHeaderCard/StyledHeaderCard";
import HeaderPlayCard from "./HeaderPlayCard/HeaderPlayCard";
import { useNavigate } from "react-router";

const HeaderCard = ({
  title = "title",
  time = "0:00",
  backdropImage = "https://picsum.photos/200",
  posterImage,
  movieId,
  movieData,
}) => {
  const navigate = useNavigate();
  const cardHandler = () => {
    navigate(`/movie/${movieId}`);
  };
  return (
    <StyledHeaderCard>
      <CardActionArea disableRipple onClick={cardHandler}>
        <CardMedia
          component="img"
          image={backdropImage}
          className="card-image"
          alt="movie poster"
          sx={{
            maxHeight: { xs: "35vH", sm: "40vH", md: "60vH", lg: "100vh" },
          }}
        />
      </CardActionArea>

      <Stack
        flexDirection="row"
        mb="0"
        position="absolute"
        bottom="0"
        alignItems="end"
        height="88px"
        bgcolor="rgb(0,0,0,0.75)"
        paddingTop="16px"
        className="info-box"
      >
        <Stack paddingLeft="16px">
          <MovieCard
            image={posterImage}
            showFullCard={false}
            movieId={movieId}
            movieData={movieData}
          />
        </Stack>
        <HeaderPlayCard title={title} time={time} />
      </Stack>
    </StyledHeaderCard>
  );
};

export default HeaderCard;
