import styled from "@emotion/styled";
import { Paper } from "@mui/material";

const StyledHeaderCard = styled(Paper)(({ theme }) => ({
  borderRadius: "0",
  position: "relative",
  width: "98%",
  height: "64%",
  "& .card-image": {
    height: "64%",
  },

  "& .play-icon": {
    fontSize: "86px",
    marginRight: "16px",
    marginLeft: "16px",
  },
  [theme.breakpoints.between("1024", "1280")]: {
    width: "668px",
    height: "446px",
    "& .card-image": {
      height: "446px",
    },
  },

  [theme.breakpoints.up("1280")]: {
    width: "848px",
    height: "548px",
    "& .card-image": {
      height: "548px",
    },
  },
  "&:hover": {
    "& .play-icon": {
      color: theme.palette.secondary.main,
      cursor: "pointer",
    },
  },
  [theme.breakpoints.up("sm")]: {
    "& .info-box": {
      width: "100%",
    },
  },
}));

export default StyledHeaderCard;
