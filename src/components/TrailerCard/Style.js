import styled from "@emotion/styled";
import { Card, CardContent } from "@mui/material";

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  paddingLeft: "0",
  paddingRight: "0",
  paddingBottom: "0",
}));
const StyledTrailerCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(8, 8, 8, 0.95)",
  display: window.innerWidth <= 1024 ? "none" : "flex",
  alignItems: "center",
  color: "#ffffff",
  borderRadius: "0",
  flexDirection: "row",
  paddingLeft: "16px",
  paddingRight: "16px",

  "& .card-image": {
    // width: "112px",
    // height: "112px",
    marginRight: "16px",
  },

  [theme.breakpoints.between("1024", "1280")]: {
    width: "298px",

    height: "112px",
    paddingLeft: "8px",
    paddingRight: "8px",
    "& .card-image": {
      width: "68px",
      height: "98px",
    },
  },

  [theme.breakpoints.up("1280")]: {
    width: "372px",

    height: "148px",
    "& .card-image": {
      width: "88px",
      height: "132px",
      marginRight: "16px",
    },
  },

  "& .play-icon": {
    fontSize: "36px",
    marginRight: "8px",
  },

  "&:hover": {
    "& .play-icon": {
      color: theme.palette.secondary.main,
      cursor: "pointer",
    },
  },
}));

export default StyledTrailerCard;
