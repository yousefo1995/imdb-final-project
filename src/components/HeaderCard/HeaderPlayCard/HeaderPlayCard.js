import React from "react";
import { Typography } from "@mui/material";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import { Stack } from "@mui/system";

const HeaderPlayCard = ({ title, time }) => {
  return (
    <Stack flexDirection="row">
      <PlayCircleOutlineRoundedIcon className="play-icon" />
      <Stack flexDirection="column" justifyContent="space-evenly">
        <Typography
          fontSize="24px"
          fontWeight="400"
          color="#fff"
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          width="250px"
          className="header-card-title"
        >
          {title}
        </Typography>
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
    </Stack>
  );
};

export default HeaderPlayCard;
