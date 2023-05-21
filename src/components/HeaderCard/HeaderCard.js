import React from "react";
import { CardActionArea, Typography, CardMedia, Box } from "@mui/material";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import { Stack } from "@mui/system";

import MovieCard from "../MovieCard/MovieCard/MovieCard";
import Subtitle from "../Core/Subtitle/Subtitle";
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

//  style card when hover : icon color
// styled card ...res
//props for card also watch trailer link
// width 100 % color rgb (0,0,0,0.75)

export default HeaderCard;
