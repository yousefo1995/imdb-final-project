import styled from "@emotion/styled";
import IconButtonIMDB from "../../Core/IconButtonIMDB/IconButtonIMDB";
import Card from "@mui/material/Card";

export const StyledCard = styled(Card)(({ theme, showFullCard }) => ({
  borderTopLeftRadius: "0",
  borderTopRightRadius: "0",
  borderBottomLeftRadius: showFullCard ? "6px" : "0",
  borderBottomRightRadius: showFullCard ? "6px" : "0",
  backgroundColor: "#1A1A1A",
  maxWidth: "232px",
  marginRight: "0.875rem",
}));

export const StyledIconButtonIMDB = styled(IconButtonIMDB)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
}));
