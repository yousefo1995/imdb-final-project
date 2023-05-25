import { Chip } from "@mui/material";
import styled from "@emotion/styled";

const StyledChip = styled(Chip)((theme) => ({
  backgroundColor: "#252525",
  height: "30px",
  color: "#fff",
  marginRight: "8px",
  marginTop: "8px",
  "&:hover": {
    backgroundColor: "#2C2C2C",
  },
}));

export default StyledChip;
