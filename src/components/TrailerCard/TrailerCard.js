import React from "react";
import { CardMedia, Box, Typography } from "@mui/material";
import StyledTrailerCard, { StyledCardContent } from "./Style";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import Subtitle from "../Core/Subtitle/Subtitle";

const TrailerCard = ({
  title = "title",
  time = "0:00",
  image = "https://picsum.photos/id/870/200/300?grayscale&blur=2",
}) => {
  return (
    <StyledTrailerCard>
      <Box display="flex" alignItems="center">
        <CardMedia component="img" image={image} className="card-image" />
      </Box>
      <StyledCardContent>
        <Box display="flex" mb={1} alignItems="flex-end">
          <PlayCircleOutlineRoundedIcon className="play-icon" />
          <Typography color="#fff" fontSize="16px" fontWeight="400">
            {time}
          </Typography>
        </Box>
        <Subtitle
          showEndIcon={false}
          showStartIcon={false}
          fontWeight="400"
          overFlow="hidden" // not working
          textOverflow="ellipsis" //
          fontSize="16px"
        >
          {title}
        </Subtitle>
        <Typography variant="body2" overflow="hidden" textOverflow="ellipsis">
          A little description of the movie.
        </Typography>
      </StyledCardContent>
    </StyledTrailerCard>
  );
};

export default TrailerCard;
