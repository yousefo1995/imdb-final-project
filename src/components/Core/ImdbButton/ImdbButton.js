import React from "react";
import { Typography } from "@mui/material";
import { StyledButton } from "./style";

const ImdbButton = ({
  children,
  width = "288px",
  showborder,
  color,
  bg,
  bghover,
  fontWeight,
  fontSize,
  ...res
}) => {
  return (
    <StyledButton
      width={width}
      showborder={showborder}
      color={color}
      bg={bg}
      bghover={bghover}
      {...res}
    >
      <Typography
        fontWeight={fontWeight}
        textTransform="none"
        fontSize={fontSize}
        variant="button"
      >
        {children}
      </Typography>
    </StyledButton>
  );
};

export default ImdbButton;
