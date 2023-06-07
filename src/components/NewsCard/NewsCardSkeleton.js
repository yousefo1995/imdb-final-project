import React from "react";
import { Skeleton, Stack } from "@mui/material";
const NewsCardSkeleton = () => {
  return (
    <Stack flexDirection="row" width="280px" bgcolor="primary.light">
      <Skeleton
        variant="rectangular"
        width="100px"
        sx={{ bgcolor: "#909090" }}
        height="132px"
      />
      <Stack marginLeft={1} justifyContent="space-around">
        <Skeleton
          variant="text"
          sx={{ bgcolor: "#909090" }}
          width="120px"
          height="40px"
        />
        <Skeleton
          variant="text"
          sx={{ bgcolor: "#909090" }}
          width="120px"
          height="30px"
        />{" "}
        <Skeleton
          variant="text"
          sx={{ bgcolor: "#909090" }}
          width="120px"
          height="20px"
        />
      </Stack>
    </Stack>
  );
};

export default NewsCardSkeleton;
