import React from "react";
import { Typography } from "@mui/material";
import { StyledButton } from "./style";

// props
// login padding 88px  variant="outlined"
// isYellow = true/false home padding 32px

const ImdbButton = ({ children, isYellow = true, padding = "32px" }) => {
  return (
    <StyledButton padding={padding} isYellow={isYellow}>
      <Typography variant="button">{children}</Typography>
    </StyledButton>
  );
};

export default ImdbButton;
