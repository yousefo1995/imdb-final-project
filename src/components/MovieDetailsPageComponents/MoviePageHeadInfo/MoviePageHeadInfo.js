import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import MovieRating from "../MovieRating/MovieRating";
const MoviePageHeadInfo = ({
  MovieName = "Movie Name",
  year = "2000",
  showType = "Tv Show",
}) => {
  return (
    <Stack>
      {/* <Stack
        width="100%"
        flexDirection="row"
        justifyContent="space-between"
        bgcolor="yellow"
        height="60px"
      >
        ffffffffffffffffffffffffffffff
      </Stack> */}
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
