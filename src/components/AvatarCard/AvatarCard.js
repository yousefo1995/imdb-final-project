import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import { avatarStyle } from "./style";
const AvatarCard = ({ name = "actor name", image, age = "00" }) => {
  return (
    <Stack flexDirection="column" alignItems="center">
      <Avatar alt={name} src={image} sx={avatarStyle} />
      <Typography fontSize="16px" fontWeight="500" color="#fff">
        {name}
      </Typography>
      <Typography fontSize="16px" fontWeight="500" color="#fff">
        {age}
      </Typography>
    </Stack>
  );
};

export default AvatarCard;
