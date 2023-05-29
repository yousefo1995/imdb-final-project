import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const SubtitleLink = styled(Typography)({
  display: "flex",
  maxWidth: "240px",
  alignItems: "center",
  cursor: "pointer",
  color: "#fff",
  paddingLeft: "12px",

  "& .iconB": {
    transform: "rotate(90deg)",
    color: "#f5c518",
    paddingLeft: "0",
    position: "absolute",
    left: "-17.5px",
  },

  "&:hover": {
    "& .icon": {
      color: "#f5c518",
    },
  },
});
