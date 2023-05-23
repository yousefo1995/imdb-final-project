import React from "react";

import StyledCardButton from "../../MovieCard/StyledCardButton/StyledCardButton";
import { Stack, Typography } from "@mui/material";

const MovieRatingComponent = ({ children, label, ...res }) => {
  return (
    <Stack alignItems="center" marginRight={1}>
      <Typography
        color="Rgba(255,255,255,0.7)"
        fontSize="12px"
        display={{ xs: "none", lg: "block" }}
        marginBottom={0.5}
      >
        {label}
      </Typography>
      <StyledCardButton
        bg="#212121"
        hoverbg="#2C2C2C"
        width="96px"
        color="info.main"
        {...res}
      >
        {children}
      </StyledCardButton>
    </Stack>
  );
};

export default MovieRatingComponent;
