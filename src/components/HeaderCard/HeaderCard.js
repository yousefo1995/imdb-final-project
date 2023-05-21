import React from "react";
import { CardActionArea, CardMedia, Box } from "@mui/material";

import MovieCard from "../MovieCard/MovieCard/MovieCard";
import StyledHeaderCard from "./StyledHeaderCard/StyledHeaderCard";
import HeaderPlayCard from "./HeaderPlayCard/HeaderPlayCard";

const HeaderCard = ({
  title = "title",
  time = "0:00",
  image = "https://picsum.photos/id/870/200/300?grayscale&blur=2",
}) => {
  return (
    <StyledHeaderCard>
      <CardActionArea disableRipple>
        <CardMedia
          component="img"
          image={image}
          className="card-image"
          alt="movie poster"
        />
      </CardActionArea>

      <Box
        display="flex"
        mb="0"
        position="absolute"
        bottom="0"
        alignItems="end"
        height="88px"
        bgcolor="rgb(0,0,0,0.75)"
        paddingTop="16px"
        className="info-box"
      >
        <Box paddingLeft="16px">
          <MovieCard showFullCard={false} />
        </Box>
        <HeaderPlayCard title={title} time={time} />
      </Box>
    </StyledHeaderCard>
  );
};

export default HeaderCard;
