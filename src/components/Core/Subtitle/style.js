import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const SubtitleLink = styled(Typography)({
  display: "flex",
  maxWidth: "240px",
  alignItems: "center",
  cursor: "pointer",
  color: "#fff",

  "& .iconB": {
    transform: "rotate(90deg)",
  },

  "&:hover": {
    "& .icon": {
      color: "#f5c518",
    },
  },
});
