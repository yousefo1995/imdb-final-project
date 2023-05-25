import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const StyledButton = styled(Button)(
  ({ theme, width, showborder, color, bg, bghover }) => ({
    cursor: "pointer",
    paddingTop: "4px",
    paddingBottom: "4px",
    border: showborder ? "1px solid black" : "none",
    width: width,
    boxSizing: "border-box",
    color: color || "#000",
    backgroundColor: bg || "#f5c518",
    "&:hover": {
      backgroundColor: bghover || "#E2B616",
    },
  })
);
