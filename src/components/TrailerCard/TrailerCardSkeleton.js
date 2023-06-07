import React from "react";
import StyledTrailerCard from "./Style";
import { Skeleton } from "@mui/material";
const TrailerCardSkeleton = () => {
  return (
    <StyledTrailerCard>
      <Skeleton
        variant="rectangular"
        width="100%"
        height={320}
        sx={{ bgcolor: "#3A3A3A" }}
      />
    </StyledTrailerCard>
  );
};

export default TrailerCardSkeleton;
