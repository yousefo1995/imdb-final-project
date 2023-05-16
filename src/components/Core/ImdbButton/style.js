import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const StyledButton = styled(Button)(({ theme, isYellow, padding }) => ({
  cursor: "pointer",
  paddingTop: "4px",
  paddingBottom: "4px",
  paddingLeft: padding,
  paddingRight: padding,
  color: isYellow ? "#000" : "#5799ef",
  backgroundColor: isYellow ? "#f5c518" : "#1F1F1F",
  "&:hover": {
    backgroundColor: isYellow ? "#E2B616" : "#2F2F2F",
  },
}));
