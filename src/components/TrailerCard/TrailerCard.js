import React from "react";
import { CardMedia, Box, Typography, Stack } from "@mui/material";
import StyledTrailerCard, { StyledCardContent } from "./Style";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import Subtitle from "../Core/Subtitle/Subtitle";

const TrailerCard = ({
  title = "title",
  time = "0:00",
  image = "https://picsum.photos/id/870/200/300?grayscale&blur=2",
  description,
}) => {
  return (
    <StyledTrailerCard>
      <Stack flexDirection="row" alignItems="center" paddingTop={2}>
        <CardMedia component="img" image={image} className="card-image" />
      </Stack>
      <StyledCardContent>
        <Stack flexDirection="row" mb={1} alignItems="flex-end">
          <PlayCircleOutlineRoundedIcon className="play-icon" />
          <Typography color="#fff" fontSize="16px" fontWeight="400">
            {time}
          </Typography>
        </Stack>
        <Typography
          fontWeight="700"
          fontSize="16px"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          {title}
        </Typography>
        <Typography
          fontSize="14px"
          variant="body2"
          color="#A8A8A8"
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          {description}
        </Typography>
      </StyledCardContent>
    </StyledTrailerCard>
  );
};

export default TrailerCard;
