import styled from "@emotion/styled";
import WishlistButton from "../../Core/WishlistButton/WishlistButton";
import Card from "@mui/material/Card";

export const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: "0px",
  backgroundColor: "#1A1A1A",
  maxWidth: "232px",
  marginRight: "0.875rem",
}));

export const StyledWishlistBtn = styled(WishlistButton)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
}));
