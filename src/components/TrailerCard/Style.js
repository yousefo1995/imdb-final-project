import styled from "@emotion/styled";
import { Card } from "@mui/material";

const StyledTrailerCard = styled(Card)(({ theme }) => ({
  padding: "16px",
  backgroundColor: "rgba(0,0,0,1)",
  display: "flex",
  alignItems: "center",
  color: "#ffffff",
  borderRadius: "0",
  //   backgroundColor: "rgb(0,0,0,1)",
  "& .card-image": {
    width: "112px",
    height: "112px",
    marginRight: "16px",
  },

  [theme.breakpoints.between("1024", "1280")]: {
    display: "block",
    width: "298px",
    paddingLeft: "16px",
    paddingRight: "16px",
    height: "112px",
  },

  [theme.breakpoints.up("1280")]: {
    display: "block",
    width: "372px",
    paddingLeft: "16px",
    paddingRight: "16px",
    height: "148px",
  },
  "&:hover": {
    "& .play-icon": {
      color: theme.palette.secondary.main,
      cursor: "pointer",
    },
  },
  //   [theme.breakpoints.up("sm")]: {
  //     // "& .info-box": {
  //     //   width: "100%",
  //     // },
  //   },
}));

export default StyledTrailerCard;
