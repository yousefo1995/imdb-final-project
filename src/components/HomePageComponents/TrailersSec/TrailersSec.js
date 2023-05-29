import React from "react";
import { Stack } from "@mui/material";
import Subtitle from "../../Core/Subtitle/Subtitle";
import Title from "../../Core/Title/Title";
import TrailerCard from "../../TrailerCard/TrailerCard";

const TrailersSec = () => {
  return (
    <Stack marginTop={1} paddingLeft={2} display={{ xs: "none", lg: "block" }}>
      <Title marginBottom={3} fontSize="20px">
        Up next
      </Title>
      <TrailerCard />
      <TrailerCard />
      <TrailerCard />
      <Subtitle showStartIcon={false} marginTop={2} minWidth="100%">
        Browse trailers
      </Subtitle>
    </Stack>
  );
};

export default TrailersSec;
