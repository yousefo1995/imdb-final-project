import React from "react";
import { Skeleton, Stack } from "@mui/material";

const ViewMoreSkeleton = () => {
  return (
    <Stack
      width="90px"
      height="30px"
      justifyContent="center"
      flexDirection="row"
      position="relative"
      marginTop={1}
    >
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height="100%"
        sx={{ position: "relative" }}
      />
      <Skeleton
        animation="wave"
        variant="circular"
        width={15}
        height={15}
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
        }}
      />
      <Skeleton
        animation="wave"
        variant="circular"
        width={15}
        height={15}
        sx={{
          position: "absolute",
          top: "20%",
          left: "40%",
        }}
      />
      <Skeleton
        animation="wave"
        variant="circular"
        width={15}
        height={15}
        sx={{
          position: "absolute",
          top: "20%",
          left: "70%",
        }}
      />
    </Stack>
  );
};

export default ViewMoreSkeleton;
