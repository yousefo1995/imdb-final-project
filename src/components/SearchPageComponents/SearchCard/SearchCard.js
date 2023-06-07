import React from "react";
import { Typography, Stack } from "@mui/material";
import { StyledCard, StyledCardContent, StyledCardMedia } from "./style";
const SearchCard = ({
  movieTitle = "movie title",
  releaseYear = "0000",
  titleType = "Title Type",
  image,
}) => {
  return (
    <Stack borderBottom="1px solid #E0E0E0">
      <StyledCard elevation={0}>
        <Stack flexDirection="row">
          <StyledCardMedia
            component="img"
            image={image}
            alt={movieTitle}
            className="card-image"
          />
        </Stack>
        <StyledCardContent>
          <Typography fontSize="16px" fontWeight="600">
            {movieTitle}
          </Typography>{" "}
          <Typography color="#757575" fontSize="14px" fontWeight="500">
            {releaseYear}
          </Typography>{" "}
          <Typography color="#757575" fontSize="14px" fontWeight="500">
            {titleType}
          </Typography>
        </StyledCardContent>
      </StyledCard>
    </Stack>
  );
};

export default SearchCard;
