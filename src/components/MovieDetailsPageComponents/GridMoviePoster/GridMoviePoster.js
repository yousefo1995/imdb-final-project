import React from "react";
import CardMedia from "@mui/material/CardMedia";
import { Card, CardActionArea, Box, Typography } from "@mui/material";
import { StyledIconButtonIMDB } from "../../MovieCard/MovieCard/style";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import { GridMoviePosterStyle } from "./style";
import IconButtonIMDB from "../../Core/IconButtonIMDB/IconButtonIMDB";

const GridMoviePoster = ({
  image = "https://picsum.photos/id/870/200/300?grayscale&blur=2",
  showWishlistBtn = true,
  showPlayTrailerBtn = true,
}) => {
  return (
    <Card sx={GridMoviePosterStyle}>
      <CardActionArea disableRipple>
        <CardMedia component="img" image={image} alt="green iguana" />
        {showWishlistBtn && (
          <StyledIconButtonIMDB>
            <BookmarkAddIcon />
          </StyledIconButtonIMDB>
        )}
        {showPlayTrailerBtn && (
          <Box
            display="flex"
            alignItems="center"
            position="absolute"
            bottom="0"
            left="0"
            marginLeft={2}
            marginBottom={1}
          >
            <IconButtonIMDB iconColor="#FFF">
              <PlayCircleOutlineRoundedIcon />
            </IconButtonIMDB>
            <Typography variant="h2" color="#FFF">
              Play Trailer
            </Typography>
          </Box>
        )}
      </CardActionArea>
    </Card>
  );
};

export default GridMoviePoster;