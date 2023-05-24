import React from "react";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const StyledButton = styled(Button)(
  ({ theme, bg, hoverbg, width, rightBorderRadious, leftBorderRadious }) => ({
    backgroundColor: bg,
    padding: "0 16px",
    width: width,
    height: "36px",
    borderTopLeftRadius: !leftBorderRadious && "0",
    borderBottomLeftRadius: !leftBorderRadious && "0",
    borderTopRightRadius: !rightBorderRadious && "0",
    borderBottomRightRadius: !rightBorderRadious && "0",
    "&:hover": { backgroundColor: hoverbg },
  })
);
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
