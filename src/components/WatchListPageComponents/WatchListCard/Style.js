import { styled } from "@mui/system";
import { Card, CardContent, CardMedia } from "@mui/material";

export const StyledCard = styled(Card)(({ theme, showGrid }) => ({
  display: "flex",
  flexDirection: showGrid ? "column" : "row",
  alignItems: "flex-start",
  marginLeft: showGrid && "16px",
  marginRight: showGrid && "16px",
}));

export const StyledCardMedia = styled(CardMedia)(({ theme, showGrid }) => ({
  width: showGrid ? "146px" : "96px",
  height: showGrid ? "216px" : "142px",
  paddingY: "0.5rem",
  marginBottom: "12px",
}));

export const StyledCardContent = styled(CardContent)(({ theme, showGrid }) => ({
  paddingLeft: "16px",
  paddingBottom: "0",
  paddingTop: "0",
  display: "flex",
  flexDirection: "column",
  alignItems: showGrid ? "center" : "flex-start",
}));

export const dividerStyles = {
  height: "8px",
  mx: 1,
  bgcolor: "#666666",
  paddingTop: "3px",
  paddingBottom: "3px",
};
