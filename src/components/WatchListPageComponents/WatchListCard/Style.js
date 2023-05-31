import { styled } from "@mui/system";
import { Card, CardContent, CardMedia } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "96px",
  height: "142px",
  paddingY: "0.5rem",
  marginBottom: "12px",
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  paddingLeft: "16px",
  paddingBottom: "0",
  paddingTop: "0",
  justifyContent: "flex-start",
}));

export const dividerStyles = {
  height: "8px",
  mx: 1,
  bgcolor: "#666666",
  paddingTop: "3px",
  paddingBottom: "3px",
};
