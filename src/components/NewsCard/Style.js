import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const cardContentStyles = { height: "108px", padding: "0" };

const StyledNewsCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.95)",
  display: "flex",
  alignItems: "center",
  color: "#ffffff",
  borderRadius: "0",
  flexDirection: "row",
  paddingLeft: "8px",
  paddingRight: "8px",
  // marginRight: "0.875 rem",

  "& .card-image": {
    width: "90px",
    height: "132px",
    marginRight: "16px",
  },
  [theme.breakpoints.down("600")]: {
    width: "85%",

    height: "132px",
  },
  [theme.breakpoints.down("1024")]: {
    width: "90%",

    height: "132px",
  },

  [theme.breakpoints.between("1024", "1280")]: {
    width: "320px",
    height: "132px",
    paddingLeft: "8px",
    paddingRight: "8px",
  },

  [theme.breakpoints.up("1280")]: {
    width: "396px",

    height: "132px",
  },
}));

export default StyledNewsCard;
