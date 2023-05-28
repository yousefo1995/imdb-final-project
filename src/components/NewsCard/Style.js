import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const cardContentStyles = { height: "108px", padding: "0" };

const StyledNewsCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(18, 18, 18, 0.95)",
  display: "flex",
  alignItems: "center",
  color: "#ffffff",
  borderRadius: "0",
  flexDirection: "row",
  paddingLeft: "16px",
  paddingRight: "16px",
  marginRight: "0.875 rem",

  "& .card-image": {
    width: "90px",
    height: "132px",
    marginRight: "16px",
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
