import { Card } from "@mui/material";
import styled from "@emotion/styled";

const StyledIconCard = styled(Card)(({ theme }) => ({
  height: "100%",
  backgroundColor: "#3A3A3A",
  color: "#fff",
  paddingLeft: "16px",
  paddingRight: "16PX",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("lg")]: {
    height: "36px",
    flexDirection: "row",
  },
  [theme.breakpoints.up("xl")]: {
    height: "100%",
    maxHeight: "320px",
    minHeight: "180px",
  },

  "& .icon": {
    fontSize: "32px",
    marginBottom: "16px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "12px",
      marginBottom: "0",
      marginRight: "4px",
    },
  },
}));

export default StyledIconCard;
