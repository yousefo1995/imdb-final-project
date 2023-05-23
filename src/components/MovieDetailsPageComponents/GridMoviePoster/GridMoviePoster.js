import React from "react";
import CardMedia from "@mui/material/CardMedia";
import { Card, CardActionArea } from "@mui/material";
import { StyledIconButtonIMDB } from "../../MovieCard/MovieCard/style";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { GridMoviePosterStyle } from "./style";
const GridMoviePoster = ({
  image = "https://picsum.photos/id/870/200/300?grayscale&blur=2",
}) => {
  return (
    <Card sx={GridMoviePosterStyle}>
      <CardActionArea disableRipple>
        <CardMedia component="img" image={image} alt="green iguana" />
        {/* <img src={image} alt="" width="100%" /> */}
        <StyledIconButtonIMDB>
          <BookmarkAddIcon />
        </StyledIconButtonIMDB>
      </CardActionArea>
    </Card>
  );
};

export default GridMoviePoster;
