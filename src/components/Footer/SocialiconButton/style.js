import { IconButton } from "@mui/material";
import styled from "@emotion/styled";

export const StyledFooterIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#000",
  padding: "12px 12px",
  margin: "12px",
  color: "#fff",
  fontSize: "24px",
  "&:hover": { backgroundColor: "#3A3A3A" },
}));
