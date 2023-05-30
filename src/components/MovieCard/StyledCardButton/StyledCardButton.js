import React from "react";
import Typography from "@mui/material/Typography";
import { StyledButton } from "./style";
const StyledCardButton = ({
  children,
  bg = "#2C2C2C",
  hoverbg = "#30353C",
  width = "216px",
  color = "info.main",
  rightBorderRadious = true,
  leftBorderRadious = true,
}) => {
  return (
    <StyledButton
      bg={bg}
      hoverbg={hoverbg}
      width={width}
      rightBorderRadious={rightBorderRadious}
      leftBorderRadious={leftBorderRadious}
    >
      <Typography
        variant="button"
        color={color}
        textTransform="none"
        display="flex"
        alignItems="center"
      >
        {children}
      </Typography>{" "}
    </StyledButton>
  );
};

export default StyledCardButton;
