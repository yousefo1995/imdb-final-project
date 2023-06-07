import React from "react";
import { Skeleton, Stack } from "@mui/material";
import { StyledCard } from "../MovieCard/style";

const MovieCardSkeleton = ({ showFullCard }) => {
  return (
    <StyledCard showFullCard={showFullCard}>
      <Stack
        bgcolor="primary.light"
        alignItems="center"
        justifyContent="space-between"
        height={274}
        paddingBottom={1}
      >
        <Skeleton
          variant="rectangular"
          width="100%"
          height={120}
          sx={{ bgcolor: "#909090" }}
        />
        <Skeleton
          variant="text"
          width="80%"
          sx={{ bgcolor: "#909090" }}
          height={40}
        />
        <Skeleton
          variant="text"
          width="80%"
          height={40}
          sx={{ bgcolor: "#909090" }}
        />
        <Skeleton
          variant="text"
          width="80%"
          height={20}
          sx={{ bgcolor: "#909090" }}
        />
      </Stack>
    </StyledCard>
  );
};

export default MovieCardSkeleton;
