import React from "react";
import {
  CardActionArea,
  CardMedia,
  Box,
  Typography,
  CardContent,
} from "@mui/material";
import StyledTrailerCard from "./Style";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import { Stack } from "@mui/system";
import Subtitle from "../Core/Subtitle/Subtitle";
const TrailerCard = ({
  title = "title",
  time = "0:00",
  image = "https://picsum.photos/id/870/200/300?grayscale&blur=2",
}) => {
  return (
    <StyledTrailerCard>
      <CardMedia component="img" image={image} className="card-image" />
      <CardContent>
        <Box display="flex" alignItems="center">
          <PlayCircleOutlineRoundedIcon className="play-icon" />
          <Typography color="#fff" fontSize="20px" fontWeight="400">
            {time}{" "}
          </Typography>
        </Box>
        <Subtitle
          showEndIcon={false}
          showStartIcon={false}
          fontWeight="400"
          overFlow="hidden" // not working ? ??
        >
          {title}
        </Subtitle>
        <Typography
          variant="body2"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          A little description of the movie.
        </Typography>
      </CardContent>
    </StyledTrailerCard>
  );
};

export default TrailerCard;
