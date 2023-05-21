import React from "react";
import { CardMedia, Box, Typography, CardContent } from "@mui/material";
import StyledNewsCard from "./Style";
import { cardContentStyles } from "./Style";
const NewsCard = ({
  title = "News title",
  image,
  date = "Month 00",
  source = "News source",
}) => {
  return (
    <StyledNewsCard>
      <Box display="flex" alignItems="center">
        <CardMedia component="img" image={image} className="card-image" />
      </Box>
      <CardContent sx={cardContentStyles}>
        <Box
          display="flex"
          flexDirection="column"
          height="inherit"
          justifyContent="flex-start"
        >
          <Typography
            marginBottom="4px"
            variant="body1"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {title}
          </Typography>
          <Box display="flex">
            <Typography
              variant="body2"
              overflow="hidden"
              textOverflow="ellipsis"
              marginRight="8px"
            >
              {date}
            </Typography>
            <Typography
              variant="body2"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {source}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </StyledNewsCard>
  );
};

export default NewsCard;
