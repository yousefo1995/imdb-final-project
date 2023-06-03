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

  [theme.breakpoints.down("600")]: {
    minWidth: showFullCard ? "114px" : "120px",
    width: showFullCard ? "90%" : "120px",
  },
  [theme.breakpoints.between("600", "1023")]: {
    maxWidth: showFullCard ? "90%" : "140px",
    width: showFullCard ? "90%" : "140px",
  },
  [theme.breakpoints.between("1024", "1279")]: {
    width: showFullCard ? "152px" : "132px",
  },
  [theme.breakpoints.up("1280")]: {
    width: showFullCard ? "186px" : "164px",
  },
}));

export const StyledIconButtonIMDB = styled(IconButtonIMDB)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
}));
