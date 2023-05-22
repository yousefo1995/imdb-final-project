import { Card } from "@mui/material";
import styled from "@emotion/styled";

const StyledIconCard = styled(Card)(({ theme }) => ({
  height: "164px",
  backgroundColor: "#3A3A3A",
  color: "#fff",
  paddingLeft: "16px",
  paddingRight: "16PX",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "row",
    height: "36px",
  },
  [theme.breakpoints.up("xl")]: {
    height: "204px",
  },

  "& .icon": {
    fontSize: "32px",
    marginBottom: "16px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "12px",
    },
  },
}));

export default StyledIconCard;
