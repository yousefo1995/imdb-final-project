import React from "react";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { IconButton } from "@mui/material";
import { iconButtonStyles, IconStyle } from "./style";

// disabled
const WishlistButton = ({ ...res }) => {
  return (
    <IconButton sx={iconButtonStyles} variant="contained" {...res}>
      <BookmarkAddIcon sx={IconStyle} color="action" />
    </IconButton>
  );
};

export default WishlistButton;
