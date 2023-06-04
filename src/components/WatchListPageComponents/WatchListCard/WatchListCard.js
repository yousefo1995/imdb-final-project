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
import {
  stringSlice,
  wordsUpperCase,
} from "../../../functions/stringFunctions";
import { toIntegar, toKValue } from "../../../functions/numberFunctions";
import { useNavigate } from "react-router";

const WatchListCard = ({
  showGrid = false, //list or grid
  movieTitle = "Movie Title",
  topActors = "Actors ",
  image = "",
  year = "0000",
  duration = "0h 0m",
  language = "language",
  rate = "0.0",
  popularty,
  description = "Movie description",
  movieId,
}) => {
  const languageUpper = wordsUpperCase(language);
  const yearSlice = stringSlice(year);
  const newPopularty = toKValue(popularty);
  const intRate = toIntegar(rate);
  const imageUrl = `https://image.tmdb.org/t/p/w500${image}`;
  const navigate = useNavigate();
  return (
    <Stack borderBottom="1px solid #E0E0E0" paddingY={1.25}>
      <StyledCard elevation={0} showGrid={showGrid}>
        <Stack flexDirection={showGrid ? "column" : "row"}>
          <StyledCardMedia
            component="img"
            image={imageUrl}
            alt={movieTitle}
            className="card-image"
            showGrid={showGrid}
            onClick={() => navigate(`/movie/${movieId}`)}
          />
        </Stack>
        <StyledCardContent showGrid={showGrid}>
          <Typography
            fontSize="17px"
            color="#136CB2"
            fontWeight="400"
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            maxWidth={!showGrid || "124px"}
          >
            {movieTitle}
          </Typography>{" "}
          {!showGrid && (
            <Stack flexDirection="row">
              <Typography fontSize="12px" fontWeight="400" color="#666666">
                {yearSlice}
              </Typography>
              <Divider orientation="vertical" flexItem sx={dividerStyles} />
              <Typography fontSize="12px" fontWeight="400" color="#666666">
                {duration}
              </Typography>
              <Divider orientation="vertical" flexItem sx={dividerStyles} />
              <Typography fontSize="12px" fontWeight="400" color="#666666">
                {languageUpper}
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
              {intRate}
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
              {newPopularty}
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
              <Typography
                fontSize="13px"
                fontWeight="400"
                color="#333333"
                height="36px"
                overflow="hidden"
                textOverflow="ellipsis"
              >
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
