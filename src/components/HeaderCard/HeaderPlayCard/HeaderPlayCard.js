import React from "react";
import { Typography, Box } from "@mui/material";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import { Stack } from "@mui/system";

import Subtitle from "../../Core/Subtitle/Subtitle";

const HeaderPlayCard = ({ title, time }) => {
  return (
    <Box display="flex">
      <PlayCircleOutlineRoundedIcon className="play-icon" />
      <Stack flexDirection="column" justifyContent="space-evenly">
        <Subtitle
          showEndIcon={false}
          showStartIcon={false}
          fontWeight="400"
          overFlow="hidden" // not working ? ??
        >
          {title}
        </Subtitle>
        <Typography color="#fff" fontSize="20px" fontWeight="400">
          Watch the Trailer
        </Typography>
      </Stack>
      <Stack
        height="88px"
        flexDirection="row"
        alignItems="center"
        marginLeft="36px"
        minWidth="100px"
      >
        <Typography color="#fff" fontSize="20px" fontWeight="400">
          {time}{" "}
        </Typography>
      </Stack>
    </Box>
  );
};

export default HeaderPlayCard;
