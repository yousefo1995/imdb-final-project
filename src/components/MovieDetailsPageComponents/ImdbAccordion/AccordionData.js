import React from "react";
import { Divider, Stack, Typography } from "@mui/material";

const AccordionData = ({ creator, stars }) => {
  return (
    <Typography>
      <Divider sx={{ bgcolor: "#7B7B7B" }} />
      <Stack
        paddingLeft={1}
        paddingTop="16px"
        paddingBottom="16px"
        flexDirection="row"
        overflow="hidden"
        whiteSpace="nowrap"
      >
        <Typography color="#FFF">Creator</Typography>
        {creator &&
          creator.map((item) => (
            <Typography color="info.main" marginLeft={2}>
              {item.name}
            </Typography>
          ))}
      </Stack>
      <Divider sx={{ bgcolor: "#7B7B7B" }} />
      <Stack
        paddingLeft={1}
        paddingTop="16px"
        paddingBottom="16px"
        flexDirection="row"
      >
        <Typography color="#FFF">Production countries</Typography>

        {stars &&
          stars.map((item) => (
            <Typography color="info.main" marginLeft={2}>
              {item.name}
            </Typography>
          ))}
      </Stack>
      <Divider sx={{ bgcolor: "#7B7B7B" }} />
    </Typography>
  );
};

export default AccordionData;
