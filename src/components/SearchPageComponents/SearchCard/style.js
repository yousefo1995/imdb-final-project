import { styled } from "@mui/system";
import { Card, CardContent, CardMedia } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "50px",
  height: "74px",
  paddingY: "0.5rem",
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  paddingLeft: "8px",
  paddingBottom: "0",
  paddingTop: "0",
}));
