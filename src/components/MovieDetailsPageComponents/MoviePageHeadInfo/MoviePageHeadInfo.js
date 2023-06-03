import React from "react";
import { Stack, Box, Typography, IconButton } from "@mui/material";
import MovieRating from "../MovieRating/MovieRating";
import StyledCardButton from "../../MovieCard/StyledCardButton/StyledCardButton";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ShareIcon from "@mui/icons-material/Share";
import IconButtonIMDB from "../../Core/IconButtonIMDB/IconButtonIMDB";
import Subtitle from "../../Core/Subtitle/Subtitle";
const MoviePageHeadInfo = ({
  MovieName = "Movie Name",
  year = "2000",
  showType = "Tv Show",
  duration = "00",
}) => {
  return (
    <Stack>
      <Stack width="100%" flexDirection="row" justifyContent="space-between">
        <Subtitle fontSize="16px" showStartIcon={false}>
          Duration <Typography marginLeft={1}>{duration}</Typography>
        </Subtitle>
        <Stack flexDirection="row">
          <StyledCardButton
            color="#FFF"
            width="124px"
            bg="#212121"
            hoverbg="#2C2C2C"
          >
            <CategoryOutlinedIcon
              sx={{ marginRight: "4px" }}
              color="#FFF"
              fontSize="medium"
            />
            All topics
          </StyledCardButton>
          <IconButtonIMDB
            iconSize="24px"
            iconColor="#FFF"
            width="32px"
            bg="#212121"
            hoverBg="#2C2C2C"
          >
            <ShareIcon />
          </IconButtonIMDB>
        </Stack>
      </Stack>
      <Stack
        width="100%"
        flexDirection="row"
        justifyContent="space-between"
        marginBottom={1}
        alignItems="center"
      >
        <Stack>
          <Typography fontSize="48px" color="#fff" marginBottom="-8px">
            {MovieName}
          </Typography>
          <Stack flexDirection="row">
            <Typography color="#D3D3D3" fontSize="14px" marginRight={2}>
              {showType}
            </Typography>
            <Typography color="#D3D3D3" fontSize="14px">
              {year}
            </Typography>
          </Stack>
        </Stack>
        <Box display={{ xs: "none", lg: "block" }}>
          <MovieRating />
        </Box>
      </Stack>
    </Stack>
  );
};

export default MoviePageHeadInfo;