import React from "react";
import CardMedia from "@mui/material/CardMedia";
import { Card, CardActionArea, Box, Typography } from "@mui/material";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import { GridMoviePosterStyle } from "./style";
import IconButtonIMDB from "../../Core/IconButtonIMDB/IconButtonIMDB";
import WishBtnCards from "../../MovieCard/WishlistBtn/wishBtnCards";
const GridMoviePoster = ({
  imagePath,
  showWishlistBtn = true,
  showPlayTrailerBtn = true,
}) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${imagePath}`;
  return (
    <Card sx={GridMoviePosterStyle}>
      <CardActionArea disableRipple>
        <CardMedia component="img" image={imageUrl} alt="green iguana" />
        {showWishlistBtn && <WishBtnCards width="44px" height="58px" />}
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
