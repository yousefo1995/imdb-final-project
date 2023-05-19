import React from "react";
import { Typography } from "@mui/material";
import { StyledButton } from "./style";

// props
// login padding 88px  variant="outlined"
// isYellow = true/false home padding 32px

// home page black button / padding 32px  color "#5799ef" /bg "#1F1F1F" / bghover "#2F2F2F"
// home page yellow button / padding 32px
// login padding 88px showborder fontSize FontWeight
const ImdbButton = ({
  children,
  padding = "32px",
  showborder,
  color,
  bg,
  bghover,
  ...res
}) => {
  return (
    <StyledButton
      padding={padding}
      showborder={showborder}
      color={color}
      bg={bg}
      bghover={bghover}
    >
      <Typography {...res} variant="button">
        {children}
      </Typography>
    </StyledButton>
  );
};

export default ImdbButton;
