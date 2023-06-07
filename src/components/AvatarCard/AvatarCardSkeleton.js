import React from "react";
import { Stack } from "@mui/material";
import { Skeleton } from "@mui/material";
const AvatarCardSkeleton = () => {
  return (
    <Stack alignItems="center">
      <Skeleton
        variant="circular"
        width="120px"
        sx={{ bgcolor: "#909090" }}
        height="120px"
      />
      <Skeleton
        variant="text"
        sx={{ bgcolor: "#909090" }}
        width="80%"
        height="20px"
      />
      <Skeleton
        variant="text"
        sx={{ bgcolor: "#909090" }}
        width="40%"
        height="20px"
      />
    </Stack>
  );
};

export default AvatarCardSkeleton;
