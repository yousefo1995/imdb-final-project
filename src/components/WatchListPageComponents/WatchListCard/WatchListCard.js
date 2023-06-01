import React from "react";
import { Typography, Stack, Divider } from "@mui/material";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import {
  StyledCard,
  StyledCardContent,
  StyledCardMedia,
  dividerStyles,
} from "./Style";

const WatchListCard = ({
  showGrid = false, //list or grid
  movieTitle = "Movie Title",
  topActors = "name name ",
  image = "https://www.nicepng.com/png/detail/762-7623138_icon-movie-play-card-png-and-vector-image.png",
  year = "0000",
  duration = "0h 0m",
  category = "category",
  rate = "0.0",
  description = "Movie description",
}) => {
  return (
    <Stack borderBottom="1px solid #E0E0E0" paddingY={1.25}>
      <StyledCard elevation={0} showGrid={showGrid}>
        <Stack flexDirection={showGrid ? "column" : "row"}>
          <StyledCardMedia
            component="img"
            image={image}
            alt={movieTitle}
            className="card-image"
            showGrid={showGrid}
          />
        </Stack>
        <StyledCardContent showGrid={showGrid}>
          <Typography fontSize="17px" color="#136CB2" fontWeight="400">
            {movieTitle}
          </Typography>{" "}
          {!showGrid && (
            <Stack flexDirection="row">
              <Typography fontSize="12px" fontWeight="400" color="#666666">
                {year}
              </Typography>
              <Divider orientation="vertical" flexItem sx={dividerStyles} />
              <Typography fontSize="12px" fontWeight="400" color="#666666">
                {duration}
              </Typography>
              <Divider orientation="vertical" flexItem sx={dividerStyles} />
              <Typography fontSize="12px" fontWeight="400" color="#666666">
                {category}
              </Typography>
            </Stack>
          )}
          <Stack flexDirection="row">
            <StarRateRoundedIcon fontSize="12px" color="secondary" />
            <Typography
              fontSize="13px"
              fontWeight="400"
              color="#333333"
              marginRight={1.25}
            >
              {rate}
            </Typography>{" "}
            <StarOutlineRoundedIcon fontSize="12px" color="info" />
            <Typography fontSize="11px" fontWeight="400" color="#136CB2">
              Rate
            </Typography>
            <Typography
              marginLeft={0.5}
              fontSize="12px"
              fontWeight="400"
              color="#666666"
            >
              {year}
            </Typography>
          </Stack>
          {!showGrid && (
            <Stack>
              <Stack flexDirection="row">
                {/* use map */}
                <Typography fontSize="11px" fontWeight="400" color="#136CB2">
                  {topActors}
                </Typography>
                <Divider orientation="vertical" sx={dividerStyles} />
              </Stack>
              <Typography fontSize="13px" fontWeight="400" color="#333333">
                {description}
              </Typography>{" "}
            </Stack>
          )}
        </StyledCardContent>
      </StyledCard>
    </Stack>
  );
};

export default WatchListCard;
