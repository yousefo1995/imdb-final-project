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
    minWidth: "114px",
    width: "90%",
  },
  [theme.breakpoints.between("600", "1023")]: {
    maxWidth: "90%",
  },
  [theme.breakpoints.between("1024", "1279")]: {
    width: "152px",
  },
  [theme.breakpoints.up("1280")]: {
    width: "186px",
  },
}));

export const StyledIconButtonIMDB = styled(IconButtonIMDB)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
}));
