import React from "react";
import { CardMedia, Typography, CardContent, Stack } from "@mui/material";
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
      <Stack flexDirection="row" alignItems="center">
        <CardMedia component="img" image={image} className="card-image" />
      </Stack>
      <CardContent sx={cardContentStyles}>
        <Stack height="inherit" justifyContent="flex-start">
          <Typography
            marginBottom="4px"
            variant="body1"
            overflow="hidden"
            textOverflow="ellipsis"
            height="74px"
          >
            {title}
          </Typography>
          <Stack flexDirection="row">
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
          </Stack>
        </Stack>
      </CardContent>
    </StyledNewsCard>
  );
};

export default NewsCard;
